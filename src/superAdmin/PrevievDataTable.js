import React from "react";
const firebase = require("firebase");

const numer_pytania = "Numer pytania";
const pytanie_pl = "Pytanie";
const odpowiedz_a = "Odpowiedź A";
const odpowiedz_b = "Odpowiedź B";
const odpowiedz_c = "Odpowiedź C";
const poprawna_odp = "Poprawna odp";
const media = "Media";
const liczba_punktow = "Liczba punktów";
const kategorie = "Kategorie";

const pytanie_eng = "Pytanie ENG";
const odpowiedz_eng_a = "Odpowiedź ENG A";
const odpowiedz_eng_b = "Odpowiedź ENG B";
const odpowiedz_eng_c = "Odpowiedź ENG C";

const pytanie_de = "Pytanie DE";
const odpowiedz_de_a = "Odpowiedź DE A";
const odpowiedz_de_b = "Odpowiedź DE B";
const odpowiedz_de_c = "Odpowiedź DE C";

let katList = []; // calculate for each questions database
let langList = []; // calculate for each questions database
let filterOptions = []; // calculate for each category list

const PrevievDataTable = ({ obj }) => {
  let {
    questions_from_gov,
    thematic_category,
    michal_info,
    question_explanations
  } = obj;

  katList = ["a", "a1", "b", "b1", "c", "c1", "d", "d1", "a2", "am", "t", "pt"]; //awaylable kategory list that I have questions in
  langList = ["pl", "eng", "de"]; //awaylable language list that I have questions in
  // katList = ["b", "am"];
  // langList = ["pl", "de"];
  filterOptions = [
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
  ];
  const dataToFirebase = () => {
    langList.map(lang => {
      katList.map(kat => {
        let kat_x_lang = questions_from_gov
          .filter(x => {
            //remove questions that does not match current kategory
            let arr = x[kategorie].toLowerCase().split(",");
            return arr.indexOf(kat) !== -1;
          })
          .map(item => {
            const data = {};
            data.id = item[numer_pytania];
            data.t = item[pytanie_pl];
            data.a = item[odpowiedz_a];
            data.b = item[odpowiedz_b];
            data.c = item[odpowiedz_c];

            if (lang === "eng") {
              data.t = item[pytanie_eng];
              data.a = item[odpowiedz_eng_a];
              data.b = item[odpowiedz_eng_b];
              data.c = item[odpowiedz_eng_c];
            }

            if (lang === "de") {
              data.t = item[pytanie_de];
              data.a = item[odpowiedz_de_a];
              data.b = item[odpowiedz_de_b];
              data.c = item[odpowiedz_de_c];
            }

            data.r = item[poprawna_odp].toLowerCase();
            data.m =
              item[media].indexOf(".wmv") > 0
                ? item[media].replace(".wmv", ".mp4")
                : item[media];
            data.p = item[liczba_punktow];
            data.th = getThemat(item[numer_pytania]);
            data.e = getExplanation(item[numer_pytania]);
            return data;
          });

        let save_in_firebase = {
          allQuestions: kat_x_lang,
          katList,
          langList,
          filterOptions
        };
        console.log(`kat_${kat}_${lang} = `, save_in_firebase);
        updateFirebaseQuestions(`kat_${kat}_${lang}`, save_in_firebase);
      });
    });
  };

  const getThemat = id => {
    let themat = thematic_category.find(item => item.mt_id === id);
    themat = themat === undefined ? "Pozostałe" : themat.mt_themat;
    return themat;
  };

  const getExplanation = id => {
    let default_expl = "Potrzebujesz wyjaśnienia? Napisz do mnie!";
    let expl = question_explanations.find(item => item.mt_id === id);
    expl = expl === undefined ? default_expl : expl.mt_explanation;
    expl = expl === "" ? default_expl : expl;
    return expl;
  };

  const updateFirebaseQuestions = (name, save_in_firebase) => {
    firebase
      .firestore()
      .collection("questions")
      .doc(`${name}`)
      .set(save_in_firebase)
      .then(() => {
        console.log(`saved in firebase = ${name}`);
      })
      .catch(err => {
        console.log(`NOT saved in firebase = ${name}`, err);
      });
  };

  return (
    <div>
      <button onClick={dataToFirebase}>updateFirebaseQuestions</button>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>t</th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>r</th>
            <th>m</th>
            <th>p</th>
            <th>k</th>
            <th>t</th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>t</th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
          </tr>
        </thead>
        <tbody>
          {obj !== "empty" &&
            obj.questions_from_gov.map(item => (
              <tr key={item[numer_pytania]}>
                <td>{item[numer_pytania]}</td>
                <td>{item[pytanie_pl]}</td>
                <td>{item[odpowiedz_a]}</td>
                <td>{item[odpowiedz_b]}</td>
                <td>{item[odpowiedz_c]}</td>
                <td>{item[poprawna_odp]}</td>
                <td>{item[media]}</td>
                <td>{item[liczba_punktow]}</td>
                <td>{item[kategorie]}</td>

                <td>{item[pytanie_eng]}</td>
                <td>{item[odpowiedz_eng_a]}</td>
                <td>{item[odpowiedz_eng_b]}</td>
                <td>{item[odpowiedz_eng_c]}</td>

                <td>{item[pytanie_de]}</td>
                <td>{item[odpowiedz_de_a]}</td>
                <td>{item[odpowiedz_de_b]}</td>
                <td>{item[odpowiedz_de_c]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrevievDataTable;
