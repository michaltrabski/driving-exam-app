import { storage } from "./../../functions/functions";

export const GET_USER_DATA = "GET_USER_DATA";
export const SAVE_ANSWER = "SAVE_ANSWER";

export const getUserData = () => {
  let userData = storage("userData");
  if (userData) {
    // From storage
    return dispatch =>
      dispatch({
        type: GET_USER_DATA,
        userData
      });
  } else {
    // From firebase
    return dispatch =>
      dispatch({
        type: GET_USER_DATA,
        userData: {}
      });
  }
};

export const saveAnswer = (question_id, user_answer) => {
  return dispatch =>
    // do some staff here

    dispatch({
      type: SAVE_ANSWER,
      question_id,
      user_answer
    });
};
