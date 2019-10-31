import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../elements/elements";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import Resize from "../Resize";

const LearningPagination = ({
  perPage,
  currentQuestionIndex,
  questionsAll,
  previousPage,
  nextPage,
  exactQuestnionNr
}) => {
  const [nr, setNr] = useState(currentQuestionIndex + 1);
  let width = window.innerWidth;

  useEffect(() => {
    console.log("fired");
    setNr(currentQuestionIndex + 1);
  }, [currentQuestionIndex]);

  const handleSubmit = e => {
    e.preventDefault();
    exactQuestnionNr(nr);
  };
  const handleChange = e => {
    setNr(e.target.value);
  };

  const goTo = (
    <Form inline onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Idź do pytania nr: </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control
          value={nr}
          type="number"
          className="d-inline w-auto mr-1"
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
          idź
        </Button>
      </Form.Group>
    </Form>
  );
  return (
    <Container>
      {width <= 800 && (
        <Row>
          <Col>{goTo}</Col>
        </Row>
      )}

      <Row>
        <Col flex between>
          <div>
            <Button className="mr-1 mb-1" onClick={() => exactQuestnionNr(1)}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Button>
            <Button className="px-4 mb-1" onClick={previousPage}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
          </div>
          {width > 800 && goTo}
          <div>
            <Button className="px-4 mb-1" onClick={nextPage}>
              <FontAwesomeIcon icon={faAngleRight} />
            </Button>
            <Button
              className="ml-1 mb-1"
              onClick={() =>
                exactQuestnionNr(
                  Math.floor(questionsAll.length / perPage) * perPage + 1
                )
              }
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LearningPagination;

// const LearningPagination = ({
//   perPage,
//   currentQuestionIndex,
//   questionsAll,
//   previousPage,
//   nextPage,
//   exactPage
// }) => {
//   const [page, setPage] = useState(
//     Math.floor(currentQuestionIndex / perPage) + 1
//   );

//   const handleSubmit = e => {
//     e.preventDefault();
//     exactPage(page);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col flex between>
//           <div>
//             <Button className="mr-1" onClick={previousPage}>
//               <FontAwesomeIcon icon={faAngleLeft} />
//             </Button>
//           </div>
//           <div>
//             <Form inline onSubmit={handleSubmit}>
//               <Form.Group>
//                 <Form.Control
//                   value={page}
//                   type="number"
//                   className="d-inline w-auto mr-1"
//                   onChange={e => setPage(e.target.value)}
//                 ></Form.Control>
//               </Form.Group>
//               <Form.Group>
//                 <Button variant="primary" type="submit">
//                   idź
//                 </Button>
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>
//                   {" "}
//                   (z {Math.floor(questionsAll.length / perPage) + 1} stron)
//                 </Form.Label>
//               </Form.Group>
//             </Form>
//           </div>

//           <div>
//             <Button className="ml-1" onClick={nextPage}>
//               <FontAwesomeIcon icon={faAngleRight} />
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LearningPagination;
