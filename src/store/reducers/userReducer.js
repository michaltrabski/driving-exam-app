import { SAVE_ANSWER, GET_USER_DATA } from "./../actions/userActions";
import { storage } from "./../../functions/functions";

export const userReducer = (state = {}, actions) => {
  switch (actions.type) {
    case GET_USER_DATA:
      console.log("1", state);
      state = {
        ...state,
        ...actions.userData
      };
      console.log("2", state);
      return state;
    //------------------------------------------------------------
    case SAVE_ANSWER:
      console.log("1", state);

      state = {
        ...state,
        [`id_${actions.question_id}`]: {
          ...state[`id_${actions.question_id}`],
          userAsnwer: actions.user_answer
        }
      };
      storage("userData", state);
      console.log("2", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
