export const RAND_EXAM = "RAND_EXAM";

export const randomExam = allQuestions => {
  return dispatch => {
    let exam = allQuestions.slice(0, 32);
    exam = exam.map(item => {
      return { ...item, userAns: "" };
    });

    dispatch({
      type: RAND_EXAM,
      exam
    });
  };
};
