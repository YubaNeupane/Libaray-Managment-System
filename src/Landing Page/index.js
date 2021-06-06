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
import SignUp from '../Auth/SignUp';

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

  const [openSignUp, setOpenSignUp] = useState(false);

  const handleClickOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };

  return (
    <div>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        handleClickOpen={handleClickOpen}
      />
      <Navbar
        toggle={toggle}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <SignIn
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleClickOpenSignUp={handleClickOpenSignUp}
        handleCloseSignUp={handleCloseSignUp}
        open={open}
      />
      <SignUp
        handleClickOpenSignIn={handleClickOpen}
        handleCloseSignIn={handleClose}
        handleClickOpen={handleClickOpenSignUp}
        handleClose={handleCloseSignUp}
        open={openSignUp}
      />
      <HeroSection />
      <InfoSection {...landingObjOne} handleClickOpen={handleClickOpen} />
      <InfoSection {...landingObjTwo} />
      <Services />
      <InfoSection
        handleClickOpen={handleClickOpenSignUp}
        {...landingObjThree}
      />
      <h1>Footer </h1>
    </div>
  );
}

export default LandingPage;
