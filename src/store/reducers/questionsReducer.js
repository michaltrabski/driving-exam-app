export const questionsReducer = (state = initialState, actions) => {
  return state;
};

// const initialState = [
//   {
//     k: "a,b,c,d,t,am,a1,a2,b1,c1,d1",
//     id: "99",
//     t: "Czy w tej sytuacji masz obowiązek zatrzymać pojazd?",
//     a: "",
//     b: "",
//     c: "",
//     r: "t",
//     s: "3",
//     v: true,
//     m: "AK_D05_06_org.mp4",
//     th: "Pozostałe"
//   }
// ];

const initialState = [
  {
    k: "a,b,c,d,t,am,a1,a2,b1,c1,d1",
    id: "99",
    t: "Czy w tej sytuacji masz obowiązek zatrzymać pojazd?",
    a: "",
    b: "",
    c: "",
    r: "t",
    s: "3",
    v: true,
    m: "AK_D05_06_org.mp4",
    th: "Pozostałe"
  },
  {
    k: "b",
    id: "3723",
    t:
      "Który z wymienionych elementów stanowi obowiązkowe wyposażenie każdego samochodu osobowego?",
    a: "Trójkąt ostrzegawczy.",
    b: "Apteczka.",
    c: "Koło zapasowe.",
    r: "a",
    s: "3",
    v: false,
    m: "",
    th:
      "Wyposażenie pojazdu związane z bezpieczeństwem, korzystanie z pasów, zagłówków i fotelików"
  },
  {
    k: "b",
    id: "9092",
    t:
      "Która z widocznych na ilustracji lampek kontrolnych informuje o włączonych światłach pozycyjnych?",
    a: "A.",
    b: "B.",
    c: "C.",
    r: "c",
    s: "1",
    v: false,
    m: "6002.jpg",
    th: "Aspekty mechaniczne związane z zachowaniem bezpieczeństwa na drodze"
  }
];
