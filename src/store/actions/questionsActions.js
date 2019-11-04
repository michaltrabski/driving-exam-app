export const GET_QUESTIONS = "GET_QUESTIONS";
export const SEARCH_QUESTIONS = "SEARCH_QUESTIONS";
export const CHANGE_KATEGORY = "CHANGE_KATEGORY";
const firebase = require("firebase");
console.log("firebase", firebase);

export const getQuestions = (kat, lang) => {
  console.log("1", kat, lang);
  return dispatch => {
    console.log("2");

    firebase
      .firestore()
      .collection("questions")
      .doc(`kat_${kat}_${lang}`)
      .get()
      .then(doc => {
        console.log("3", doc);
        if (doc.exists) {
          const data = doc.data();
          let allQuestions = data.allQuestions.map((item, i) => {
            let newItem = item;
            newItem.nr = i + 1;
            newItem.m = newItem.m === "" ? "empty.jpg" : newItem.m;
            newItem.v = item.m.indexOf(".mp4") > 0 ? true : false;
            return newItem;
          });
          sessionStorage.setItem(
            `kat_${kat}_${lang}`,
            JSON.stringify(allQuestions)
          );
          console.log("allQuestions are back from firebase = ", allQuestions);
          dispatch({
            type: GET_QUESTIONS,
            allQuestions
          });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });

    // retriev questions from sessionStorage
    // dispatch({
    //   type: GET_QUESTIONS,
    //   allQuestions: JSON.parse(
    //     sessionStorage.getItem(`test___kat_${kat}_${lang}`)
    //   )
    // });
  };
};

export const changeKategory = kat => {
  return {
    type: CHANGE_KATEGORY,
    kat
  };
};

export const searchQuestions = search => {
  return {
    type: SEARCH_QUESTIONS,
    search
  };
};
