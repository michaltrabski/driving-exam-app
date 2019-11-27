import { changeMode, reviev_mode, exam_mode } from "./settingsActions";

export const RAND_EXAM = "RAND_EXAM";
export const EXAM_DISPLAY_QUESTION_BY_INDEX = "EXAM_DISPLAY_QUESTION_BY_INDEX";
export const EXAM_SAVE_ANSWER = "EXAM_SAVE_ANSWER";
export const EXAM_END = "EXAM_END";
export const EXAM_TIMER_CHANGE = "EXAM_TIMER_CHANGE";

export const randomExam = allQuestions => {
  return dispatch => {
    let exam = allQuestions.slice(0, 32);
    exam = exam.map(item => {
      return { ...item, userAns: "" };
    });

    dispatch(changeMode(exam_mode));

    dispatch({
      type: RAND_EXAM,
      exam
    });
  };
};

export const examDisplayQuestionByIndex = qIndex => {
  return {
    type: EXAM_DISPLAY_QUESTION_BY_INDEX,
    qIndex
  };
};

export const examSaveAnswer = (question_id, userAns) => {
  return {
    type: EXAM_SAVE_ANSWER,
    question_id,
    userAns
  };
};

export const examEnd = () => {
  return (dispatch, getState) => {
    let { exam, ended, maxScore, userScore } = getState().examReducer;

    if (!ended) {
      exam.forEach(question => {
        maxScore += parseInt(question.p);

        if (question.r === question.userAns && question.userAns !== "")
          userScore += parseInt(question.p);

        return;
      });
      dispatch(changeMode(reviev_mode));

      dispatch({
        type: EXAM_END,
        maxScore,
        userScore
      });
    }
  };
};

export const examTimerChange = time => {
  return {
    type: EXAM_TIMER_CHANGE,
    time
  };
};
