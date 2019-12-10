import firebase from "./../../config/firebase";
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
      { code: "zxc", product: "poznajTestyHasAccess" },
      { code: "qweqwe", product: "kompendium_wiedzy" },
      { code: "asdasd", product: "sytuacje_i_niespodzianki" }
    ];

    let found = accessCodeArr.find(item => item.code === code);
    if (!found) {
      console.log("updataUserAccess", uid, code, "not_found");
      // dispatch({ type: UPDATA_USER_ACCESS_PRODUCT_NOT_FOUND });
    } else {
      console.log("updataUserAccess", uid, code, found.product);
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
