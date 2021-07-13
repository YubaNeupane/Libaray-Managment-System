import React, { useState, useEffect } from 'react';
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
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedInUser } from '../Redux/actions';

import Footer from './Component/Footer/index';

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

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser());
    }
  }, []);

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
      <Footer />
    </div>
  );
}

export default LandingPage;
