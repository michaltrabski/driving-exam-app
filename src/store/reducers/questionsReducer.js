import { storage } from "./../../functions/functions";
import {
  GET_QUESTIONS,
  CHANGE_KATEGORY,
  SEARCH_QUESTIONS,
  NEXT_PAGE,
  PREVIES_PAGE,
  GO_TO_QUESTION_NR,
  CHANGE_PER_PAGE,
  SAVE_ANSWER,
  CHANGE_FILTER_OPTION
} from "./../actions/questionsActions";

const initialState = {
  allQuestions: [],
  katList: ["a", "a1", "b", "b1", "c", "c1", "d", "d1", "a2", "am", "t", "pt"], //awaylable kategory list that I have questions in
  langList: ["pl", "eng", "de"], //awaylable language list that I have questions in
  kat: storage("kat") ? storage("kat") : "b", //default category when you load page first time
  lang: "pl", //default language when you load page first time
  perPage: storage("perPage") ? storage("perPage") : 1, //default how many questions are dispayd on page
  cqi: 0, // current question index
  perPageOptions: [1, 2, 5, 10, 25],
  search: "", // default search string - this is a string that user type into a search form
  filterOption: "SHOW_ALL",
  filterOptions: [
    { option: "FILTR 1: Pokaż wszystkie pytania", value: "SHOW_ALL" },
    {
      option: "FILTR 2: Pokaż pytania, na które odpowiedziałeś dobrze",
      value: "SHOW_GOOD"
    },
    {
      option: "FILTR 3: Pokaż pytania, na które odpowiedziałeś źle",
      value: "SHOW_BAD"
    },
    {
      option: "FILTR 4: Pokaż pytania bez odpowiedzi",
      value: "SHOW_WITHOUT"
    },
    { option: "Wyprzedzanie (13)", value: " Wyprzedzanie" },
    { option: "Pierwsza pomoc (42)", value: " Pierwsza pomoc" },
    { option: "Bezpieczeństwo (77)", value: " Bezpieczeństwo" },
    { option: "Znaki informacyjne", value: " Znaki informacyjne" },
    { option: "Znaki drogowe poziome", value: " Znaki drogowe poziome" },
    { option: "Ograniczenia prędkości", value: " Ograniczenia prędkości" },
    { option: "Pole widzenia kierowcy", value: " Pole widzenia kierowcy" },
    {
      option: "Zachowanie wobec pieszego (134)",
      value: " Zachowanie wobec pieszego"
    },
    {
      option: "Znaki drogowe ostrzegawcze (97)",
      value: " Znaki drogowe ostrzegawcze"
    },
    {
      option: "Odstępy i hamowanie pojazdu (17)",
      value: " Odstępy i hamowanie pojazdu"
    },
    {
      option: "Zachowanie wobec rowerzysty",
      value: " Zachowanie wobec rowerzysty"
    },
    {
      option: "Technika kierowania pojazdem",
      value: " Technika kierowania pojazdem"
    },
    {
      option: "Znaki drogowe nakazu i zakazu",
      value: " Znaki drogowe nakazu i zakazu"
    },
    {
      option: "Zachowywanie szczególnej ostrożności",
      value: " Zachowywanie szczególnej ostrożności"
    },
    {
      option: "Skrzyżowania z sygnalizacją świetlną",
      value: " Skrzyżowania z sygnalizacją świetlną"
    },
    {
      option: "Manewr wymijania, omijania i cofania",
      value: " Manewr wymijania, omijania i cofania"
    },
    {
      option: "Zmiana pasa ruchu, zmiana kierunku jazdy",
      value: " Zmiana pasa ruchu, zmiana kierunku jazdy"
    },
    {
      option: "Używanie świateł zewnętrznych i sygnałów pojazdu",
      value: " Używanie świateł zewnętrznych i sygnałów pojazdu"
    },
    {
      option: "Włączanie się do ruchu, skrzyżowania równorzędne",
      value: " Włączanie się do ruchu, skrzyżowania równorzędne"
    },
    {
      option: "Zachowanie na przejazdach kolejowych i tramwajowych",
      value: " Zachowanie na przejazdach kolejowych i tramwajowych"
    },
    {
      option: "Wpływ alkoholu i innych używek na prowadzenie pojazdu",
      value: " Wpływ alkoholu i innych używek na prowadzenie pojazdu"
    },
    {
      option: "Wpływ warunków atmosferycznych na prowadzenie pojazdu",
      value: " Wpływ warunków atmosferycznych na prowadzenie pojazdu"
    },
    {
      option: "Sygnały świetlne, sygnały dawane przez kierującego ruchem",
      value: " Sygnały świetlne, sygnały dawane przez kierującego ruchem"
    },
    {
      option: "Skrzyżowania ze znakami określającymi pierwszeństwo przejazdu",
      value: " Skrzyżowania ze znakami określającymi pierwszeństwo przejazdu"
    },
    {
      option:
        "Aspekty mechaniczne związane z zachowaniem bezpieczeństwa na drodze",
      value:
        " Aspekty mechaniczne związane z zachowaniem bezpieczeństwa na drodze"
    },
    {
      option:
        "Obowiązki właściciela/posiadacza pojazdu, ubezpieczenia, wymagane dokumenty",
      value:
        " Obowiązki właściciela/posiadacza pojazdu, ubezpieczenia, wymagane dokumenty"
    },
    {
      option:
        "Pozycja pojazdu na drodze, wjazd i zjazd ze skrzyżowania, zatrzymanie i postój",
      value:
        " Pozycja pojazdu na drodze, wjazd i zjazd ze skrzyżowania, zatrzymanie i postój"
    },
    {
      option:
        "Wyposażenie pojazdu związane z bezpieczeństwem, korzystanie z pasów, zagłówków i fotelików",
      value:
        " Wyposażenie pojazdu związane z bezpieczeństwem, korzystanie z pasów, zagłówków i fotelików"
    },
    {
      option:
        "Skrzyżowania lub przejścia dla pieszych z kierujących ruchem, miejsca przystanków komunikacji public...",
      value:
        " Skrzyżowania lub przejścia dla pieszych z kierujących ruchem, miejsca przystanków komunikacji public..."
    },
    { option: "Pozostałe", value: " Pozostałe" }
  ]
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
      state = {
        ...state,
        allQuestions: state.allQuestions.map(q => {
          q.userAns =
            q.id === actions.question_id ? actions.userAns : q.userAns;
          return q;
        })
      };
      storage(name, state.allQuestions);
      return state;
    //------------------------------------------------------------
    case CHANGE_FILTER_OPTION:
      state = {
        ...state,
        search: "",
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
        filterOption: "SHOW_ALL"
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
