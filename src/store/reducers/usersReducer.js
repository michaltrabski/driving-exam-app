import {
  SET_CURRENT_USER,
  SIGNOUT_SUCCESS,
  SIGN_UP_ERR,
  SIGN_UP_SUCCESS,
  SET_USER_NOT_LOGGED
} from "./../actions/usersActions";

const initialState = {
  isLoggedIn: "checking", // yes,no,checking
  userData: {
    email: "",
    role: "user",
    poznajTestyHasAccess: "checking" // yes,no,checking
  },
  signUpMessage: "",
  signUpErr: "",
  signOutMessage: ""
};
export const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      state = {
        ...state,
        isLoggedIn: "yes",
        userData: { ...state.userData, ...actions.userData }
      };
      return state;
    //------------------------------------------------------------
    case SET_USER_NOT_LOGGED:
      state = {
        ...initialState,
        isLoggedIn: "no"
      };
      return state;
    //------------------------------------------------------------
    case SIGN_UP_SUCCESS:
      state = {
        ...state,
        isLoggedIn: "yes",
        signUpMessage: "poprawnie zalogowano"
      };
      return state;
    //------------------------------------------------------------
    case SIGN_UP_ERR:
      state = {
        ...initialState,
        signUpErr: actions.err
      };
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
