import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
moment.locale('es');
const localizer = momentLocalizer(moment);
const events = [
  {
    title: 'Evento de prueba',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#FAFAFA',
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'Alfonso',
    },
  },
];

const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );

  const onDoubleClickEvent = (e) => {
    console.log(e);
  };

  const onSelectEvent = (e) => {
    console.log(e);
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
        <CalendarModal />
      </div>
    </div>
  );
};

export default CalendarScreen;
