import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../Landing Page/Component/ButtonElement';
import { logout } from '../../Redux/actions';
import { Redirect } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>THIS IS HOME PAGE</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
