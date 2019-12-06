import React, { useState, useEffect } from "react";
import { Row, Col, Container, H1, P } from "../elements/elements";
import firebase from "../config/firebase";
import _ from "lodash";
import { storage } from "../functions/functions";
import { useSelector } from "react-redux";
import { GetQuestions } from "../functions/functionalComponents";
import Question from "../components/learning/Question";
import { Link } from "react-router-dom";
import { path } from "./../config/path";
import { yes } from "./../store/reducers/usersReducer";

const Difficult = () => {
  const [ready, setReady] = useState(false);
  const [readyToSort, setReadyToSort] = useState(false);
  const [usersAnswers, setUsersAnswers] = useState([]);
  const [calculatedSum, setCalculatedSum] = useState([]);
  const { allQuestions } = useSelector(state => state.questionsReducer);
  const [perPage, setPerPage] = useState(100);
  const {
    userData: { poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);
  let limit = 10; // for free accounst

  if (poznajTestyHasAccess === yes) limit = 1000000;

  useEffect(() => {
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
    if (usersAnswers.length > 0 && allQuestions.length > 0)
      setReadyToSort(true);
  }, [usersAnswers, allQuestions]);

  useEffect(() => {
    if (readyToSort) sortData();
  }, [readyToSort]);

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
      item.show = false;

      let question = allQuestions.find(x => parseInt(x.id) === item.id);
      if (question) {
        item.question = question;
        item.nr = question.nr;
      }

      return item;
    });

    setUsersAnswers(_.orderBy(newArr, [col], [order]));
    setReady(true);
    setCalculatedSum(s);
  };

  const toogleShow = i => {
    setUsersAnswers([
      ...usersAnswers,
      (usersAnswers[i].show = !usersAnswers[i].show)
    ]);
  };

  return (
    <>
      <GetQuestions />
      <Container>
        <Row mb center>
          <Col>
            <H1>Lista trudnych pytań testowych!</H1>
            <P>
              Lista została przygotowana na podstawie{" "}
              <strong>{calculatedSum}</strong> odpowiedzi udzielonych przez
              kursantów.
            </P>
          </Col>
        </Row>
        <Row mb>
          <Col>
            <div className="table-responsive">
              <table className="table table-sm table-hover table-striped">
                <thead>
                  <tr>
                    <th>Nr pytania</th>
                    <th>Dobre odp</th>
                    <th>Złe odp</th>
                    <th>Złe odp/suma</th>
                    <th>Suma odp</th>
                  </tr>
                </thead>
                <tbody>
                  {ready ? (
                    usersAnswers.slice(0, perPage).map((x, i) => (
                      <React.Fragment key={x.id + " " + i}>
                        <tr>
                          <td>
                            {i < limit ? (
                              <button
                                className="btn btn-sm btn-secondary"
                                // onClick={() => toogleShow(x.id)}
                                onClick={() => toogleShow(i)}
                              >
                                {x.show ? "Ukryj pytanie" : "Pokaż pytanie"}{" "}
                                {x.nr}
                              </button>
                            ) : (
                              <Link to={path.pricing}>Kup dostęp</Link>
                            )}
                          </td>
                          <td>{x.good}</td>
                          <td>{x.bad}</td>
                          <td>{x.baddevidedbysum}%</td>
                          <td>{x.sum}</td>
                        </tr>
                        {x.show && <Tr question={x.question} />}
                      </React.Fragment>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        <P>Pobieram dane</P>
                        <div
                          className="spinner-border text-secondary"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row center>
          <Col>
            <button
              className="btn btn-primary"
              onClick={() => setPerPage(perPage + 100)}
            >
              Pokaż więcej
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Tr = props => {
  return (
    <tr>
      <td colSpan="5">
        <Question question={props.question} />
      </td>
    </tr>
  );
};
export default Difficult;
