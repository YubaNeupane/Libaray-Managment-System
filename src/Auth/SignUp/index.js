import React from 'react';

import { Button } from './../../Landing Page/Component/ButtonElement';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import SignUpContent from './SignUpContent';
import { signup, getBook } from '../../Redux/actions';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#B4EEB4',
  },
}));

export default function SignUp({
  handleClickOpen,
  handleClose,
  open,
  handleClickOpenSignIn,
  handleCloseSignIn,
}) {
  const classes = useStyles();

  const handleCloseAndOpen = () => {
    handleClose();
    handleClickOpenSignIn();
  };

  const dispatch = useDispatch();

  const registerUser = (firstName, lastName, email, password) => {
    const user = {
      firstName,
      lastName,
      password,
      email,
    };

    dispatch(signup(user));
    dispatch(getBook());
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent className={classes.container}>
        <SignUpContent
          handleClickOpenSignUp={handleCloseAndOpen}
          registerUser={registerUser}
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
