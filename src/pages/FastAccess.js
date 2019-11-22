import React, { useEffect } from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import {
  goToQuestionNr,
  getQuestions
} from "../store/actions/questionsActions";
import { path } from "./../config/path";
import { checking } from "./../store/reducers/usersReducer";

const FastAccess = props => {
  let { allQuestions, kat, lang } = useSelector(
    state => state.questionsReducer
  );
  const {
    isLoggedIn,
    userData: { poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn !== checking && allQuestions.length === 0) {
      dispatch(getQuestions(kat, lang, poznajTestyHasAccess));
    }
  }, [kat, lang, isLoggedIn]);

  const handleClick = nr => {
    dispatch(goToQuestionNr(nr));
    props.history.push(path.learn);
  };
  return (
    <Container>
      <Row>
        <Col center>
          <p>Szybki dostęp do twoich pytań (kat {kat.toUpperCase()})</p>
          {allQuestions.map(item => (
            <button
              className={`btn btn-sm m-1 btn-${getBtnColor(item)}`}
              onClick={() => handleClick(item.nr)}
            >
              {item.nr}
            </button>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const getBtnColor = item => {
  let color = "secondary";
  if (item.r === item.userAns) color = "success";
  if (item.r !== item.userAns && item.userAns !== "") color = "danger";
  return color;
};
export default FastAccess;
