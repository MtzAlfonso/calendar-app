import React from 'react';

const LoginScreen = () => {
  return (
    <div className="container align-items-center justify-content-center login d-flex">
      <div className="row my-auto w-100">
        <div className="col-12 col-md-6 my-2 bg-light card shadow py-5 align-items-center">
          <h2 className="fw-bold text-center pb-3 text-primary">Inicio</h2>
          <form className="w-75">
            <div className="mb-2">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="text-secondary fas fa-envelope"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-2">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="text-secondary fas fa-key"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-4 px-5">Ingresar</button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 my-2 bg-primary card shadow py-5 align-items-center">
          <h2 className="fw-bold text-center pb-3 text-light">Registro</h2>
          <form className="w-75">
            <div className="mb-2">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="text-secondary fas fa-user"></i>
                </div>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-2">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="text-secondary fas fa-envelope"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-2">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="text-secondary fas fa-key"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-2">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="text-secondary fas fa-key"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirma password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-light mt-4 px-5">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
