import React from "react";
import { useSelector } from "react-redux";
import ExamResult from "../components/exam/examResult";
import { GetQuestions } from "../functions/functionalComponents";

const ExamReview = () => {
  let { exams } = useSelector(state => state.questionsReducer);
  let examsReversed = [...exams].reverse();
  let counter = exams.length + 1;
  return (
    <>
      <GetQuestions />
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
