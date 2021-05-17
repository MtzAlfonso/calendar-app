import moment from 'moment';
import types from '../types/types';

const initialState = {
  events: [
    {
      title: 'Evento de prueba',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      notes: 'Comprar el pastel',
      user: {
        _id: '123',
        name: 'Alfonso',
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.eventCleanActive:
      return {
        ...state,
        activeEvent: null,
      };
    default:
      return state;
  }
};
