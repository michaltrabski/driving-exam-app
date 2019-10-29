export const GET_QUESTIONS = "GET_QUESTIONS";
export const CHANGE_KATEGORY = "CHANGE_KATEGORY";
const firebase = require("firebase");

export const getQuestions = (kat, lang) => {
  return dispatch => {
    firebase
      .firestore()
      .collection("questions")
      .doc(`kat_${kat}_${lang}`)
      .get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          // console.log(data.allQuestions);
          dispatch({
            type: GET_QUESTIONS,
            allQuestions: data.allQuestions
          });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
};

export const changeKategory = kat => {
  return {
    type: CHANGE_KATEGORY,
    kat
  };
};
