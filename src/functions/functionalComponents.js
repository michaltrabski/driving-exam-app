import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checking } from "../store/reducers/usersReducer";
import { SHOW_ALL } from "./functions";
import { getQuestions } from "../store/actions/questionsActions";

export const GetQuestions = () => {
  let { allQuestions, filterOption, kat, lang } = useSelector(
    state => state.questionsReducer
  );
  const { isLoggedIn } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      isLoggedIn !== checking &&
      allQuestions.length === 0 &&
      filterOption === SHOW_ALL
    ) {
      dispatch(getQuestions(kat, lang));
    }
  }, [kat, lang, isLoggedIn]);

  return null;
};

export const ScrollTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
