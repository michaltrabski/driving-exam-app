import firebase from "./../../config/firebase";
import {
  yes,
  poznajTestyHasAccess,
  kompendium_wiedzy,
  sytuacje_i_niespodzianki
} from "./../reducers/usersReducer";
export const IS_USER_LOGGED_IN = "IS_USER_LOGGED_IN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_USER_NOT_LOGGED = "SET_USER_NOT_LOGGED";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGN_UP_ERR = "SIGN_UP_ERR";
export const SIGN_IN_ERR = "SIGN_IN_ERR";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const UPDATA_USER_ACCESS = "UPDATA_USER_ACCESS";
export const UPDATA_USER_ACCESS_PRODUCT_NOT_FOUND =
  "UPDATA_USER_ACCESS_PRODUCT_NOT_FOUND";

export const updataUserAccess = (uid, code) => {
  return dispatch => {
    const accessCodeArr = [
      { code: "izplxwhdoa", product: poznajTestyHasAccess },
      { code: "pxtbadlduo", product: kompendium_wiedzy },
      { code: "gwkqwdqlax", product: sytuacje_i_niespodzianki }
    ];

    let found = accessCodeArr.find(item => item.code === code);

    if (!found) {
      dispatch({ type: UPDATA_USER_ACCESS_PRODUCT_NOT_FOUND });
    } else {
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            let userData = doc.data();
            // console.log("userData", userData);
            let updatedUserData = { ...userData, [found.product]: yes };
            // console.log("updatedUserData", updatedUserData);
            firebase
              .firestore()
              .collection("users")
              .doc(uid)
              .set(updatedUserData);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
      dispatch({ type: UPDATA_USER_ACCESS, product: found.product });
    }
  };
};

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
            uid: user.uid,
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

export const signUpSuccess = uid => {
  return {
    type: SIGN_UP_SUCCESS,
    uid
  };
};

export const setUserNotLogged = () => {
  return {
    type: SET_USER_NOT_LOGGED
  };
};
