import React from "react";
import { PageBackground, PageContainer } from "./elements/elements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Exam from "./pages/Exam";
import ExamReview from "./pages/ExamReview";
import Blog from "./pages/Blog";
import SuperAdmin from "./pages/SuperAdmin";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Stats from "./pages/Stats";
import UserProfile from "./pages/UserProfile";
import FastAccess from "./pages/FastAccess";
import Footer from "./components/Footer";
import Page from "./pages/Page";
import Difficult from "./pages/Difficult";
import Post from "./pages/Post";
import { OnRouteChange } from "./functions/functionalComponents";
import { path } from "./config/path";

function App() {
  return (
    <Router>
      <OnRouteChange />
      <PageContainer>
        <Nav />
        <PageBackground>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={path.learn} component={Learning} />
            <Route path={path.difficult} component={Difficult} />
            <Route path={path.exam} component={Exam} />
            <Route path={path.exam_reviev} component={ExamReview} />

            <Route path={path.stats} component={Stats} />
            <Route path={path.super_admin} component={SuperAdmin} />
            <Route path={path.fast} component={FastAccess} />

            <Route path={path.sign_up} component={SignUp} />
            <Route path={path.sign_in} component={SignIn} />
            <Route path={path.user_profile} component={UserProfile} />

            <Route path={`${path.blog}/:id`} component={Post} />
            <Route path={path.blog} component={Blog} />

            <Route path={`/:id`} component={Page} />
          </Switch>
        </PageBackground>
        <Footer />
      </PageContainer>
    </Router>
  );
}

export default App;
