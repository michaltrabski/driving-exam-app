import {
  SET_CURRENT_USER,
  SIGNOUT_SUCCESS,
  SIGN_UP_ERR,
  SIGN_UP_SUCCESS,
  SET_USER_NOT_LOGGED,
  UPDATA_USER_ACCESS
} from "./../actions/usersActions";

export const yes = "yes";
export const no = "no";
export const checking = "checking";

export const role = { user: "user" };

const initialState = {
  uid: "",
  isLoggedIn: checking, // yes,no,checking
  userData: {
    email: "",
    role: role.user,
    poznajTestyHasAccess: checking, // yes,no,checking
    kompendium_wiedzy: checking, // yes,no,checking
    sytuacje_i_niespodzianki: checking // yes,no,checking
  },
  createdOn: "",
  signUpMessage: "",
  signUpErr: "",
  signOutMessage: ""
};
export const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      state = {
        ...state,
        uid: actions.uid,
        isLoggedIn: yes,
        userData: { ...state.userData, ...actions.userData }
      };
      return state;
    //------------------------------------------------------------
    case SET_USER_NOT_LOGGED:
      state = {
        ...initialState,
        isLoggedIn: no,
        userData: { ...state.userData, poznajTestyHasAccess: no }
      };
      return state;
    //------------------------------------------------------------
    case SIGN_UP_SUCCESS:
      state = {
        ...state,
        uid: actions.uid,
        isLoggedIn: yes,
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
    case UPDATA_USER_ACCESS:
      console.log("1", state, actions);
      state = {
        ...state,
        userData: {
          ...state.userData,
          [actions.product]: yes
        }
      };
      console.log("2", state);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
