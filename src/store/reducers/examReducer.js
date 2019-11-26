import {
  RAND_EXAM,
  EXAM_DISPLAY_QUESTION_BY_INDEX,
  EXAM_SAVE_ANSWER
} from "./../actions/examActions";

const initialState = {
  ready: false,
  exam: [],
  qIndex: 0
};

export const examReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case RAND_EXAM:
      console.log("1", state);
      state = {
        ...state,
        ready: true,
        exam: actions.exam
      };
      console.log("2", state);
      return state;
    //------------------------------------------------------------
    case EXAM_DISPLAY_QUESTION_BY_INDEX:
      console.log("1", state);
      state = {
        ...state,
        qIndex: actions.qIndex
      };
      console.log("2", state);
      return state;
    //------------------------------------------------------------
    case EXAM_SAVE_ANSWER:
      console.log("1", state);
      state = {
        ...state,
        exam: state.exam.map(q => {
          q.userAns =
            q.id === actions.question_id ? actions.userAns : q.userAns;
          return q;
        })
      };
      console.log("2", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
