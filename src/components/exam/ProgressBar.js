import React from "react";
import { Row, Col } from "../../elements/elements";
import { useSelector } from "react-redux";
import { exam_mode } from "../../store/actions/settingsActions";

const ProgressBar = ({ mobile }) => {
  const { mode } = useSelector(state => state.settingsReducer);

  if (mode !== exam_mode) return null;

  return mobile ? (
    <Row mb className="d-flex d-md-none">
      <Col>
        <div
          className="progress position-relative"
          style={{ height: "1.5rem" }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `20%` }}
            aria-valuenow="20%"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div className="position-absolute w-100 h-100 text-center">
            <span>14s</span>
          </div>
        </div>
      </Col>
    </Row>
  ) : (
    <Row mb className="mt-auto d-none d-md-flex">
      <Col>
        <div
          className="progress position-relative"
          style={{ height: "1.5rem" }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `20%` }}
            aria-valuenow="20%"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div className="position-absolute w-100 h-100 text-center">
            <span>14s</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProgressBar;
