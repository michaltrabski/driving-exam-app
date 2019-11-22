import React, { useEffect } from "react";
import Question from "../components/learning/Question";
import { useSelector, useDispatch } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import SearchForm from "../components/learning/SearchForm";
import { Container, Row, Col } from "../elements/elements";
import Filters from "./../components/learning/Filters";
import SearchInfo from "../components/learning/SearchInfo";
import { filterQuestions, SHOW_ALL } from "../functions/functions";
import Add from "../components/Add";
import Loading from "../components/learning/Loading";
import { getQuestions } from "../store/actions/questionsActions";
import { checking } from "./../store/reducers/usersReducer";
import FilteresOutInfo from "../components/learning/FilteredOutInfo";

const Learning = () => {
  let {
    allQuestions,
    cqi,
    perPage,
    search,
    filterOption,
    kat,
    lang
  } = useSelector(state => state.questionsReducer);
  const {
    isLoggedIn,
    userData: { poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1", isLoggedIn, allQuestions.length, filterOption);
    if (
      isLoggedIn !== checking &&
      allQuestions.length === 0 &&
      filterOption === SHOW_ALL
    ) {
      console.log("2", isLoggedIn, allQuestions.length, filterOption);
      dispatch(getQuestions(kat, lang, poznajTestyHasAccess));
    }
  }, [kat, lang, isLoggedIn]);

  // filter array based on search result
  allQuestions = allQuestions.filter(question =>
    question.t.includes(search.toLowerCase())
  );

  // filter array based on filter that user choose
  if (filterOption !== SHOW_ALL) {
    allQuestions = allQuestions.filter(question =>
      filterQuestions(question, filterOption)
    );
  }

  let amount = allQuestions.length;

  return (
    <>
      <Container>
        <Row mb>
          <Col pr>
            <Filters />
          </Col>
          <Col pl>
            <SearchForm />
          </Col>
        </Row>
        <NextPage amount={amount} />
      </Container>
      <SearchInfo amount={amount} />
      <Loading />
      <FilteresOutInfo amount={amount} />
      {allQuestions.slice(cqi, cqi + perPage).map((question, i) => {
        return (
          <React.Fragment key={question.id}>
            <Question question={question} />
            {i === 2 && <Add />}
            {i === 5 && <Add />}
            {i === perPage - 1 && <Add />}
          </React.Fragment>
        );
      })}
      {amount > 0 && (
        <Container>
          <NextPage amount={amount} />
        </Container>
      )}
      <Settings />
    </>
  );
};

export default Learning;
