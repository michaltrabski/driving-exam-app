import React, { useState } from "react";
import { Container, Row, Col } from "../elements/elements";
import Media from "./Media";
import styled from "styled-components";
import Answer from "./Answer";
import Explanation from "./Explanation";
import QuestionActions from "./QuestionActions";
import { useSelector } from "react-redux";

const QuestionText = styled.h5`
  margin: 0;
  padding: 0;
  margin-top: 10px;
  @media (${({ theme }) => theme.tablet}) {
    margin-top: 0;
  }
`;
const QuestionInfo = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const QuestionTextRegExp = props => {
  return (
    <QuestionText
      dangerouslySetInnerHTML={{
        __html: props.t
      }}
    ></QuestionText>
  );
};

const Question = ({ question, question: { id, t, m, v, nr, p } }) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const kat = useSelector(state => state.questionsReducer.kat);
  const search = useSelector(state => state.questionsReducer.search);

  const regex = new RegExp(search, "gi");
  const replaceRegEx = text => {
    let found = text.match(regex)[0];
    return text.replace(regex, `<span class="bg-warning">${found}</span>`);
  };

  return (
    <Container>
      <Row>
        <QuestionInfo>
          <strong>{nr}</strong> kat. {kat.toUpperCase()}, pkt {p}
        </QuestionInfo>
      </Row>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl left flex column>
          {search === "" ? (
            <QuestionText>{t}</QuestionText>
          ) : (
            <QuestionTextRegExp t={replaceRegEx(t)} />
          )}
          <Answer {...question} />
          <QuestionActions
            setShowExplanation={setShowExplanation}
            showExplanation={showExplanation}
          />
        </Col>
      </Row>
      {showExplanation && <Explanation {...question} />}
    </Container>
  );
};

export default Question;
