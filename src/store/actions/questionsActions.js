export const GET_QUESTIONS = "GET_QUESTIONS";
export const CHANGE_KATEGORY = "CHANGE_KATEGORY";

// export const getQuestions = (kat, lang) => {
//   return {
//     type: GET_QUESTIONS,
//     kat,
//     lang
//   };
// };

export const getQuestions = (kat, lang) => {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch({
        type: GET_QUESTIONS,
        kat,
        lang
      });
    }, 3000);
  };
};

export const changeKategory = kat => {
  return {
    type: CHANGE_KATEGORY,
    kat
  };
};

// function incrementAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       // Yay! Can invoke sync or async actions with `dispatch`
//       dispatch(increment());
//     }, 1000);
//   };
// }
