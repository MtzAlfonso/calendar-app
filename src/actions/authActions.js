import Swal from 'sweetalert2';
import { fetchWithoutToken } from '../helpers/fetchData';
import types from '../types/types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const response = await fetchWithoutToken(
      'auth',
      {
        email,
        password,
      },
      'POST'
    );

    const body = await response.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      Swal.fire('Error', body.msg || 'Rellene los campos', 'error');
    }
  };
};

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const response = await fetchWithoutToken(
      'auth/new',
      {
        email,
        password,
        name,
      },
      'POST'
    );
    const body = await response.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      Swal.fire('Error', body.msg || 'Rellene los campos', 'error');
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
