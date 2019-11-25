import { TOOGLE_SHOW_ANSWER_NOW } from "./../actions/settingsActions";

const initialState = {
  showAnswerNow: false
};

export const settingsReducer = (state = initialState, actions) => {
  if (actions.type === TOOGLE_SHOW_ANSWER_NOW) {
    state = {
      ...state,
      showAnswerNow: !state.showAnswerNow
    };
  }
  return state;
};
