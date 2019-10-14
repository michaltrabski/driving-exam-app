import React, { Component } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";

class Learning extends Component {
  render() {
    console.log(
      "Learning render this.props.questions = ",
      this.props.questions
    );

    const { questions } = this.props;
    return (
      <>
        <h5>Nauka pytań</h5>
        {questions.map(question => (
          <Question key={question.id} question={question} />
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state
  };
};
export default connect(mapStateToProps)(Learning);
