import { storage, mergeObj } from "./../../functions/functions";
import _ from "lodash";
import firebase from "./../../config/firebase";

export const LOADING = "LOADING";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SEARCH_QUESTIONS = "SEARCH_QUESTIONS";
export const CHANGE_KATEGORY = "CHANGE_KATEGORY";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIES_PAGE = "PREVIES_PAGE";
export const GO_TO_QUESTION_NR = "GO_TO_QUESTION_NR";
export const CHANGE_PER_PAGE = "CHANGE_PER_PAGE";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const CHANGE_FILTER_OPTION = "CHANGE_FILTER_OPTION";
export const RESET_ALL_QUESTIONS = "RESET_ALL_QUESTIONS";

export const getQuestions = (kat, lang, poznajTestyHasAccess) => {
  const name = `kat_${kat}_${lang}`;

  if (storage(name) && poznajTestyHasAccess === "yes") {
    const { allQuestions, katList, langList, filterOptions } = storage(name);
    return dispatch => {
      dispatch({
        type: GET_QUESTIONS,
        allQuestions,
        katList,
        langList,
        filterOptions
      });
    };
  } else {
    // retriev questions from firebase
    return dispatch => {
      dispatch({ type: LOADING });

      firebase
        .firestore()
        .collection("questions")
        .doc(name)
        .get()
        .then(doc => {
          if (doc.exists) {
            const data = doc.data();
            let allQuestions = data.allQuestions.map((item, i) => {
              let newItem = item;
              newItem.m = newItem.m === "" ? "empty.jpg" : newItem.m;
              newItem.v = item.m.indexOf(".mp4") > 0 ? true : false;
              newItem.userAns = "";
              return newItem;
            });
            // shuffle array once get from firebase
            allQuestions = _.shuffle(allQuestions).map((item, i) => {
              let newItem = item;
              newItem.nr = i + 1;
              return newItem;
            });

            let obj_new = {
              allQuestions,
              katList: data.katList,
              langList: data.langList,
              filterOptions: data.filterOptions
            };

            poznajTestyHasAccess === "yes" && storage(name, obj_new);

            dispatch({
              type: GET_QUESTIONS,
              ...obj_new
            });
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    };
  }
};

export const changeFilterOption = filterOption => {
  return {
    type: CHANGE_FILTER_OPTION,
    filterOption
  };
};

export const saveAnswer = (question_id, userAns) => {
  return (dispatch, getState) => {
    // console.log(getState());
    let {
      usersReducer: {
        userData: { poznajTestyHasAccess }
      }
    } = getState();

    dispatch({
      type: SAVE_ANSWER,
      question_id,
      userAns,
      poznajTestyHasAccess
    });
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

export const changePerPage = perPage => {
  return {
    type: CHANGE_PER_PAGE,
    perPage: parseInt(perPage)
  };
};

export const goToQuestionNr = nr => {
  return { type: GO_TO_QUESTION_NR, nr: parseInt(nr) };
};

export const nextPage = () => {
  return { type: NEXT_PAGE };
};

export const previesPage = () => {
  return { type: PREVIES_PAGE };
};

export const resetAllQuestions = () => {
  return { type: RESET_ALL_QUESTIONS };
};
