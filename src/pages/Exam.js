import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import QuestionExam from "../components/exam/QuestionExam";
import { GetQuestions } from "../functions/functionalComponents";
import { reviev_mode } from "./../store/actions/settingsActions";
import { randomExam } from "./../store/actions/examActions";
import ExamResult from "../components/exam/examResult";

const Exam = () => {
  const { allQuestions, exams } = useSelector(state => state.questionsReducer);
  const { ready, ended, exam, qIndex } = useSelector(
    state => state.examReducer
  );
  const { mode } = useSelector(state => state.settingsReducer);
  const dispatch = useDispatch();

  return (
    <>
      <GetQuestions />
      {ready || (
        <Container>
          <Row center>
            <Col>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => dispatch(randomExam(allQuestions))}
                disabled={allQuestions.length === 0 ? true : false}
              >
                Rozpocznij egzamin
              </button>
            </Col>
          </Row>
        </Container>
      )}

      {ready && mode === reviev_mode && (
        <ExamResult exam={exams[exams.length - 1]} />
      )}

      {ready &&
        !ended &&
        exam
          .slice(qIndex, qIndex + 1)
          .map(question => <QuestionExam question={question} />)}
    </>
  );
};

export default Exam;
