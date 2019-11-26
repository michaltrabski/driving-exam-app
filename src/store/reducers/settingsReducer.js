import {
  TOOGLE_SHOW_ANSWER_NOW,
  CHANGE_MODE
} from "./../actions/settingsActions";

const initialState = {
  showAnswerNow: false,
  mode: "kutt"
};

export const settingsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TOOGLE_SHOW_ANSWER_NOW:
      state = {
        ...state,
        showAnswerNow: !state.showAnswerNow
      };
      return state;
    //------------------------------------------------------------
    case CHANGE_MODE:
      state = {
        ...state,
        mode: actions.mode
      };
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
