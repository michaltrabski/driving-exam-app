import React from "react";

import { useSelector } from "react-redux";
import ExamResult from "../components/exam/examResult";

const ExamReview = () => {
  const { exams } = useSelector(state => state.questionsReducer);

  return exams.map(exam => <ExamResult exam={exam} showNow={false} />);
};

export default ExamReview;
