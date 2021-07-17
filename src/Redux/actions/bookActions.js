import firebase from 'firebase';
import {
  bookAddingConstant,
  bookGettingConstant,
  editBookConstant,
} from './constants';

export const addBook = (bookData, callBack) => {
  return async (dispatch) => {
    const db = firebase.firestore();

    dispatch({
      type: bookAddingConstant.ADDING_BOOK_REQUEST,
    });

    const bookRef = db.collection('books').doc();
    console.log(bookRef);
    bookData = {
      ...bookData,
      id: bookRef.id,
      lastUpdated: firebase.firestore.Timestamp.now(),
    };
    console.log(bookData);
    bookRef
      .set(bookData)
      .then((data) => {
        callBack('Book added successfully!');

        dispatch({
          type: bookAddingConstant.ADDING_BOOK_SUCCESS,
          payload: { book: bookData },
        });
      })
      .catch((e) => {
        callBack(e.messages);
        dispatch({
          type: bookAddingConstant.ADDING_BOOK_FAILED,
          payload: { error: e },
        });
      });
  };
};

export const getBook = () => {
  return async (dispatch) => {
    const db = firebase.firestore();

    dispatch({
      type: bookGettingConstant.GETTING_BOOK_REQUEST,
    });
    db.collection('books')
      .get()
      .then((querySnapshot) => {
        let data = [];

        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        localStorage.setItem('books', JSON.stringify(data));
        dispatch({
          type: bookGettingConstant.GEETING_BOOK_SUCCESS,
        });
      })
      .catch((e) => {
        dispatch({
          type: bookGettingConstant.GETTING_BOOK_FAILED,
          payload: e,
        });
      });
  };
};

export const editBook = (editedData, bookID, callBack, toastCallBack) => {
  return async (dispatch) => {
    const db = firebase.firestore();

    // dispatch({
    //   type: editBookConstant.EDIT_BOOK_REQUEST,
    // });

    db.collection('books')
      .doc(bookID)
      .set({ ...editedData, lastUpdated: firebase.firestore.Timestamp.now() })
      .then(() => {
        console.log('Document successfully written!');
        getBook();

        dispatch({
          type: editBookConstant.EDIT_BOOK_SUCCESS,
        });
        // callBack();
        toastCallBack('Successfully edited book!');
        callBack();
        setTimeout(function () {
          window.location.reload(); // you can pass true to reload function to ignore the client cache and reload from the server
        }, 2000); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
        toastCallBack(error, true);

        dispatch({
          type: editBookConstant.EDIT_BOOK_FAILED,
          payload: error,
        });
      });
  };
};
