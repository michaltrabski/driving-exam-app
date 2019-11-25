import { RAND_EXAM } from "./../actions/examActions";

const initialState = {
  exam: []
};

export const examReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case RAND_EXAM:
      console.log("1", state);
      state = {
        ...state,
        exam: actions.exam
      };
      console.log("2", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
