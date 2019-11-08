import React, { useState } from "react";
import { Container, Row, Col } from "../../elements/elements";
import Media from "../Media";
import styled from "styled-components";
import Answer from "../Answer";
import Explanation from "../Explanation";
import Actions from "./question/Actions";
import { useSelector } from "react-redux";

const Question = ({ question, question: { t, m, v, nr, p } }) => {
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
        <Info>
          <strong>{nr}</strong> kat. {kat.toUpperCase()}, pkt {p}
        </Info>
      </Row>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl left flex column>
          {search === "" ? (
            <Text>{t}</Text>
          ) : (
            <TextRegExp t={replaceRegEx(t)} />
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
  margin-top: 10px;
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
      dangerouslySetInnerHTML={{
        __html: props.t
      }}
    ></Text>
  );
};
export default Question;
