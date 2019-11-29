export const TOOGLE_SHOW_ANSWER_NOW = "TOOGLE_SHOW_ANSWER_NOW";
export const CHANGE_MODE = "CHANGE_MODE";
export const TOGGLE_COLLAPSE = "TOGGLE_COLLAPSE";
export const COLLAPSE_NAV = "COLLAPSE_NAV";

export const learn_mode = "learn_mode";
export const exam_mode = "exam_mode";
export const reviev_mode = "reviev_mode";

export const toogleShowAnswerNow = () => {
  return {
    type: TOOGLE_SHOW_ANSWER_NOW
  };
};

export const changeMode = mode => {
  return {
    type: CHANGE_MODE,
    mode
  };
};

export const toogleCollapse = () => {
  return {
    type: TOGGLE_COLLAPSE
  };
};

export const collapseNav = () => {
  return {
    type: COLLAPSE_NAV
  };
};
