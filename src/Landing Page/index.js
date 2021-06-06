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
import Services from './Component/Services';
import Footer from './Component/Footer';
import SignIn from '../Auth/SignIn';

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <SignIn
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
      <HeroSection />
      <InfoSection {...landingObjOne} />
      <InfoSection {...landingObjTwo} />
      <Services />
      <InfoSection {...landingObjThree} />
      <h1>Footer </h1>
    </div>
  );
}

export default LandingPage;
