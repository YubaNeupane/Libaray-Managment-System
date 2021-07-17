import firebase from 'firebase';
import { bookAddingConstant, bookGettingConstant } from './constants';

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
