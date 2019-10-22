import React, { Component } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "../elements/elements";

class Learning extends Component {
  render() {
    return (
      <>
        <h5>Nauka pytań</h5>
        {this.props.questions.map(question => (
          <Question key={question.id} question={question} />
        ))}
        <div>
          <Container>
            <Row>
              <Col>
                <Button>Następne</Button>
              </Col>
            </Row>
          </Container>
        </div>
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
