import React from "react";

import { useSelector } from "react-redux";
import ExamResult from "../components/exam/examResult";

const ExamReview = () => {
  const { exams } = useSelector(state => state.questionsReducer);

  return exams.map((exam, examNr) => (
    <ExamResult exam={exam} examNr={examNr + 1} show={false} />
  ));
};

export default ExamReview;
