import {
  SAVE_ANSWER,
  GET_USER_DATA,
  TOOGLE_LIKE
} from "./../actions/userActions";
import { storage } from "./../../functions/functions";

export const userReducer = (state = {}, actions) => {
  const id = `id_${actions.question_id}`;

  switch (actions.type) {
    case GET_USER_DATA:
      state = {
        ...state,
        ...actions.userData
      };
      return state;
    //------------------------------------------------------------
    case SAVE_ANSWER:
      state = {
        ...state,
        [id]: {
          ...state[id],
          userAnswer: actions.user_answer
        }
      };
      storage("userData", state);
      return state;
    //------------------------------------------------------------
    case TOOGLE_LIKE:
      state = {
        ...state,
        [id]: {
          ...state[id],
          like:
            typeof state[id] === "undefined" ||
            typeof state[id].like === "undefined"
              ? true
              : !state[id].like
        }
      };
      storage("userData", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
