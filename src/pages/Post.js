import React, { useState, useEffect } from "react";
import { Container, Row, Col, H1 } from "../elements/elements";
import axios from "axios";
import { useSelector } from "react-redux";

const url = "https://poznaj-testy.pl/wp-json/wp/v2/posts?slug=";
const empty = { title: "", content: "" };

const Post = props => {
  console.log("Post");
  const [post, setPost] = useState(empty);
  const { userData } = useSelector(state => state.usersReducer);
  const slug = props.match.params.id;

  useEffect(() => {
    setPost(empty);
    axios
      .get(url + slug)
      .then(res => {
        // console.log(res);
        return {
          title: res.data[0].title.rendered,
          content: res.data[0].content.rendered
        };
      })
      .then(res => setPost({ title: res.title, content: res.content }))
      .catch(err => {
        console.log("catch", err);
      });
  }, [slug]);

  return (
    <Container>
      <Row>
        <Col>
          <H1>{post.title}</H1>
          <div
            className={`show-content ${userData[slug]}`}
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
