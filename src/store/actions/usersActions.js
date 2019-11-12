import { storage } from "../../functions/functions";
const firebase = require("firebase");

export const IS_USER_LOGGED_IN = "IS_USER_LOGGED_IN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = user => {
  return dispatch => {
    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("xxxxxxx pobrano dane z dokumentu = ", doc.data());
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
