import React, { useState } from 'react';
import { Navbar } from './Component/Navbar';
import { Sidebar } from './Component/Sidebar';

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
  );
}

export default LandingPage;
