import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import moment from 'moment';
import 'moment/locale/es';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/uiActions';
import { eventSetActive } from '../../actions/eventsActions';
import AddNewFab from '../ui/AddNewFab';

moment.locale('es');
const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
  const { events } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );

  const onDoubleClickEvent = () => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (lastView) => {
    setLastView(lastView);
    localStorage.setItem('lastView', lastView);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#bc123e',
      borderColor: '#bc123e',
      borderRadius: '0px',
      opacity: '0.9',
      zIndex: '1',
      display: 'block',
      color: 'white',
    };
    return {
      style,
    };
  };

  return (
    <div>
      <Navbar />
      <div className="calendar-screen">
        <Calendar
          components={{ event: CalendarEvent }}
          endAccesor="end"
          events={events}
          eventPropGetter={eventStyleGetter}
          localizer={localizer}
          messages={messages}
          onDoubleClickEvent={onDoubleClickEvent}
          onSelectEvent={onSelectEvent}
          onView={onViewChange}
          startAccesor="start"
          view={lastView}
        />
        <AddNewFab />
        <CalendarModal />
      </div>
    </div>
  );
};

export default CalendarScreen;
