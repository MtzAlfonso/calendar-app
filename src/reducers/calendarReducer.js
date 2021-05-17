import moment from 'moment';

const initialState = {
  events: [
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
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
