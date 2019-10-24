export const GET_QUESTIONS = "GET_QUESTIONS";

export const getQuestions = (kat, lang) => {
  return {
    type: GET_QUESTIONS,
    kat,
    lang
  };
};
