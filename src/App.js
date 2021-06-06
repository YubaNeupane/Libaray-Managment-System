import React from 'react';
import LandingPage from './Landing Page';
import SignIn from './Auth/SignIn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signin" component={SignIn} exact />
      </Switch>
    </Router>
  );
}

export default App;
