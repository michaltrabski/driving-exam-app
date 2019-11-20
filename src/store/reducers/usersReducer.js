import {
  SET_CURRENT_USER,
  SIGNOUT_SUCCESS,
  SIGN_UP_ERR,
  SIGN_UP_SUCCESS
} from "./../actions/usersActions";

const initialState = {
  isLoggedIn: false,
  userData: {
    email: "",
    role: "user",
    poznajTestyHasAccess: false
  },
  signUpMessage: "",
  signUpErr: "",
  signOutMessage: ""
};
export const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      console.log("1 SET_CURRENT_USER state = ", state);
      state = {
        ...state,
        isLoggedIn: true,
        userData: { ...state.userData, ...actions.userData }
      };
      console.log("2 SET_CURRENT_USER state = ", state);
      return state;
    //------------------------------------------------------------
    case SIGNOUT_SUCCESS:
      console.log("1 usersReducer state = ", state);
      state = {
        ...initialState,
        signOutMessage: "poprawnie wylogowano"
      };
      console.log("2 usersReducer state = ", state);
      return state;
    //------------------------------------------------------------
    case SIGN_UP_SUCCESS:
      console.log("1 usersReducer state = ", state);
      state = {
        ...state,
        signUpMessage: "poprawnie zalogowano"
      };
      console.log("2 usersReducer state = ", state);
      return state;
    //------------------------------------------------------------
    case SIGN_UP_ERR:
      console.log("1 usersReducer state = ", state);
      state = {
        ...state,
        signUpErr: actions.err
      };
      console.log("2 usersReducer state = ", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
