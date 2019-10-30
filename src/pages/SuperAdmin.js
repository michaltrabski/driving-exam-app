import React, { useState } from "react";
import PrevievDataTable from "../components/superAdmin/PrevievDataTable";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "../elements/elements";

const SuperAdmin = () => {
  const [str, setStr] = useState("");
  const [obj, setObj] = useState("empty");

  const handleChange = e => {
    setStr(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let newObj = "";
    try {
      newObj = JSON.parse(str);
      if (typeof newObj === "object") {
        setObj(newObj);
      }
    } catch {
      console.log("you have pasted not an object to parse");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col pr>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Wklej object ze wszystkimi pytaniami</Form.Label>
                <Form.Control
                  value={str}
                  onChange={handleChange}
                  as="textarea"
                  rows="3"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sprawdź dane (parse object wth data)
              </Button>
            </Form>
          </Col>
          <Col left pl>
            <p>
              {obj.questions_from_gov &&
                `obj.questions_from_gov.length = ${obj.questions_from_gov.length}`}
            </p>
            <p>
              {obj.thematic_category &&
                `obj.thematic_category.length = ${obj.thematic_category.length}`}
            </p>
            <p>
              {obj.michal_info &&
                `obj.michal_info.length = ${obj.michal_info.length}`}
            </p>
          </Col>
        </Row>
      </Container>
      {obj.questions_from_gov && (
        <PrevievDataTable obj={obj}></PrevievDataTable>
      )}
    </>
  );
};

export default SuperAdmin;
