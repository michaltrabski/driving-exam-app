import { TOOGLE_SHOW_ANSWER_NOW } from "./../actions/settingsActions";

export const settingsReducer = (state = initialState, actions) => {
  if (actions.type === TOOGLE_SHOW_ANSWER_NOW) {
    state = {
      ...state,
      showAnswerNow: !state.showAnswerNow
    };
  }
  return state;
};

const initialState = {
  showAnswerNow: false
};
