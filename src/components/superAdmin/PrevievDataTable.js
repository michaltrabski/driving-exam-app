import React from "react";
import { Table, Form, Button } from "react-bootstrap";
const firebase = require("firebase");

const numer_pytania = "Numer pytania";
const pytanie_pl = "Pytanie";
const poprawna_odp = "Poprawna odp";
const media = "Media";
const odpowiedz_a = "Odpowiedź A";
const odpowiedz_b = "Odpowiedź B";
const odpowiedz_c = "Odpowiedź C";
const liczba_punktow = "Liczba punktów";

const PrevievDataTable = ({ obj }) => {
  const dataToFirebase = () => {
    let { questions_from_gov } = obj;
    // console.log(questions_from_gov[0]);
    //create object for each category and language
    let katList = ["b"];
    let langList = ["pl"];
    langList.map(lang => {
      katList.map(kat => {
        let kat_x_lang = questions_from_gov.map(item => {
          const data = {};
          data.id = item[numer_pytania];
          data.t = item[pytanie_pl];
          data.a = item[odpowiedz_a];
          data.b = item[odpowiedz_b];
          data.c = item[odpowiedz_c];
          data.r = item[poprawna_odp].toLowerCase();
          data.m =
            item[media].indexOf(".wmv") > 0
              ? item[media].replace(".wmv", ".mp4")
              : item[media];
          data.p = item[liczba_punktow];

          return data;
        });
        console.log(`kat_${kat}_${lang} = `, kat_x_lang[0]);
        // console.log(`kat_${kat}_${lang} = `, kat_x_lang);
        updateFirebase(`kat_${kat}_${lang}`, kat_x_lang);
      });
    });
  };
  const updateFirebase = (name, kat_x_lang) => {
    firebase
      .firestore()
      .collection("questions")
      .doc(`test___${name}`)
      .set({
        allQuestions: kat_x_lang
      });
  };
  return (
    <div>
      <button onClick={dataToFirebase}>updateFirebase</button>
      <Table striped bordered hover>
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
                <td>{item["Liczba punktów"]}</td>
                <td>{item["Kategorie"]}</td>
                {/* <td>{item[""]}</td>
                  <td>{item[""]}</td>
                  <td>{item[""]}</td> */}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PrevievDataTable;
