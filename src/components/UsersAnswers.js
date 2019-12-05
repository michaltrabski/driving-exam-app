import React, { useState, useEffect } from "react";
import { Row, Col } from "../elements/elements";
import firebase from "./../config/firebase";
import _ from "lodash";
import { storage } from "../functions/functions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { path } from "./../config/path";
import { goToQuestionNr } from "../store/actions/questionsActions";

const UsersAnswers = () => {
  const [ua, setUa] = useState([]);
  const [calculatedSum, setCalculatedSum] = useState(0);
  const { allQuestions } = useSelector(state => state.questionsReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log("UsersAnswers useEffect");
    if (storage("usersAnswers")) {
      let arrToSort = storage("usersAnswers");
      order(arrToSort);
      // setUa(storage("usersAnswers"));
    } else {
      firebase
        .firestore()
        .collection("usersAnswers")
        .doc("usersAnswers")
        .get()
        .then(doc => {
          console.log("UsersAnswers useEffect firebase asked");
          if (doc.exists) {
            const data = doc.data();
            let { usersAnswers } = data;
            storage("usersAnswers", usersAnswers);

            setUa(usersAnswers);
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  }, []);

  const order = (arrToSort, col = "sum", order = "desc") => {
    let s = 0;
    let newArr = arrToSort.map(item => {
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
      if (question) item.nr = question.nr;
      return item;
    });

    setUa(_.orderBy(newArr, [col], [order]));
    setCalculatedSum(s);
  };

  const handleClick = nr => {
    dispatch(goToQuestionNr(nr));
    history.push(path.learn);
  };

  return (
    allQuestions.length > 0 &&
    ua.length > 0 && (
      <>
        <Row>
          <Col>
            <button onClick={() => order(ua, "bad", "desc")}>sort</button>
          </Col>
        </Row>
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
                    <th>Suma odp ({calculatedSum})</th>
                  </tr>
                </thead>
                <tbody>
                  {ua.map((x, i) => (
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
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </>
    )
  );
};

export default UsersAnswers;
