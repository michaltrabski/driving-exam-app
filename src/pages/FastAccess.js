import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { goToQuestionNr } from "../store/actions/questionsActions";
import { path } from "./../config/path";
import { GetQuestions } from "../functions/functionalComponents";
import GoToQuestionNumber from "./../components/learning/GoToQuestionNumber";

const FastAccess = props => {
  let { allQuestions, kat } = useSelector(state => state.questionsReducer);
  const dispatch = useDispatch();

  const handleClick = nr => {
    dispatch(goToQuestionNr(nr));
    props.history.push(path.learn);
  };

  return (
    <>
      <GetQuestions />
      <Container>
        <Row>
          <Col>
            <p>Szybki dostęp do twoich pytań (kat {kat.toUpperCase()})</p>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <GoToQuestionNumber />
          </Col>
        </Row> */}
        <Row>
          <Col>
            {allQuestions.map(item => (
              <button
                className={`btn btn-sm mr-1 mb-1 btn-${getBtnColor(item)}`}
                onClick={() => handleClick(item.nr)}
              >
                {item.nr}
              </button>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

const getBtnColor = item => {
  let color = "secondary";
  if (item.r === item.userAns) color = "success";
  if (item.r !== item.userAns && item.userAns !== "") color = "danger";
  return color;
};
export default FastAccess;
