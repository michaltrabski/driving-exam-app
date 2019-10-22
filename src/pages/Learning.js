import React, { Component } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";

import Settings from "../components/Settings";

class Learning extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <h5>Nauka pytań</h5>
        {this.props.questions.map(question => (
          <Question key={question.id} question={question} />
        ))}
        <Settings />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionsReducer
  };
};

export default connect(mapStateToProps)(Learning);
