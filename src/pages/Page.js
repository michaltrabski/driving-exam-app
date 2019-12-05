import React, { useState, useEffect } from "react";
import { Container, Row, Col, H1 } from "../elements/elements";
import axios from "axios";
import { useSelector } from "react-redux";
import { coursesList } from "../config/path";

const url = "https://poznaj-testy.pl/wp-json/wp/v2/pages?slug=";

const Page = props => {
  const [post, setPost] = useState({ title: "", content: "" });
  const { userData } = useSelector(state => state.usersReducer);

  const slug = props.match.params.id;

  console.log("slug", slug);
  console.log("userData[slug]", userData[slug]);

  // const { hasAccess } = coursesList.find(
  //   item => item.slugToPaidContent === slug
  // );

  // if (typeof hasAccess !== undefined)
  //   console.log("xxxxxxxxxx", hasAccess, slug, userData);

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
  }, []);

  return (
    <Container>
      {/* <p>{JSON.stringify(slug)}</p>
      <p>{JSON.stringify(userData)}</p> */}
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

export default Page;
