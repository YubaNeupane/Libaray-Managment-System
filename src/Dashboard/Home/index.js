import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../Landing Page/Component/ButtonElement';
import { logout } from '../../Redux/actions';
import { Redirect } from 'react-router-dom';
import Topbar from '../Component/Topbar';
import Sidebar from '../Component/sidebar/Sidebar';
import Home from '../pages/Home/Home';

export default function Main() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="container">
      <Home />
    </div>
  );
}
