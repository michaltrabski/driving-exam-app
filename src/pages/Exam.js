import React, { useState, useEffect } from "react";
import { Container, Row, Col, H1 } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import QuestionExam from "../components/exam/QuestionExam";
import { GetQuestions } from "../functions/functionalComponents";
import { reviev_mode } from "./../store/actions/settingsActions";
import { randomExam } from "./../store/actions/examActions";
import ExamResult from "../components/exam/examResult";
import axios from "axios";

const url = "https://poznaj-testy.pl/wp-json/wp/v2/posts?slug=";

const Exam = () => {
  const { allQuestions, exams } = useSelector(state => state.questionsReducer);
  const { ready, ended, exam, qIndex } = useSelector(
    state => state.examReducer
  );
  const { mode } = useSelector(state => state.settingsReducer);
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const slug = "zasady-przeprowadzania-egzaminu";

  useEffect(() => {
    setPost("");
    axios
      .get(url + slug)
      .then(res => {
        // console.log(res);
        return {
          title: res.data[0].title.rendered,
          content: res.data[0].content.rendered
        };
      })
      .then(res => setPost({ title: res.title, content: res.content }))
      .catch(err => {
        console.log("catch", err);
      });
  }, [slug]);

  return (
    <>
      <GetQuestions />
      {ready || (
        <>
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
          <Container>
            <Row>
              <Col>
                <H1>{post.title}</H1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content
                  }}
                ></div>
              </Col>
            </Row>
          </Container>
        </>
      )}

      {ready && mode === reviev_mode && exams.length > 0 && (
        <ExamResult
          exam={exams[exams.length - 1]}
          examNr={exams.length}
          show={true}
        />
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
