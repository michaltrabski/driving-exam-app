import React, { useEffect } from "react";
import { PageBackground } from "./elements/elements";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Exam from "./pages/Exam";
import ExamReview from "./pages/ExamReview";
import path from "./config/path";
import Blog from "./pages/Blog";
import SuperAdmin from "./pages/SuperAdmin";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Stats from "./pages/Stats";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "./store/actions/questionsActions";
import UserProfile from "./pages/UserProfile";

function App() {
  const kat = useSelector(state => state.questionsReducer.kat);
  const lang = useSelector(state => state.questionsReducer.lang);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions(kat, lang)); // automaticaly get allQuestions when component is mounted
  }, [kat, lang]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <PageBackground>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={path.learn} component={Learning} />
            <Route path={path.exam} component={Exam} />
            <Route path={path.exam_reviev} component={ExamReview} />
            <Route path={path.blog} component={Blog} />
            <Route path={path.stats} component={Stats} />
            <Route path={path.super_admin} component={SuperAdmin} />
            <Route path={path.sign_up} component={SignUp} />
            <Route path={path.sign_in} component={SignIn} />
            <Route path={path.user_profile} component={UserProfile} />
          </Switch>
        </PageBackground>
      </BrowserRouter>
    </>
  );
}

export default App;
