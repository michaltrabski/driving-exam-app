import React, { useState } from "react";
import { Container, Row, Col } from "../../elements/elements";
import Media from "../Media";
import styled from "styled-components";
import Answer from "../Answer";
import Explanation from "../Explanation";
import Actions from "./Actions";
import { useSelector } from "react-redux";
import {
  replaceRegEx,
  questionAnswerTextColor
} from "../../functions/functions";

const Question = ({
  question,
  question: { id, t, m, v, nr, p, r, userAns, e }
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const kat = useSelector(state => state.questionsReducer.kat);
  const search = useSelector(state => state.questionsReducer.search);

  return (
    <Container>
      <Row>
        <Info>
          <strong>{nr}</strong> kat. {kat.toUpperCase()}, pkt {p}
        </Info>
      </Row>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl left flex column>
          {/* {id} */}
          {search === "" ? (
            <Text className={questionAnswerTextColor(r, userAns)}>{t}</Text>
          ) : (
            <TextRegExp t={replaceRegEx(t, search)} r={r} userAns={userAns} />
          )}
          <Answer {...question} />
          <Actions
            id={question.id}
            setShowExplanation={setShowExplanation}
            showExplanation={showExplanation}
          />
        </Col>
      </Row>
      {showExplanation && <Explanation {...question} />}
    </Container>
  );
};

const Text = styled.h5`
  margin: 0;
  padding: 0;
  margin-top: 5px;
  @media (${({ theme }) => theme.tablet}) {
    margin-top: 0;
  }
`;

const Info = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const TextRegExp = props => {
  return (
    <Text
      className={questionAnswerTextColor(props.r, props.userAns)}
      dangerouslySetInnerHTML={{
        __html: props.t
      }}
    ></Text>
  );
};
export default Question;
