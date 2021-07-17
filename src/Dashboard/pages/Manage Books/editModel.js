import React, { useState } from 'react';
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
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';

import ClearIcon from '@material-ui/icons/Clear';

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
export default function EditModel({ book }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [bookName, setBookName] = useState(book.bookName);
  const [aurthor, setAurthor] = useState(book.aurthor);
  const [isbn, setIsbn] = useState(book.isbn);
  const [quantity, setQuantity] = useState(book.quantity);
  const [preface, setPreface] = useState(book.preface);
  const [imageUrl, setImageUrl] = useState(book.imageUrl);

  const classes = useStyles();
  return (
    <div>
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
                Edit Book
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="bookName"
                    label="Book Name"
                    onChange={(e) => setBookName(e.target.value)}
                    value={bookName}
                    name="bookName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="Aurthor"
                    label="Aurthor"
                    onChange={(e) => setAurthor(e.target.value)}
                    value={aurthor}
                    type="Aurthor"
                    id="Aurthor"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="isbn"
                    variant="outlined"
                    required
                    fullWidth
                    id="isbn"
                    onChange={(e) => setIsbn(e.target.value)}
                    value={isbn}
                    label="ISBN #"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="quantity"
                    label="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    name="quantity"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Preface"
                    name="preface"
                    value={preface}
                    onChange={(e) => setPreface(e.target.value)}
                    multiline
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Image Url"
                    onChange={(e) => imageUrl(e.target.value)}
                    name="url"
                    fullWidth
                    value={imageUrl}
                    variant="outlined"
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
