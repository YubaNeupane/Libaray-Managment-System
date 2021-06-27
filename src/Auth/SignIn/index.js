import React from 'react';

import { Button } from './../../Landing Page/Component/ButtonElement';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { makeStyles } from '@material-ui/core/styles';

import SignInContent from './SignInContent';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../Redux/actions';
import { Redirect } from 'react-router-dom';

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

  const handleCloseAndOpen = () => {
    handleClose();
    handleClickOpenSignUp();
  };

  const dispatch = useDispatch();

  const signInUser = (email, password) => {
    if (email == '') {
      alert('Email is required!');
      return;
    }
    if (password == '') {
      alert('Password is required!');
      return;
    }
    const user = {
      email,
      password,
    };

    dispatch(signin(user));
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
