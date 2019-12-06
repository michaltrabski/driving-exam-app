import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "../elements/elements";

const url = "https://poznaj-testy.pl/wp-json/wp/v2/posts";

class Blog extends Component {
  state = { posts: [], isLoaded: false };

  // componentDidMount() {
  //   console.log("Blog componentDidMount");

  //   axios
  //     .get(url)
  //     // .then(res => console.log(res.data[0].content.rendered))
  //     // .then(res => console.log(res.data));
  //     .then(res => this.setState({ posts: res.data, isLoaded: true }));
  //   //jeszcze catch!!!
  // }

  render() {
    const { posts, isLoaded } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            {!isLoaded
              ? "pobieram"
              : posts.map(post => (
                  <div>
                    <h5>{post.title.rendered}</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                      }}
                    ></div>
                  </div>
                ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blog;
