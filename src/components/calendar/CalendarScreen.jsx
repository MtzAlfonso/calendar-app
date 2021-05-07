import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';
moment.locale('es');
const localizer = momentLocalizer(moment);
const events = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
  },
];

const CalendarScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="calendar-screen px-2 pb-2">
        <Calendar
          localizer={localizer}
          events={events}
          startAccesor="start"
          endAccesor="end"
          messages={messages}
        />
      </div>
    </div>
  );
};

export default CalendarScreen;
