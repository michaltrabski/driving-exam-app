import React from "react";
import { PageBackground } from "./elements/elements";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Exam from "./pages/Exam";
import ExamReview from "./pages/ExamReview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
        <PageBackground>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/learn" component={Learning} />
            <Route path="/exam" component={Exam} />
            <Route path="/exam-reviev" component={ExamReview} />
          </Switch>
        </PageBackground>
      </BrowserRouter>
    </>
  );
}

export default App;
