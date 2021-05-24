import React from 'react';
import AppRouter from './components/router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter>
        <h1 className="title is-1">Hello world</h1>
      </AppRouter>
    </Provider>
  );
};

export default CalendarApp;
