import {
  RAND_EXAM,
  EXAM_END,
  EXAM_DISPLAY_QUESTION_BY_INDEX,
  EXAM_SAVE_ANSWER,
  EXAM_TIMER_CHANGE
} from "./../actions/examActions";

const initialState = {
  ready: false,
  ended: false,
  exam: [],
  qIndex: 0,
  result: 0,
  maxScore: 0,
  userScore: 0,
  time: 1500
};

export const examReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case RAND_EXAM:
      state = {
        ...state,
        ...initialState,
        ready: true,
        exam: actions.exam
      };
      return state;
    //------------------------------------------------------------
    case EXAM_DISPLAY_QUESTION_BY_INDEX:
      state = {
        ...state,
        qIndex: actions.qIndex
      };
      return state;
    //------------------------------------------------------------
    case EXAM_SAVE_ANSWER:
      state = {
        ...state,
        exam: state.exam.map(q => {
          q.userAns =
            q.id === actions.question_id ? actions.userAns : q.userAns;
          return q;
        })
      };
      return state;
    //------------------------------------------------------------
    case EXAM_END:
      state = {
        ...state,
        ended: true,
        maxScore: actions.maxScore,
        userScore: actions.userScore
      };
      return state;
    //------------------------------------------------------------
    case EXAM_TIMER_CHANGE:
      state = {
        ...state,
        time: actions.time
      };
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
