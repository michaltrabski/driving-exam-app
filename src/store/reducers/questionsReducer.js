import {
  GET_QUESTIONS,
  CHANGE_KATEGORY,
  SEARCH_QUESTIONS,
  NEXT_PAGE,
  PREVIES_PAGE,
  GO_TO_QUESTION_NR,
  CHANGE_PER_PAGE
} from "./../actions/questionsActions";

const initialState = {
  allQuestions: [],
  katList: ["a", "b", "c", "d"], //awaylable kategory that I have questions
  langList: ["pl", "eng", "de"], //awaylable kategory that I have questions
  kat: "b", //default category when you load page first time
  lang: "pl", //default language when you load page first time
  perPage: 5,
  cqi: 0, // current question index
  perPageOptions: [1, 2, 5, 10, 25],
  search: ""
};

export const questionsReducer = (state = initialState, actions) => {
  const { perPage, cqi } = state;
  switch (actions.type) {
    case GET_QUESTIONS:
      state = {
        ...state,
        allQuestions: actions.allQuestions
      };
      return state;
    //------------------------------------------------------------
    case NEXT_PAGE:
      state = {
        ...state,
        cqi: cqi + perPage
      };
      return state;
    //------------------------------------------------------------
    case PREVIES_PAGE:
      let newcqi = cqi - perPage > 0 ? cqi - perPage : 0;
      state = {
        ...state,
        cqi: newcqi
      };
      return state;
    //------------------------------------------------------------
    case SEARCH_QUESTIONS:
      state = {
        ...state,
        cqi: 0,
        search: actions.search
      };
      return state;
    //------------------------------------------------------------
    case CHANGE_KATEGORY:
      state = {
        ...state,
        cqi: 0,
        kat: actions.kat,
        search: ""
      };
      return state;
    //------------------------------------------------------------
    case GO_TO_QUESTION_NR:
      state = {
        ...state,
        cqi: actions.nr - 1,
        search: ""
      };
      return state;
    //------------------------------------------------------------
    case CHANGE_PER_PAGE:
      state = {
        ...state,
        cqi: 0,
        search: "",
        perPage: actions.perPage
      };
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
