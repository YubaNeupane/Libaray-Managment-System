import React from 'react';
import LandingPage from './Landing Page';
import SignIn from './Auth/SignIn';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import PrivateRoute from './PrivateRoute';
import Home from './Dashboard/Home';

function App() {
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        {user ? (
          <Redirect to="/home" />
        ) : (
          <Route path="/" component={LandingPage} exact />
        )}
      </Switch>
    </Router>
  );
}

export default App;
