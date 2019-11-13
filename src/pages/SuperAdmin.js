import React, { useState } from "react";
import PrevievDataTable from "../components/superAdmin/PrevievDataTable";
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
            <form onSubmit={handleSubmit}>
              <div controlId="exampleForm.ControlTextarea1">
                <label>Wklej object ze wszystkimi pytaniami</label>
                <textarea value={str} onChange={handleChange} rows="3" />
              </div>
              <button className="btn btn-primary" type="submit">
                Sprawdź dane (parse object wth data)
              </button>
            </form>
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
