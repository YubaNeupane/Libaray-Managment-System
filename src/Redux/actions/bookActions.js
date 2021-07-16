import firebase from 'firebase';
import { bookAddingConstant } from './constants';

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
