import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { useDispatch, useSelector } from 'react-redux';

import InfoIcon from '@material-ui/icons/Info';
import InfoLayout from './InfoLayout';
import {
  increaseBookQuanity,
  returnBook,
  getBook,
  borrowBook,
} from '../../../Redux/actions/bookActions';
import {
  getCurrentUserDataWithNoLoad,
  getUsersData,
  getCurrentUserData,
} from '../../../Redux/actions';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ user }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [reserveBooksSelect, setReserveBookSelect] = React.useState([]);
  const [borrowBooksSelect, setBorrowBooksSelect] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getNewBook = () => {
    const data = {
      reserveBooksSelect,
      borrowBooksSelect,
    };

    if (data.borrowBooksSelect.length !== 0) {
      let newBook;
      const b = [...user.borrowedBooks];

      let bookId = [];

      b.forEach((book) => {
        bookId.push(book.bookId);
      });

      data.borrowBooksSelect.forEach((selectedBook) => {
        const ind = bookId.indexOf(selectedBook);
        if (ind !== -1) {
          b.splice(ind, 1);
          bookId = [];
          b.forEach((book) => {
            bookId.push(book.bookId);
          });
        }
      });

      newBook = b;

      return newBook;
    }
    return null;
  };

  const getSelectedBooks = () => {
    const data = {
      borrowBooksSelect,
    };

    if (data.borrowBooksSelect.length !== 0) {
      let newBook = [];
      const b = [...user.borrowedBooks];

      let bookId = [];

      b.forEach((book) => {
        bookId.push(book.bookId);
      });

      data.borrowBooksSelect.forEach((selectedBook) => {
        const ind = bookId.indexOf(selectedBook);
        newBook.push(b[ind]);
      });

      return newBook;
    }
    return null;
  };

  const dispatch = useDispatch();

  const handleSave = () => {
    const selectedBooks = getSelectedBooks();
    if (selectedBooks != null) {
      dispatch(increaseBookQuanity(selectedBooks, updateBookCallBack));
    } else {
      handleReserveBooksSelected();
    }
  };

  const updateBookCallBack = () => {
    const newBook = getNewBook();
    dispatch(getBook());
    if (newBook != null) {
      dispatch(returnBook(newBook, user.uid, handleReserveBooksSelected));
    } else {
      handleReserveBooksSelected();
    }
  };

  const handleReserveBooksSelected = () => {
    const data = reserveBooksSelect;
    const returnDate = JSON.parse(localStorage.getItem('returnDate'))
      .returnDate;

    const currectBooks = JSON.parse(localStorage.getItem('users'))
      .borrowedBooks;

    const t = [];

    if (currectBooks !== undefined) {
      currectBooks.forEach((data) => t.push(data));
    }

    data.forEach((id, i) => {
      dispatch(borrowBook(id, t, user.uid, getUpdatedBooks, returnDate));
      if (i == data.length - 1) {
        updateEverythingCallBack();
      }
    });
  };

  const getUpdatedBooks = () => {
    dispatch(getBook());
  };

  const updateEverythingCallBack = () => {
    dispatch(getBook());
    dispatch(getUsersData());
    dispatch(getCurrentUserData(user.uid, user));
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        onClick={handleClickOpen}
      >
        <InfoIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {user.firstName + ' ' + user.lastName}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <InfoLayout
              user={user}
              setReserveBookSelect={setReserveBookSelect}
              setBorrowBooksSelect={setBorrowBooksSelect}
              reserveBooksSelect={reserveBooksSelect}
              borrowBooksSelect={borrowBooksSelect}
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
