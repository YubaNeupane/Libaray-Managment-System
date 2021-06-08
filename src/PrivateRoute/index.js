import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={() => {
        const user = localStorage.getItem('user')
          ? JSON.parse(localStorage.getItem('user'))
          : null;

        if (user) {
          return <Component {...rest} />;
        } else {
          return <Redirect to={'/'} />;
        }
      }}
    />
  );
}
