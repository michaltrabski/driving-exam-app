import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons"; //"@fortawesome/free-regular-svg-icons" "@fortawesome/free-solid-svg-icons"
import { Row, Col } from "../../../elements/elements";
import { useDispatch } from "react-redux";
import { toogleLike } from "../../../store/actions/userActions";

const Actions = props => {
  const dispatch = useDispatch();

  return (
    <Row mtAuto>
      <Col right>
        {/* <Button variant="light" size="sm" className="mr-1">
          <FontAwesomeIcon icon={faThumbsDown} />
        </Button>
        <Button
          variant="light"
          size="sm"
          className="mr-1"
          onClick={() => dispatch(toogleLike(props.id))}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
        </Button> */}
        <Button
          variant="light"
          size="sm"
          className="mr-1"
          onClick={() => props.setShowExplanation(!props.showExplanation)}
        >
          {props.showExplanation ? "ukryj wyjaśnienie" : "Wyjaśnienie"}
        </Button>
      </Col>
    </Row>
  );
};

export default Actions;
