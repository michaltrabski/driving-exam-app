import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checking } from "../store/reducers/usersReducer";
import { SHOW_ALL } from "./functions";
import { getQuestions } from "../store/actions/questionsActions";

const ScrollTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("ScrollTopOnRouteChange", pathname);

    window.scrollTo(0, 0);
  }, [pathname]);
  return "asd";
};

export default ScrollTopOnRouteChange;

export const GetQuestions = () => {
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

  return null;
};
