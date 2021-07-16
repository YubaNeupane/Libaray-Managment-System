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

export default function AddBookForm(props) {
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
            value={props.bookName}
            onChange={(e) => props.setBookName(e.target.value)}
            autoFocus
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Author"
            value={props.aurthor}
            onChange={(e) => props.setAurthor(e.target.value)}
            name="author"
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="ISBN"
            value={props.isbn}
            onChange={(e) => props.setIsbn(e.target.value)}
            name="ISBN"
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            type="number"
            label="Quantity"
            value={props.quantity}
            onChange={(e) => props.setQuantity(e.target.value)}
            name="quantity"
          />
          <TextField
            required
            label="Preface"
            margin="normal"
            name="preface"
            multiline
            value={props.preface}
            onChange={(e) => props.setPreface(e.target.value)}
            fullWidth
            variant="filled"
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Image Url"
            value={props.imageUrl}
            onChange={(e) => props.setImageUrl(e.target.value)}
            name="url"
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className={classes.submit}
            startIcon={<MdAddCircle />}
            onClick={props.handleAdding}
          >
            ADD
          </Button>
        </form>
      </div>
    </Container>
  );
}
