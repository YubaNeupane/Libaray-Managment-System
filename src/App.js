import React, { useState } from 'react';
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
import Home from './Dashboard/pages/Home/Home';
import Search from './Dashboard/pages/Search/Search';
import Topbar from './Dashboard/Component/Topbar';
import Sidebar from './Dashboard/Component/sidebar/Sidebar';

import './App.css';
import Dashboard from './Dashboard';
import Switcher from './Dashboard/pages/Switcher';

function App() {
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

  return (
    <Router>
      {localStorage.getItem('user') ? <Switcher data={user} /> : null}
      <Switch>
        <Route path="/" component={LandingPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
