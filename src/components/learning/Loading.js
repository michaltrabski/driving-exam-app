import React from "react";
import { Container, Row, Col } from "../../elements/elements";
import { useSelector } from "react-redux";

const Loading = () => {
  const { loading } = useSelector(state => state.questionsReducer);

  return (
    loading && (
      <Container transparent>
        <Row>
          <Col>
            <h1 className="text-secondary">Pobieram pytania</h1>
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default Loading;
