export const SAVE_ANSWER = "SAVE_ANSWER";

export const saveAnswer = (question_id, user_answer) => {
  return {
    type: SAVE_ANSWER,
    question_id,
    user_answer
  };
};
