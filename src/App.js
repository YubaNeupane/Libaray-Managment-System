import React from 'react';
import LandingPage from './Landing Page';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
