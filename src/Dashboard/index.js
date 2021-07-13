import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Topbar from './Component/Topbar';
import Sidebar from './Component/sidebar/Sidebar';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import '../App.css';
import PrivateRoute from '../PrivateRoute';

export default function Dashboard() {
  return <Router></Router>;
}
