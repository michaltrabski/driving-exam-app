import React from "react";
import { Container, Row, Col } from "../../elements/elements";
import Media from "../Media";
import styled from "styled-components";
import Answer from "../Answer";
import Explanation from "../Explanation";
import { useSelector } from "react-redux";
import ButtonNext from "./ButtonNext";
import ProgressBar from "./ProgressBar";
import BaseSpec from "./BaseSpec";
import { reviev_mode } from "../../store/actions/settingsActions";
import ExamInfo from "./ExamInfo";

const QuestionExam = ({
  question,
  question: { id, t, m, v, nr, p, r, userAns }
}) => {
  const { mode } = useSelector(state => state.settingsReducer);

  return (
    <>
      <Container>
        <ExamInfo />
        <ProgressBar mobile />
        <Row>
          <Col pr>
            <Media m={m} v={v} />
          </Col>
          <Col pl flex column>
            <BaseSpec />
            <ProgressBar />
            <ButtonNext />
          </Col>
        </Row>

        <Row mt>
          <Col>
            {/* {JSON.stringify(question)} */}
            <Text>{t}</Text>
            <Answer {...question} />
          </Col>
        </Row>
        <ButtonNext mobile />
      </Container>

      {mode === reviev_mode && (
        <>
          <h1 className="text-center">Wyjaśnienie</h1>
          <Container>
            <Explanation {...question} />
          </Container>
        </>
      )}
    </>
  );
};

const Text = styled.h5`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  @media (${({ theme }) => theme.tablet}) {
    margin-top: 0;
  }
`;

export default QuestionExam;
