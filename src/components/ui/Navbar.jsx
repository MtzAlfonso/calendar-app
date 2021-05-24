import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/authActions';
import { eventClear } from '../../actions/eventsActions';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(eventClear());
  };

  const { name } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand">¡Bienvenido {name}!</span>
        <button className="btn btn-outline-danger px-4" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt me-1"></i>
          Salir
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
