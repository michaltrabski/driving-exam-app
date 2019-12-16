import React, { useState, useEffect } from "react";
import { Row, Col } from "../elements/elements";
import axios from "axios";
import { useSelector } from "react-redux";
import Add from "./Add";
import { yes } from "./../store/reducers/usersReducer";
import { Link } from "react-router-dom";
import { path } from "./../config/path";

const url = "https://poznaj-testy.pl/wp-json/wp/v2/posts?slug=";

const Explanation = ({ id, t }) => {
  const { poznajTestyHasAccess } = useSelector(
    state => state.usersReducer.userData
  );
  const [expl, setExpl] = useState("Pobieram...");

  useEffect(() => {
    if (poznajTestyHasAccess === yes || 1 === 1) {
      axios
        .get(`${url}${urlToSlug(id, t)}`)
        .then(res => res.data[0].content.rendered)
        .then(res => setExpl(res))
        .catch(err => {
          setExpl("");
        });
    } else {
      setExpl("");
    }
  }, [id]);

  return (
    <>
      <Row>
        <Col className="poznajtesty-explanation">
          <h5 className="mt-1">Wyjaśnienie</h5>
          {/* {poznajTestyHasAccess !== yes  && (
            <div>
              <span>
                Wyjaśnienia pytań testowych dostępne są dla płatnych kont{" "}
              </span>
              <Link to={path.pricing} className="alert-link">
                Cennik
              </Link>
            </div>
          )} */}

          <div
            dangerouslySetInnerHTML={{
              __html: expl
            }}
          ></div>
        </Col>
      </Row>
      <Add />
    </>
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
