import React from 'react';

import { Button } from './../../Landing Page/Component/ButtonElement';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import SignUpContent from './SignUpContent';

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

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent className={classes.container}>
        <SignUpContent handleClickOpenSignUp={handleCloseAndOpen} />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
