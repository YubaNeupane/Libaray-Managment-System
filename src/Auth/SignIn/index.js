import React from 'react';

import { Button } from './../../Landing Page/Component/ButtonElement';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { makeStyles } from '@material-ui/core/styles';

import SignInContent from './SignInContent';
import { useDispatch, useSelector } from 'react-redux';
import {
  signin,
  getBook,
  getUsersData,
  getReturnDate,
} from '../../Redux/actions';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#B4EEB4',
  },
}));

export default function SignIn({
  handleClickOpen,
  handleClose,
  open,
  handleClickOpenSignUp,
  handleCloseSignUp,
}) {
  const classes = useStyles();

  const notify = (m) =>
    toast.error(m, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleCloseAndOpen = () => {
    handleClose();
    handleClickOpenSignUp();
  };

  const dispatch = useDispatch();

  const signInUser = (email, password) => {
    if (email == '') {
      notify('Email field is empty!');
      return;
    }
    if (password == '') {
      notify('Password field is empty!');
      return;
    }
    const user = {
      email,
      password,
    };

    dispatch(signin(user));
    dispatch(getBook());
    dispatch(getReturnDate());
    dispatch(getUsersData());

    notify('Login Failed! Try again...');
  };

  const auth = useSelector((state) => state.auth);

  if (auth.authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <DialogContent className={classes.container}>
        <SignInContent
          handleClose={handleClose}
          handleClickOpenSignUp={handleCloseAndOpen}
          signInUser={signInUser}
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
