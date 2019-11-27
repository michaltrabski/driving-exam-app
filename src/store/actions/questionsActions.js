import { storage, mergeObj } from "./../../functions/functions";
import _ from "lodash";
import firebase from "./../../config/firebase";
import { yes } from "./../reducers/usersReducer";

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
export const ADD_EXAM = "ADD_EXAM";

export const getQuestions = (kat, lang) => {
  const name = `kat_${kat}_${lang}`;

  return (dispatch, getState) => {
    const { poznajTestyHasAccess } = getState().usersReducer.userData;

    if (storage(name) && poznajTestyHasAccess === yes) {
      const { allQuestions, katList, langList, filterOptions, exams } = storage(
        name
      );
      // return dispatch => {
      dispatch({
        type: GET_QUESTIONS,
        allQuestions,
        katList,
        langList,
        filterOptions,
        exams
      });
      // };
    } else {
      // retriev questions from firebase
      // return dispatch => {
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
              filterOptions: data.filterOptions,
              exams: []
            };

            poznajTestyHasAccess === yes && storage(name, obj_new);

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
      // };
    }
  };
};

export const changeFilterOption = filterOption => {
  return {
    type: CHANGE_FILTER_OPTION,
    filterOption
  };
};

export const saveAnswer = (question_id, userAns) => {
  return (dispatch, getState) => {
    const { poznajTestyHasAccess } = getState().usersReducer.userData;

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

export const addExam = exam => {
  return (dispatch, getState) => {
    const { poznajTestyHasAccess } = getState().usersReducer.userData;

    dispatch({ type: ADD_EXAM, exam, poznajTestyHasAccess });
  };
};
