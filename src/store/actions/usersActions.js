import firebase from "./../../config/firebase";

export const IS_USER_LOGGED_IN = "IS_USER_LOGGED_IN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGN_UP_ERR = "SIGN_UP_ERR";
export const SIGN_IN_ERR = "SIGN_IN_ERR";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";

export const setCurrentUser = user => {
  return dispatch => {
    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          dispatch({
            type: SET_CURRENT_USER,
            userData: doc.data()
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
};

export const signOut = user => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};

export const signUpError = err => {
  return {
    type: SIGN_UP_ERR,
    err
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS
  };
};
