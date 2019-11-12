import { storage } from "../../functions/functions";
import { SET_CURRENT_USER } from "./../actions/usersActions";

const initialState = {
  isLoggedIn: false,
  user: {
    uid: "",
    name: "",
    email: "",
    emailVerified: ""
  }
};
export const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      console.log("1 usersReducer state = ", state);
      state = {
        ...state,
        isLoggedIn: true,
        user: {
          ...state.user,
          email: actions.user.email,
          emailVerified: actions.user.emailVerified
        }
      };
      console.log("2 usersReducer state = ", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
