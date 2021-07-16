import firebase from 'firebase';
import { authConstant } from './constants';

export const signup = (user) => {
  return async (dispatch) => {
    const db = firebase.firestore();

    dispatch({
      type: `${authConstant.USER_LOGIN}_REQUEST`,
    });

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        console.log(data);
        const currentUser = firebase.auth().currentUser;
        const name = `${user.firstName} ${user.lastName}`;
        currentUser
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            //if you are here means it is updated display name sussfully
            db.collection('users')
              .doc(data.user.uid)
              .set({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                uid: data.user.uid,
                createdAt: new Date(),
                isAdmin: false,
                isLibrarian: false,
                isUser: true,
                borrowedBooks: [],
              })
              .then(() => {
                //succeful

                db.collection('users')
                  .doc(data.user.uid)
                  .get()
                  .then((doc) => {
                    if (doc.exists) {
                      const loggedInUser = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        uid: data.user.uid,
                        createdAt: doc.data().createdAt,
                        isAdmin: doc.data().isAdmin,
                        isLibrarian: doc.data().isLibrarian,
                        isUser: doc.data().isUser,
                        borrowedBooks: doc.data().borrowedBooks,
                      };

                      localStorage.setItem(
                        'user',
                        JSON.stringify(loggedInUser)
                      );
                      console.log('User logged in successfully...!');
                      dispatch({
                        type: `${authConstant.USER_LOGIN}_SUCCESS`,
                        payload: { user: loggedInUser },
                      });
                      console.log(doc);
                      window.location.reload();
                    } else {
                      // doc.data() will be undefined in this case
                      console.log('No such document!');
                      //  console.log(doc.data());
                    }
                  });
              })
              .catch((error) => {
                console.log(error);
                dispatch({
                  type: `${authConstant.USER_LOGIN}_FAILURE`,
                  payload: { error },
                });
              });
          });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: `${authConstant.USER_LOGIN}_FAILURE`,
          payload: { error },
        });
      });
  };
};

export const signin = (user) => {
  return async (dispatch) => {
    dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST` });
    const db = firebase.firestore();

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        console.log(data.user);
        const name = data.user.displayName.split(' ');
        const firstName = name[0];
        const lastName = name[1];

        db.collection('users')
          .doc(data.user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const loggedInUser = {
                firstName: firstName,
                lastName: lastName,
                email: user.email,
                uid: data.user.uid,
                createdAt: doc.data().createdAt,
                isAdmin: doc.data().isAdmin,
                isLibrarian: doc.data().isLibrarian,
                isUser: doc.data().isUser,
                borrowedBooks: doc.data().borrowedBooks,
              };

              localStorage.setItem('user', JSON.stringify(loggedInUser));

              dispatch({
                type: `${authConstant.USER_LOGIN}_SUCCESS`,
                payload: { user: loggedInUser },
              });
              window.location.reload();
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
              //  console.log(doc.data());
            }
          });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: `${authConstant.USER_LOGIN}_FAILURE`,
          payload: { error },
        });
      });
  };
};

export const isLoggedInUser = () => {
  return async (dispatch) => {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null;

    if (user) {
      dispatch({
        type: `${authConstant.USER_LOGIN}_SUCCESS`,
        payload: { user: user },
      });
      window.location.reload();
    } else {
      dispatch({
        type: `${authConstant.USER_LOGIN}_FAILURE`,
        payload: { error: 'Login again please' },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: `${authConstant.USER_LOGOUT}_REQUEST` });

    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.clear();
        dispatch({ type: `${authConstant.USER_LOGOUT}_SUCCESS` });
        window.location.href = '/';
      })
      .error((error) => {
        console.log(error);
        dispatch({
          type: `${authConstant.USER_LOGOUT}_FAILURE`,
          payload: { error },
        });
      });
  };
};
