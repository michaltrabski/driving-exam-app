import _ from "lodash";
import {
  GET_QUESTIONS,
  CHANGE_KATEGORY,
  SEARCH_QUESTIONS,
  NEXT_PAGE
} from "./../actions/questionsActions";
import { adminSettings } from "../../data/GlobalData";
import { SAVE_ANSWER } from "./../actions/userActions";

const initialState = {
  allQuestions: [],
  katList: ["a", "b", "c", "d"], //awaylable kategory that I have questions
  langList: ["pl", "eng", "de"], //awaylable kategory that I have questions
  kat: "b", //default category when you load page first time
  lang: "pl", //default language when you load page first time
  perPage: 5,
  cqi: 0, // current question index
  perPageOptions: [1, 2, 5, 10, 25],
  search: ""
};

export const questionsReducer = (state = initialState, actions) => {
  const { perPage, cqi } = state;
  switch (actions.type) {
    case GET_QUESTIONS:
      state = {
        ...state,
        allQuestions: actions.allQuestions
      };
      return state;
    //------------------------------------------------------------
    case NEXT_PAGE:
      console.log("NEXT_PAGE", state);
      state = {
        ...state,
        cqi: cqi + perPage
      };
      return state;
    //------------------------------------------------------------
    case SEARCH_QUESTIONS:
      state = {
        ...state,
        cqi: 0,
        search: actions.search
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
