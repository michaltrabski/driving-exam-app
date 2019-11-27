import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ExamResult from "../components/exam/examResult";
import { GetQuestions } from "../functions/functionalComponents";

const ExamReview = () => {
  const { exams } = useSelector(state => state.questionsReducer);

  useEffect(() => {
    console.log("exams", exams);
  });

  return (
    <>
      <GetQuestions />
      {exams.map((exam, examNr) => (
        <ExamResult exam={exam} examNr={examNr + 1} show={false} />
      ))}
    </>
  );
};

export default ExamReview;
