import { kat_a_pl } from "./../../data/kat_a_pl";
import { kat_b_pl } from "./../../data/kat_b_pl";
import { kat_a_eng } from "./../../data/kat_a_eng";
import { kat_b_eng } from "./../../data/kat_b_eng";
import { GET_QUESTIONS, CHANGE_KATEGORY } from "./../actions/questionsActions";

const initialState = {
  questionsAll: [],
  katList: ["a", "b", "d", "d1"],
  kat: "a",
  lang: "pl"
};

export const questionsReducer = (state = initialState, actions) => {
  console.log("questionsReducer");

  switch (actions.type) {
    case GET_QUESTIONS:
      state = {
        ...state,
        questionsAll: getRightList(actions.kat, actions.lang)
      };
      console.log("questionsReducer GET_QUESTIONS fired", state);
      return state;
    case CHANGE_KATEGORY:
      state = {
        ...state,
        kat: actions.kat
      };
      console.log("questionsReducer GET_QUESTIONS fired", state);
      return state;
    default:
      return state;
  }
};

const getRightList = (kat, lang) => {
  let x = kat_b_pl;
  if (kat === "a") {
    if (lang === "pl") x = kat_a_pl;
    if (lang === "eng") x = x = kat_a_eng;
  }
  if (kat === "b") {
    if (lang === "pl") x = kat_b_pl;
    if (lang === "eng") x = x = kat_b_eng;
  }
  return x;
};
