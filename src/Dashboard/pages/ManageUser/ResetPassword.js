import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendResetPasswordEmail } from '../../../Redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ResetPassword({ email }) {
  const classes = useStyles();

  const notify = (m) =>
    toast.success(m, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const dispatch = useDispatch();

  const handleResetPassword = () => {
    dispatch(sendResetPasswordEmail(email, callBack));
  };

  const callBack = () => {
    const s = 'Reset password email send! Send to: ' + email;
    notify(s);
  };

  return (
    <div className={classes.root}>
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
      <IconButton aria-label="delete" onClick={handleResetPassword}>
        <RotateLeftIcon />
      </IconButton>
    </div>
  );
}
