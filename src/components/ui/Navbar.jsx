import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand">Alfonso</span>
        <button className="btn btn-outline-danger px-4">
          <i className="fas fa-sign-out-alt me-1"></i>
          Salir
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
