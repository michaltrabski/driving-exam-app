import _ from "lodash";
import {
  GET_QUESTIONS,
  CHANGE_KATEGORY,
  SEARCH_QUESTIONS
} from "./../actions/questionsActions";
import { adminSettings } from "../../data/GlobalData";
import { SAVE_ANSWER } from "./../actions/userActions";

const initialState = {
  allQuestions: [],
  filteredQuestions: [],
  katList: ["a", "b", "c", "d"], //awaylable kategory that I have questions
  langList: ["pl", "eng", "de"], //awaylable kategory that I have questions
  kat: "b", //default category when you load page first time
  lang: "pl", //default language when you load page first time
  perPage: 2,
  cqi: 0, // current question index
  perPageOptions: [1, 2, 5, 10, 25]
};

export const questionsReducer = (state = initialState, actions) => {
  const { perPage, cqi } = state;
  switch (actions.type) {
    case GET_QUESTIONS:
      let slice = _.slice(actions.allQuestions, cqi);
      let filteredQuestions = _.take(slice, perPage);
      state = {
        ...state,
        allQuestions: actions.allQuestions,
        filteredQuestions
      };
      return state;
    //------------------------------------------------------------
    case SEARCH_QUESTIONS:
      let x = state.allQuestions.slice(0, 3);
      state = {
        ...state,
        filteredQuestions: x
      };
      console.log("SEARCH_QUESTIONS", state);
      return state;
    //------------------------------------------------------------
    case CHANGE_KATEGORY:
      state = {
        ...state,
        kat: actions.kat
      };
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
