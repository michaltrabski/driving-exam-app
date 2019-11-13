import { storage } from "./../../functions/functions";
import {
  GET_QUESTIONS,
  CHANGE_KATEGORY,
  SEARCH_QUESTIONS,
  NEXT_PAGE,
  PREVIES_PAGE,
  GO_TO_QUESTION_NR,
  CHANGE_PER_PAGE,
  SAVE_ANSWER
} from "./../actions/questionsActions";

const initialState = {
  allQuestions: [],
  katList: ["a", "b", "c", "d"], //awaylable kategory list that I have questions in
  langList: ["pl", "eng", "de"], //awaylable language list that I have questions in
  kat: storage("kat") ? storage("kat") : "b", //default category when you load page first time
  lang: "pl", //default language when you load page first time
  perPage: storage("perPage") ? storage("perPage") : 1, //default how many questions are dispayd on page
  cqi: 0, // current question index
  perPageOptions: [1, 2, 5, 10, 25],
  search: "", // default search string - this is a string that user type into a search form
  whatFilter: "nofilter"
};

export const questionsReducer = (state = initialState, actions) => {
  const { perPage, cqi, kat, lang } = state;
  const name = `kat_${kat}_${lang}`;
  switch (actions.type) {
    case GET_QUESTIONS:
      state = {
        ...state,
        allQuestions: actions.allQuestions
      };
      return state;
    //------------------------------------------------------------
    case SAVE_ANSWER:
      console.log("1", state);
      state = {
        ...state,
        allQuestions: state.allQuestions.map(q => {
          q.userAns =
            q.id === actions.question_id ? actions.userAns : q.userAns;
          return q;
        })
      };
      storage(name, state.allQuestions);

      console.log("2", state);
      console.log("3", state.allQuestions[0]);
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
      state = {
        ...state,
        cqi: cqi - perPage > 0 ? cqi - perPage : 0
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
      storage("kat", state.kat);
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
      storage("perPage", state.perPage);
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
