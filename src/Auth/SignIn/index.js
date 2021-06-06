import React from 'react';

import { Button } from './../../Landing Page/Component/ButtonElement';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import SignInContent from './SignInContent';
import SignUp from '../SignUp/SignUpContent';

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
