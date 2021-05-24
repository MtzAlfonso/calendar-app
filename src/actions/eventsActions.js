import { fetchWithToken } from '../helpers/fetchData';
import { parseEvents } from '../helpers/parseEvents';
import types from '../types/types';

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;
    try {
      const response = await fetchWithToken('events', event, 'POST');
      const body = await response.json();
      if (body.ok) {
        const compEvent = {
          id: body.event.id,
          ...event,
          user: {
            _id: uid,
            name,
          },
        };
        console.log(compEvent);
        dispatch(eventAddNew(compEvent));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventCleanActive = () => ({
  type: types.eventCleanActive,
});

export const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});

export const eventDeleted = () => ({
  type: types.eventDeleted,
});

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const response = await fetchWithToken('events');
      const { events } = await response.json();
      dispatch(eventLoaded(parseEvents(events)));
    } catch (error) {
      console.log(error);
    }
  };
};

const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});

export const eventClear = () => ({
  type: types.eventClear,
});
