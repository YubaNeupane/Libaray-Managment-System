import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';
import {
  editBook,
  getBook,
  editUser,
  getUsersData,
  getCurrentUserData,
  getCurrentUserDataWithNoLoad,
  getUsersDataWithCallBack,
} from '../../../Redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ClearIcon from '@material-ui/icons/Clear';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function EditUserModel({ user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [userFirstName, setUserFirstName] = useState(user.firstName);
  const [userLastName, setUserLastName] = useState(user.lastName);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userIsLibrarian, setUserIsLibrarian] = useState(user.isLibrarian);

  const dispatch = useDispatch();

  const toastCallBack = (message, isError = false) => {
    if (isError) {
      toast.error(message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } else {
      toast.success(message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  const handleEdit = () => {
    const data = {
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      isLibrarian: userIsLibrarian,
    };
    dispatch(editUser(user.uid, data, callBack));
  };

  const callBack = () => {
    toastCallBack('Edited user successfully! ');
    const currentUser = JSON.parse(localStorage.getItem('user'));

    dispatch(getCurrentUserDataWithNoLoad(currentUser.uid, currentUser));
    dispatch(getUsersDataWithCallBack(reloadPage));
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const classes = useStyles();
  return (
    <div>
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
      <IconButton
        color="primary"
        aria-label="add an alarm"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent maxWidth="xs" fullWidth>
          <Container
            component="main"
            maxWidth="xs"
            className={classes.container}
          >
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Edit User
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firtsName"
                    label="First Name"
                    onChange={(e) => setUserFirstName(e.target.value)}
                    value={userFirstName}
                    name="firstName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="Last Name"
                    label="Last Name"
                    onChange={(e) => setUserLastName(e.target.value)}
                    value={userLastName}
                    type="Aurthor"
                    id="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="Email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                    label="Email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    value="Lirarian: "
                    control={
                      <Switch
                        checked={userIsLibrarian}
                        color="primary"
                        onChange={(e) => setUserIsLibrarian(e.target.checked)}
                      />
                    }
                    label="Lirarian: "
                    labelPlacement="start"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="secondary"
                    size="large"
                    className={classes.submit}
                    onClick={handleClose}
                    startIcon={<ClearIcon />}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleEdit}
                    color="primary"
                    size="large"
                    className={classes.submit}
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
