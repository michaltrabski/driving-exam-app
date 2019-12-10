import React, { useState } from "react";
import { Row, Col, H2, P } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { updataUserAccess } from "./../store/actions/usersActions";

const AccessCode = () => {
  const { uid, userData, productNotFoundInfo } = useSelector(
    state => state.usersReducer
  );
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updataUserAccess(uid, code));
  };

  return (
    <Row mb>
      <Col>
        <H2>Wprowadź kod dostępu:</H2>
        <P>
          Jeżeli kupiłeś testy lub szkolenie wideo, to na adres email
          przesłaliśmy Tobie kod dostępu. Wprowadź go w poniższe pole.
        </P>

        <form onSubmit={handleSubmit} className="form-inline">
          <input
            className="form-control mb-1 ml-1"
            type="text"
            placeholder="tu wklej kod"
            onChange={e => setCode(e.target.value)}
            value={code}
          />
          <button
            className="btn btn-primary form-control mb-1 ml-1"
            style={{ width: "auto" }}
            variant="primary"
            type="submit"
          >
            Aktywuj dostęp
          </button>
        </form>
        {productNotFoundInfo !== "" && <P>{productNotFoundInfo}</P>}
      </Col>
    </Row>
  );
};

export default AccessCode;
