import React, { useState } from 'react';
import { Navbar } from './Component/Navbar';
import { Sidebar } from './Component/Sidebar';
import HeroSection from './Component/HeroSection';
import InfoSection from './Component/InfoSection';
import {
  landingObjOne,
  landingObjTwo,
  landingObjThree,
} from './Component/InfoSection/data';

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
      <InfoSection {...landingObjOne} />
      <InfoSection {...landingObjTwo} />
      <InfoSection {...landingObjThree} />
    </div>
  );
}

export default LandingPage;
