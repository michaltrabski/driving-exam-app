import React, { useState, useEffect } from "react";
import { Container, Row, Col, H1 } from "../elements/elements";
import axios from "axios";

const url = "https://poznaj-testy.pl/wp-json/wp/v2/posts?slug=";

const Course = props => {
  const [post, setPost] = useState({ title: "", content: "" });

  const slug = props.match.params.id;

  useEffect(() => {
    axios
      .get(url + slug)
      //   .then(res => console.log(res))
      .then(res => {
        return {
          title: res.data[0].title.rendered,
          content: res.data[0].content.rendered
        };
      })
      .then(res => setPost({ title: res.title, content: res.content }))
      .catch(err => {
        console.log("catch", err);
        setPost({ title: "", content: "" });
      });
  });

  return (
    <Container>
      <Row>
        <Col>
          <H1>{post.title}</H1>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Course;
