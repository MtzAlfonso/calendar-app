import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendarMessagesES';
import moment from 'moment';
import 'moment/locale/es';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/uiActions';
import {
  eventCleanActive,
  eventSetActive,
  eventStartLoading,
} from '../../actions/eventsActions';
import AddNewFab from '../ui/AddNewFab';

moment.locale('es');
const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
  const { events } = useSelector((state) => state.calendar);
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );
  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  const onDoubleClickEvent = () => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onSelectSlot = (e) => {
    dispatch(eventCleanActive());
  };

  const onViewChange = (lastView) => {
    setLastView(lastView);
    localStorage.setItem('lastView', lastView);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: uid === event.user._id ? '#e93b81' : '#a7bbc7',
      borderColor: uid === event.user._id ? '#e93b81' : '#a7bbc7',
      borderRadius: '5px',
      opacity: uid === event.user._id ? '1' : '0.8',
      zIndex: '1',
      display: 'block',
      color: '#ffffff',
    };
    return {
      style,
    };
  };

  return (
    <div className="">
      <Navbar />
      <div className="calendar-screen animate__animated animate__fadeIn">
        <Calendar
          components={{ event: CalendarEvent }}
          endAccesor="end"
          events={events}
          eventPropGetter={eventStyleGetter}
          localizer={localizer}
          messages={messages}
          onDoubleClickEvent={onDoubleClickEvent}
          onSelectEvent={onSelectEvent}
          onSelectSlot={onSelectSlot}
          onView={onViewChange}
          selectable={true}
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
