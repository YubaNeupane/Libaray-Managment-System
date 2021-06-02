import React, { useState } from 'react';
import { Navbar } from './Component/Navbar';
import { Sidebar } from './Component/Sidebar';
import HeroSection from './Component/HeroSection';

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
