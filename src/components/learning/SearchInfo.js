import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Row, Col } from "../../elements/elements";

const SearchInfo = ({ amount }) => {
  const max = useSelector(state => state.questionsReducer.allQuestions.length);
  const search = useSelector(state => state.questionsReducer.search);

  let question = "pytań";
  if (amount === 1) question = "pytanie";
  if (amount === 2) question = "pytania";
  if (amount === 3) question = "pytania";
  if (amount === 4) question = "pytania";

  return (
    search !== "" && (
      <Container>
        <Row>
          <Col>
            <Info className="bg-warning">
              Znaleziono <strong>{amount}</strong> {question} z {max}
            </Info>
          </Col>
        </Row>
      </Container>
    )
  );
};

const Info = styled.p`
  margin: 0px;
  @media (${({ theme }) => theme.tablet}) {
    font-size: 2.5rem;
  }
`;
export default SearchInfo;
