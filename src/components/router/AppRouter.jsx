import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { startCheking } from '../../actions/authActions';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import CalendarScreen from '../calendar/CalendarScreen';
import { LoaderScreen } from '../ui/LoaderScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startCheking());
  }, [dispatch]);

  if (checking) {
    return <LoaderScreen />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isLoggedIn={!!uid}
          />
          <PublicRoute
            exact
            path="/register"
            component={RegisterScreen}
            isLoggedIn={!!uid}
          />
          <PrivateRoute
            exact
            path="/"
            component={CalendarScreen}
            isLoggedIn={!!uid}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
