import { kat_a_pl } from "./../../data/kat_a_pl";
import { kat_b_pl } from "./../../data/kat_b_pl";
import { kat_a_eng } from "./../../data/kat_a_eng";
import { kat_b_eng } from "./../../data/kat_b_eng";
import { GET_QUESTIONS } from "./../actions/questionsActions";

export const questionsReducer = (state = initialState, actions) => {
  console.log("questionsReducer");

  switch (actions.type) {
    case GET_QUESTIONS:
      let x = getRightList(actions.kat, actions.lang);
      state = {
        ...state,
        questionsAll: x
      };
      console.log("questionsReducer GET_QUESTIONS fired", state);
      return state;
    default:
      return state;
  }
};

const getRightList = (kat, lang) => {
  if (kat === "b" && lang === "pl") return kat_b_pl;
  if (kat === "b" && lang === "eng") return kat_b_eng;
};

const initialState = {
  questionsAll: [],
  kat: "b",
  lang: "eng"
};
