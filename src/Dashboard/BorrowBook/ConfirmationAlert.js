import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import { emphasize, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  borrowBook,
  getUsersData,
  lowerBookQuanity,
  getBook,
  getCurrentUserData,
  reserveBook,
} from '../../Redux/actions';

export default function ConfirmationAlert({
  handleClose,
  open,
  book,
  isReserve,
}) {
  const dispatch = useDispatch();

  const handleReserveBook = () => {
    const currentBookReserved = JSON.parse(localStorage.getItem('user'))
      .reservedBooks;
    const user = JSON.parse(localStorage.getItem('user')).uid;

    dispatch(
      reserveBook(book.id, currentBookReserved, user, reserveBookCallBack)
    );

    handleClose();
  };

  const reserveBookCallBack = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(getCurrentUserData(user.uid, user));
    handleClose();
  };

  const callBack = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    dispatch(lowerBookQuanity(book.id, book.quantity));
    dispatch(getBook());
    dispatch(getBook());
    dispatch(getCurrentUserData(user.uid, user));

    handleClose();
  };

  const handleBorrowingBook = () => {
    const currentBookBorrowed = JSON.parse(localStorage.getItem('user'))
      .borrowedBooks;

    const user = JSON.parse(localStorage.getItem('user')).uid;

    dispatch(
      borrowBook(
        book.id,
        currentBookBorrowed,
        user,
        callBack,
        JSON.parse(localStorage.getItem('returnDate')).returnDate
      )
    );
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {isReserve ? (
            <Typography>Do you want to reserve</Typography>
          ) : (
            <Typography>Do you want to borrow</Typography>
          )}
          <Typography variant="h8" component="h1">
            {' '}
            {book.bookName}?
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          No
        </Button>
        <Button
          onClick={isReserve ? handleReserveBook : handleBorrowingBook}
          color="primary"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
