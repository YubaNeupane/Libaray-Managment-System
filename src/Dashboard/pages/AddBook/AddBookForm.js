import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MdAddCircle } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(18),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    marginTop: theme.spacing(15),
  },
}));

export default function AddBookForm() {
  const classes = useStyles();

  return (
    <Container className={classes.container} component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FaBookOpen />
        </Avatar>
        <Typography component="h3" variant="h3">
          Add Book
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Book"
            name="book"
            autoFocus
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Author"
            name="author"
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="ISBN"
            name="ISBN"
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            type="number"
            label="Quantity"
            name="quantity"
          />
          <TextField
            required
            label="Preface"
            margin="normal"
            name="preface"
            multiline
            fullWidth
            variant="filled"
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Image Url"
            name="url"
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className={classes.submit}
            startIcon={<MdAddCircle />}
          >
            ADD
          </Button>
        </form>
      </div>
    </Container>
  );
}
