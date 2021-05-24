import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const initialForm = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  const [formRegisterValues, handleRegisterInputChange] = useForm(initialForm);

  const { name, email, password, password2 } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== password2) {
      return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    }
    dispatch(startRegister(email, password, name))
  };

  return (
    <div className="container align-items-center justify-content-center login d-flex">
      <div className="row my-auto w-100 justify-content-center">
        <div className="col-12 col-md-6 my-2 bg-light card shadow py-5 align-items-center">
          <h2 className="fw-bold text-center pb-3 text-primary">Registro</h2>
          <form className="w-75" onSubmit={handleRegister}>
            <div className="mb-2">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="text-secondary fas fa-user"></i>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="form-control"
                  onChange={handleRegisterInputChange}
                  value={name}
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
                  onChange={handleRegisterInputChange}
                  value={email}
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
                  onChange={handleRegisterInputChange}
                  value={password}
                />
              </div>
            </div>
            <div className="mb-2">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="text-secondary fas fa-unlock-alt"></i>
                </div>
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirma password"
                  className="form-control"
                  onChange={handleRegisterInputChange}
                  value={password2}
                />
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary my-4 px-5">Sign In</button>
              <div>
                <Link to="/login">Ya estás registrado?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
