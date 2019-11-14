import React, { useState, useEffect } from "react";
import { Row, Col } from "../elements/elements";
import axios from "axios";
const url = "https://poznaj-testy.pl/wp-json/wp/v2/posts?slug=";

const Explanation = ({ id, t, e }) => {
  // console.log("Explanation", id, t);
  const [expl, setExpl] = useState("loading...");

  useEffect(() => {
    console.log(`${url}${urlToSlug(id, t)}`);
    axios
      .get(`${url}${urlToSlug(id, t)}`)
      .then(res => res.data[0].content.rendered)
      .then(res => setExpl(res));
  });
  return (
    <Row>
      <Col left>
        <h5>Wyjaśnienie</h5>
        <div>{e}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: expl
          }}
        ></div>
      </Col>
    </Row>
  );
};

const urlToSlug = (id, post_name) => {
  // console.log(post_name);
  post_name = post_name.replace(/  /g, " ").toLowerCase();

  post_name = post_name.replace(/\"/g, "");
  post_name = post_name.replace(/\'/g, "");

  post_name = post_name.replace(/\,/g, "");
  post_name = post_name.replace(/\./g, "");
  post_name = post_name.replace(/\!/g, "");
  post_name = post_name.replace(/\(/g, "");
  post_name = post_name.replace(/\)/g, "");

  post_name = post_name.replace(/ą/g, "a");
  post_name = post_name.replace(/ę/g, "e");
  post_name = post_name.replace(/ó/g, "o");
  post_name = post_name.replace(/ł/g, "l");
  post_name = post_name.replace(/ż/g, "z");
  post_name = post_name.replace(/ź/g, "z");
  post_name = post_name.replace(/ć/g, "c");
  post_name = post_name.replace(/ś/g, "s");
  post_name = post_name.replace(/ó/g, "o");

  post_name = post_name.replace(/ /g, "-");

  post_name = post_name.replace(/\?/g, "");
  // console.log(`${post_name}-${id}`);

  return `${post_name}-id-pytania-${id}`;
};
export default Explanation;
