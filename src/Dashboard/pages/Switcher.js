import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Component/sidebar/Sidebar';
import Home from './Home/Home';
import Search from './Search/Search';
import AddBook from './AddBook/Index';
import ManageBooks from './Manage Books';

export default function Switcher({ data }) {
  return (
    <Router>
      <Sidebar userData={data} />
      <Switch>
        <Route path="/home">
          <Home userData={data} />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/addBook" exact>
          <AddBook />
        </Route>
        <Route path="/manageBooks" exact>
          <ManageBooks />
        </Route>
      </Switch>
    </Router>
  );
}
