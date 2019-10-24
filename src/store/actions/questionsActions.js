export const GET_QUESTIONS = "GET_QUESTIONS";
export const CHANGE_KATEGORY = "CHANGE_KATEGORY";

export const getQuestions = (kat, lang) => {
  return {
    type: GET_QUESTIONS,
    kat,
    lang
  };
};

export const changeKategory = kat => {
  return {
    type: CHANGE_KATEGORY,
    kat
  };
};
