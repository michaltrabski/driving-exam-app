import { storage } from "../../functions/functions";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};
