import { SAVE_ANSWER } from "./../actions/userActions";

export const userReducer = (state = initialState, actions) => {
  if (actions.type === SAVE_ANSWER) {
    state = {
      ...state,
      [`id_${actions.question_id}`]: {
        ...state[`id_${actions.question_id}`],
        userAsnwer: actions.user_answer
      }
    };
  }
  console.log(state);
  return state;
};

const initialState = {};
