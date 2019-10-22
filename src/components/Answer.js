import React from "react";
// import { Button } from "../elements/elements";
import { Button } from "react-bootstrap";

const Answer = props => {
  const yesNo = (
    <div>
      {["Tak", "Nie"].map(item => (
        <Button variant="light">{item}</Button>
      ))}
    </div>
  );

  const abc = (
    <div>
      {["a", "b", "c"].map(item => (
        <Button className="text-left" variant="light" block>
          {item}) {props[item]}
        </Button>
      ))}
    </div>
  );

  return props.a !== "" ? abc : yesNo;
};

export default Answer;
