import React, { useState, useEffect } from "react";
import { Row, Col, Container, H1, P } from "../elements/elements";
import firebase from "../config/firebase";
import _ from "lodash";
import { storage } from "../functions/functions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { path } from "../config/path";
import { goToQuestionNr } from "../store/actions/questionsActions";
import { GetQuestions } from "../functions/functionalComponents";

const Difficult = () => {
  const [ready, setReady] = useState(false);
  const [usersAnswers, setUsersAnswers] = useState([]);
  const { allQuestions } = useSelector(state => state.questionsReducer);

  useEffect(() => {
    console.log("UsersAnswers useEffect");
    const x = "usersAnswers";
    if (storage(x)) {
      setUsersAnswers(storage(x));
    } else {
      firebase
        .firestore()
        .collection(x)
        .doc(x)
        .get()
        .then(doc => {
          console.log("UsersAnswers useEffect firebase asked");
          if (doc.exists) {
            const { usersAnswers } = doc.data();
            storage(x, usersAnswers);
            setUsersAnswers(usersAnswers);
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (usersAnswers.length > 0 && allQuestions.length > 0) {
      setReady(true);
    }
  }, [usersAnswers, allQuestions]);

  useEffect(() => {
    if (ready) {
      sortData();
      console.log("xxxxxxxxxxx", usersAnswers);
    }
  }, [ready]);

  const sortData = (col = "bad", order = "desc") => {
    let s = 0;
    let newArr = usersAnswers.map(item => {
      let id = parseInt(item.id);
      let good = parseInt(item.good);
      let bad = parseInt(item.bad);
      let sum = good + bad;
      s += sum;

      item.id = id;
      item.good = good;
      item.bad = bad;
      item.sum = sum;
      item.baddevidedbysum = sum === 0 ? 0 : Math.floor((bad / sum) * 100);

      let question = allQuestions.find(x => parseInt(x.id) === item.id);
      if (question) {
        item.question = question;
        item.nr = question.nr;
      }

      return item;
    });

    setUsersAnswers(_.orderBy(newArr, [col], [order]));
    // setCalculatedSum(s);
  };

  const handleClick = nr => {
    // dispatch(goToQuestionNr(nr));
    // history.push(path.learn);
  };

  return (
    <>
      <GetQuestions />
      <Container>
        <Row center>
          <Col>
            <H1>Lista trudnych pytań testowych!</H1>
            <P>to są stat</P>
          </Col>
        </Row>
        {ready && (
          <Row>
            <Col>
              <p>Wyniki:</p>
              <div className="table-responsive">
                <table className="table table-sm table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Nr pytania</th>
                      <th>Dobre odp</th>
                      <th>Złe odp</th>
                      <th>Złe odp / suma</th>
                      <th>Suma odp (sum)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersAnswers.map((x, i) => (
                      <>
                        <tr key={x.id}>
                          <td>
                            <span
                              className="text-primary"
                              onClick={() => handleClick(x.nr)}
                            >
                              {x.nr}
                            </span>
                          </td>
                          <td>{x.good}</td>
                          <td>{x.bad}</td>
                          <td>{x.baddevidedbysum}%</td>
                          <td>{x.sum}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Difficult;
