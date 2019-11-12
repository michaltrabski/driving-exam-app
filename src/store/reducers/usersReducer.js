import { storage } from "../../functions/functions";
import { SET_CURRENT_USER } from "./../actions/usersActions";

const initialState = {
  isLoggedIn: false,
  userData: {
    email: "",
    role: "user",
    poznajTestyHasAccess: false
  }
};
export const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      console.log("1 usersReducer state = ", state);
      console.log("1 userData = ", actions.userData);
      state = {
        ...state,
        isLoggedIn: true,
        userData: { ...state.userData, ...actions.userData }
      };
      console.log("2 usersReducer state = ", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
