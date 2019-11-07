import { SAVE_ANSWER } from "./../actions/userActions";

export const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SAVE_ANSWER:
      console.log("1", state);
      state = {
        ...state,
        [`id_${actions.question_id}`]: {
          ...state[`id_${actions.question_id}`],
          userAsnwer: actions.user_answer
        }
      };
      console.log("2", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};

const initialState = {};
