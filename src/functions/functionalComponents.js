import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checking } from "../store/reducers/usersReducer";
import { SHOW_ALL } from "./functions";
import { getQuestions } from "../store/actions/questionsActions";
import { path } from "./../config/path";
import {
  changeMode,
  collapseNav,
  not_paid_mode
} from "../store/actions/settingsActions";
import {
  learn_mode,
  exam_mode,
  reviev_mode
} from "./../store/actions/settingsActions";
import { examReset } from "../store/actions/examActions";
import { yes } from "./../store/reducers/usersReducer";

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

export const OnRouteChange = () => {
  const {
    isLoggedIn,
    userData: { poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    //collapseNav on route change
    dispatch(collapseNav());

    //change mode on route change
    if (pathname === path.learn) dispatch(changeMode(learn_mode));
    if (pathname === path.exam_reviev) dispatch(changeMode(reviev_mode));
    if (pathname === path.exam) {
      dispatch(changeMode(exam_mode));
      dispatch(examReset());
    }
    if (pathname === path.difficult) dispatch(changeMode(learn_mode));
  }, [pathname]);

  // return <p>{JSON.stringify(pathname)}</p>;
  return null;
};
