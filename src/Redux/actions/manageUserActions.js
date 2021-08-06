import firebase from 'firebase';

import {
  manageUserConstant,
  setReturnDateConstant,
  getReturnDateConstant,
  editUserDataConstant,
} from './constants';

export const getUsersData = () => {
  return async (dispatch) => {
    const db = firebase.firestore();
    dispatch({
      type: manageUserConstant.GET_USERS_REQUEST,
    });

    db.collection('users')
      .get()
      .then((queryData) => {
        let data = [];

        queryData.forEach((doc) => {
          data.push(doc.data());
        });
        localStorage.setItem('users', JSON.stringify(data));

        dispatch({
          type: manageUserConstant.GET_USERS_SUCCESS,
        });
      })
      .catch((e) => {
        dispatch({
          type: manageUserConstant.GET_USERS_FAILED,
          payload: e,
        });
      });
  };
};

export const getUsersDataWithCallBack = (callBack) => {
  return async (dispatch) => {
    const db = firebase.firestore();
    dispatch({
      type: manageUserConstant.GET_USERS_REQUEST,
    });

    db.collection('users')
      .get()
      .then((queryData) => {
        let data = [];

        queryData.forEach((doc) => {
          data.push(doc.data());
        });
        localStorage.setItem('users', JSON.stringify(data));

        dispatch({
          type: manageUserConstant.GET_USERS_SUCCESS,
        });
        callBack();
      })
      .catch((e) => {
        dispatch({
          type: manageUserConstant.GET_USERS_FAILED,
          payload: e,
        });
      });
  };
};

export const getReturnDate = () => {
  return async (dispatch) => {
    const db = firebase.firestore();

    dispatch({
      type: getReturnDateConstant.GET_RETURN_DATE_REQUEST,
    });

    db.collection('returnDate')
      .doc('returnDate')
      .get()
      .then((doc) => {
        if (doc.exists) {
          localStorage.setItem('returnDate', JSON.stringify(doc.data()));

          dispatch({
            type: getReturnDateConstant.GET_RETURN_DATE_SUCCESS,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: getReturnDateConstant.GET_RETURN_DATE_FAILED,
        });
      });
  };
};

export const setReturnDate = (newDate, callBack) => {
  return async (dispatch) => {
    const db = firebase.firestore();

    dispatch({
      type: setReturnDateConstant.SET_RETURN_DATE_REQUEST,
    });

    db.collection('returnDate')
      .doc('returnDate')
      .set({
        returnDate: newDate,
      })
      .then(() => {
        dispatch({
          type: setReturnDateConstant.SET_RETURN_DATE_SUCCESS,
        });
        localStorage.setItem(
          'returnDate',
          JSON.stringify({ returnDate: newDate })
        );
        callBack();
      })
      .catch((error) => {
        dispatch({
          type: setReturnDateConstant.SET_RETURN_DATE_FAILED,
        });
      });
  };
};

export const editUser = (userID, newUserData, callBack) => {
  return async (dispatch) => {
    const db = firebase.firestore();
    dispatch({
      type: editUserDataConstant.EDIT_USER_REQUEST,
    });

    db.collection('users')
      .doc(userID)
      .update({
        firstName: newUserData.firstName,
        lastName: newUserData.lastName,
        email: newUserData.email,
        isLibrarian: newUserData.isLibrarian,
      })
      .then(() => {
        dispatch({
          type: editUserDataConstant.EDIT_USER_SUCCESS,
        });
        callBack();
      })
      .catch((error) => {
        dispatch({
          type: editUserDataConstant.EDIT_USER_FAILED,
        });
      });
  };
};

export const sendResetPasswordEmail = (email, callBack) => {
  return async (dispatch) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        callBack();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
};
