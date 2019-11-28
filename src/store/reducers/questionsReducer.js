import { storage, SHOW_ALL } from "./../../functions/functions";
import {
  LOADING,
  GET_QUESTIONS,
  CHANGE_KATEGORY,
  SEARCH_QUESTIONS,
  NEXT_PAGE,
  PREVIES_PAGE,
  GO_TO_QUESTION_NR,
  CHANGE_PER_PAGE,
  SAVE_ANSWER,
  CHANGE_FILTER_OPTION,
  RESET_ALL_QUESTIONS,
  ADD_EXAM
} from "./../actions/questionsActions";
import { yes } from "./usersReducer";

const initialState = {
  loading: true, // questions are loading from firebase
  allQuestions: [], // from firebase
  exams: [],
  katList: [], // from firebase
  langList: [], // from firebase
  kat: storage("kat") ? storage("kat") : "b", //default category when you load page first time
  lang: "pl", //default language when you load page first time
  perPage: storage("perPage") ? storage("perPage") : 10, //default how many questions are dispayd on page
  cqi: 0, // current question index
  perPageOptions: [1, 2, 5, 10, 25],
  search: "", // default search string - this is a string that user type into a search form
  filterOption: SHOW_ALL,
  filterOptions: [] // from firebase
};

export const questionsReducer = (state = initialState, actions) => {
  const { perPage, cqi, kat, lang } = state;
  const name = `kat_${kat}_${lang}`;

  switch (actions.type) {
    case LOADING:
      state = {
        ...state,
        loading: true,
        allQuestions: []
      };
      return state;
    //------------------------------------------------------------
    case GET_QUESTIONS:
      state = {
        ...state,
        loading: false,
        allQuestions: actions.allQuestions,
        katList: actions.katList,
        langList: actions.langList,
        filterOptions: actions.filterOptions,
        exams: actions.exams
      };

      return state;
    //------------------------------------------------------------
    case SAVE_ANSWER:
      console.log("1", state, actions);
      state = {
        ...state,
        allQuestions: state.allQuestions.map(q => {
          q.userAns =
            q.id === actions.question_id ? actions.userAns : q.userAns;
          return q;
        })
      };
      console.log("2", state, actions);
      if (actions.poznajTestyHasAccess === yes)
        storage(name, {
          allQuestions: state.allQuestions,
          katList: state.katList,
          langList: state.langList,
          filterOptions: state.filterOptions,
          exams: state.exams
        });

      return state;
    //------------------------------------------------------------
    case CHANGE_FILTER_OPTION:
      state = {
        ...state,
        search: "",
        cqi: 0,
        filterOption: actions.filterOption
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
        search: actions.search,
        filterOption: SHOW_ALL
      };
      return state;
    //------------------------------------------------------------
    case CHANGE_KATEGORY:
      state = {
        ...state,
        allQuestions: [],
        cqi: 0,
        kat: actions.kat,
        search: "",
        filterOption: SHOW_ALL
      };
      storage("kat", state.kat);
      return state;
    //------------------------------------------------------------
    case GO_TO_QUESTION_NR:
      state = {
        ...state,
        cqi: actions.nr - 1,
        search: "",
        filterOption: SHOW_ALL
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
    case RESET_ALL_QUESTIONS:
      state = {
        ...initialState,
        kat: storage("kat") ? storage("kat") : "b",
        perPage: storage("perPage") ? storage("perPage") : 10
      };
      return state;
    //------------------------------------------------------------
    case ADD_EXAM:
      console.log("1", state, actions);
      state = {
        ...state,
        exams: [...state.exams, actions.exam]
      };
      console.log("2", state, actions);
      // console.log("3", state.exams);

      if (actions.poznajTestyHasAccess === yes)
        storage(name, {
          allQuestions: state.allQuestions,
          katList: state.katList,
          langList: state.langList,
          filterOptions: state.filterOptions,
          exams: state.exams
        });
      return state;
    //------------------------------------------------------------
    default:
      return state;
  }
};
