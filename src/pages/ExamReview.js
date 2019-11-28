import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ExamResult from "../components/exam/examResult";
import { GetQuestions } from "../functions/functionalComponents";
import _ from "lodash";

const ExamReview = () => {
  let { exams } = useSelector(state => state.questionsReducer);
  _.reverse(exams);

  useEffect(() => {
    _.reverse(exams);
  }, [exams]);

  let counter = exams.length + 1;
  return (
    <>
      <GetQuestions />
      {exams.map(exam => {
        counter--;
        return <ExamResult exam={exam} examNr={counter} show={false} />;
      })}
    </>
  );
};

export default ExamReview;
