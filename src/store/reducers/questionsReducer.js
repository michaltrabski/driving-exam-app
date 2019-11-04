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
  ...adminSettings
};

export const questionsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_QUESTIONS:
      console.log("fired");
      state = {
        ...state,
        allQuestions: actions.allQuestions,
        filteredQuestions: actions.allQuestions
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
