import {
  SET_CURRENT_USER,
  SIGNOUT_SUCCESS,
  SIGN_UP_ERR,
  SIGN_UP_SUCCESS,
  SET_USER_NOT_LOGGED,
  UPDATA_USER_ACCESS,
  UPDATA_USER_ACCESS_PRODUCT_NOT_FOUND
} from "./../actions/usersActions";

export const yes = "yes";
export const no = "no";
export const checking = "checking";
export const role = { user: "user" };

export const poznajTestyHasAccess = "poznajTestyHasAccess";
export const kompendium_wiedzy = "kompendium_wiedzy";
export const sytuacje_i_niespodzianki = "sytuacje_i_niespodzianki";
export const pulapki_egzaminacyjne = "pulapki_egzaminacyjne";

const initialState = {
  uid: "",
  isLoggedIn: checking, // yes,no,checking
  userData: {
    email: "",
    role: role.user,
    [poznajTestyHasAccess]: checking,
    [kompendium_wiedzy]: checking,
    [sytuacje_i_niespodzianki]: checking,
    [pulapki_egzaminacyjne]: checking
  },
  createdOn: "",
  signUpMessage: "",
  signUpErr: "",
  signOutMessage: "",
  productNotFoundInfo: ""
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
      console.log("2", state);
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
      state = {
        ...state,
        userData: {
          ...state.userData,
          [actions.product]: yes
        },
        productNotFoundInfo: "Dostęp został nadany!"
      };
      return state;
    //------------------------------------------------------------
    case UPDATA_USER_ACCESS_PRODUCT_NOT_FOUND:
      state = {
        ...state,
        productNotFoundInfo:
          "Podany kod nie istnieje, lub został już wykorzystany."
      };
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
