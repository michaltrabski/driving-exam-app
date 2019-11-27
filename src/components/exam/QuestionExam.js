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
import { reviev_mode, exam_mode } from "../../store/actions/settingsActions";
import ExamInfo from "./ExamInfo";

const QuestionExam = ({ question }) => {
  const { mode } = useSelector(state => state.settingsReducer);

  return (
    <>
      <Container>
        <ExamInfo />
        {mode === exam_mode && <ProgressBar mobile />}
        <Row>
          <Col pr>
            <Media m={question.m} v={question.v} />
          </Col>
          <Col pl flex column>
            {mode === exam_mode && <BaseSpec />}
            {mode === exam_mode && <ProgressBar />}
            <ButtonNext />
          </Col>
        </Row>

        <Row mt>
          <Col>
            {JSON.stringify(question)}
            <Text>{question.t}</Text>
            <Answer {...question} />
          </Col>
        </Row>
        <ButtonNext mobile />

        {mode === reviev_mode && (
          <>
            <h1 className="text-center">Wyjaśnienie</h1>
            <Explanation {...question} />
          </>
        )}
      </Container>
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
