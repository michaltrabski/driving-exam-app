import { GET_QUESTIONS, CHANGE_KATEGORY } from "./../actions/questionsActions";
import { adminSettings } from "../../data/GlobalData";

const initialState = {
  questionsAll: [],
  ...adminSettings
};

export const questionsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_QUESTIONS:
      state = {
        ...state,
        questionsAll: actions.allQuestions
      };
      return state;
    case CHANGE_KATEGORY:
      state = {
        ...state,
        kat: actions.kat
      };
      return state;
    default:
      return state;
  }
};
