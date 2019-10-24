import { kat_a_pl } from "./../../data/kat_a_pl";
import { kat_b_pl } from "./../../data/kat_b_pl";
import { kat_a_eng } from "./../../data/kat_a_eng";
import { kat_b_eng } from "./../../data/kat_b_eng";
import { GET_QUESTIONS, CHANGE_KATEGORY } from "./../actions/questionsActions";
import { adminSettings } from "../../data/GlobalData";

const initialState = {
  questionsAll: [],
  ...adminSettings
};

export const questionsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_QUESTIONS:
      state = {
        ...state,
        // questionsAll: getRightList(actions.kat, actions.lang).slice(0, 5)
        questionsAll: getRightList(actions.kat, actions.lang)
      };
      return state;
    case CHANGE_KATEGORY:
      state = {
        ...state,
        kat: actions.kat
      };
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
