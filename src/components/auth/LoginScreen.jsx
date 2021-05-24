import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';

const LoginScreen = () => {
  const dispatch = useDispatch();
  // const { checking } = useSelector((state) => state.auth);

  const initialForm = {
    email: '',
    password: '',
  };

  const [formLoginValues, handleLoginInputChange] = useForm(initialForm);

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  return (
    <div className="container align-items-center justify-content-center login d-flex animate__animated animate__flipInY">
      <div className="row my-auto w-100 justify-content-center">
        <div className="col-12 col-md-6 my-2 bg-light card shadow py-5 align-items-center">
          <h2 className="fw-bold text-center pb-3 text-primary">Ingreso</h2>
          <form className="w-75" onSubmit={handleLogin}>
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
                  onChange={handleLoginInputChange}
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
                  onChange={handleLoginInputChange}
                  value={password}
                />
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary my-4 px-5">Ingresar</button>
              <div>
                <Link to="/register">Crear una nueva cuenta</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
