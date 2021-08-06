import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Layout from './Layout';
import ConfirmationAlert from './ConfirmationAlert';
import { returnBook } from '../../Redux/actions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BorrowBookModel({ handleClose, open, book }) {
  const [openConfirmationAlert, setConfirmationAlert] = React.useState(false);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  const handleClickOpenConfiramtionAlert = () => {
    setConfirmationAlert(true);
  };

  const handleCloseConfiramtionAlert = () => {
    setConfirmationAlert(false);
  };

  return (
    <div>
      {parseInt(book.quantity) > 0 ? (
        <ConfirmationAlert
          handleClose={handleCloseConfiramtionAlert}
          open={openConfirmationAlert}
          book={book}
          isReserve={false}
        />
      ) : (
        <ConfirmationAlert
          handleClose={handleCloseConfiramtionAlert}
          open={openConfirmationAlert}
          book={book}
          isReserve={true}
        />
      )}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{book.bookName}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Layout book={book} />
          </DialogContentText>
        </DialogContent>
        {currentUser.isLibrarian || currentUser.isAdmin ? (
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        ) : (
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            {parseInt(book.quantity) > 0 ? (
              <Button
                onClick={handleClose}
                color="secondary"
                variant="contained"
                onClick={handleClickOpenConfiramtionAlert}
              >
                Borrow Book
              </Button>
            ) : (
              <Button
                onClick={handleClickOpenConfiramtionAlert}
                color="primary"
                variant="contained"
              >
                Reserve Book
              </Button>
            )}
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
