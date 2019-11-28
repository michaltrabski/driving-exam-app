import React from "react";
import { useSelector } from "react-redux";
import ExamResult from "../components/exam/examResult";
import { GetQuestions } from "../functions/functionalComponents";
import { Container, Row, Col } from "../elements/elements";

const ExamReview = () => {
  let { exams } = useSelector(state => state.questionsReducer);
  let examsReversed = [...exams].reverse();
  let counter = exams.length + 1;
  return (
    <>
      <GetQuestions />
      {examsReversed.length === 0 && (
        <Container>
          <Row>
            <Col center>
              <h1>Wyniki twoich egzaminów:</h1>
              <p>Masz 0 wykonanych egzaminów!</p>
              <p>W menu górnym strony kliknij "Wykonaj egzamin".</p>
            </Col>
          </Row>
        </Container>
      )}

      {examsReversed.map(exam => {
        counter--;
        return (
          <ExamResult key={counter} exam={exam} examNr={counter} show={false} />
        );
      })}
    </>
  );
};

export default ExamReview;
