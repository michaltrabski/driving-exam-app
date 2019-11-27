import React, { useState, useEffect } from "react";
import { Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { exam_mode } from "../../store/actions/settingsActions";
import { examDisplayQuestionByIndex } from "../../store/actions/examActions";

const ProgressBar = ({ mobile }) => {
  let _20 = 20;
  let _15 = 15;
  let _50 = 50;
  let learn = "Czas na zapoznanie się z pytainem ";
  let answer = "Czas na udzielenie odpowiedzi ";

  const dispatch = useDispatch();
  const { mode } = useSelector(state => state.settingsReducer);
  const { exam, qIndex } = useSelector(state => state.examReducer);
  const [timer, setTimer] = useState({
    second: 0,
    duration: _20,
    abc: false,
    video: false,
    info: learn
  });
  let { second, duration, info } = timer;

  useEffect(() => {
    setTimer({
      second: 0,
      duration: exam[qIndex].a === "" ? _20 : _50,
      abc: exam[qIndex].a === "" ? false : true,
      video: exam[qIndex].m.indexOf(".mp4") > 0 ? true : false,
      info: exam[qIndex].a === "" ? learn : answer
    });
  }, [qIndex]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (second >= duration) {
        if (duration === _15) {
          dispatch(examDisplayQuestionByIndex(qIndex + 1));
        } else {
          setTimer({ ...timer, second: 0, duration: _15, info: answer });
        }
      } else {
        setTimer({ ...timer, second: second + 1 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  let calculatedWidth = (100 / duration) * second;

  if (mode !== exam_mode) return null;
  return (
    <>
      <Row
        mb
        className={mobile ? `d-flex d-md-none` : `mt-auto d-none d-md-flex`}
      >
        <Col>
          {/* {JSON.stringify(timer)} */}
          <div
            className="progress position-relative"
            style={{ height: "1.5rem" }}
          >
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${calculatedWidth}%`, transition: "none" }}
              aria-valuenow={calculatedWidth}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div className="position-absolute w-100 h-100 text-center d-flex justify-content-center align-items-center">
              <span>
                {info}
                {duration - second}s
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProgressBar;
