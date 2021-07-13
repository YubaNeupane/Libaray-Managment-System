import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Component/sidebar/Sidebar';
import Home from './Home/Home';
import Search from './Search/Search';

export default function Switcher({ data }) {
  return (
    <Router>
      <Sidebar userData={data} />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}
