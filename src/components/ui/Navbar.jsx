import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">Alfonso</div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-danger">Salir</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
