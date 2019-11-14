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

const PrevievDataTable = ({ obj }) => {
  let {
    questions_from_gov,
    thematic_category,
    michal_info,
    question_explanations
  } = obj;

  let katList = [
    "a",
    "a1",
    "b",
    "b1",
    "c",
    "c1",
    "d",
    "d1",
    "a2",
    "am",
    "t",
    "pt"
  ]; //awaylable kategory list that I have questions in
  let langList = ["pl", "eng", "de"];
  // katList = ["b"];
  // langList = ["pl"];
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
        console.log(`kat_${kat}_${lang} = `, kat_x_lang);
        updateFirebaseQuestions(`kat_${kat}_${lang}`, kat_x_lang);
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

  const updateFirebaseQuestions = (name, kat_x_lang) => {
    // console.log("updateFirebaseQuestions = ", name, kat_x_lang);
    firebase
      .firestore()
      .collection("questions")
      .doc(`${name}`)
      .set({
        allQuestions: kat_x_lang
      })
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
