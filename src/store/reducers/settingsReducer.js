import {
  TOOGLE_SHOW_ANSWER_NOW,
  CHANGE_MODE,
  TOGGLE_COLLAPSE,
  COLLAPSE_NAV,
  not_paid_mode
} from "./../actions/settingsActions";

const initialState = {
  showAnswerNow: false,
  mode: not_paid_mode,
  collapse: true // inside nav top menu
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
    case TOGGLE_COLLAPSE:
      state = {
        ...state,
        collapse: !state.collapse
      };
      return state;
    //------------------------------------------------------------
    case COLLAPSE_NAV:
      state = {
        ...state,
        collapse: true
      };
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
