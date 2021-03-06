import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import { store } from "./store/reducers/rootReducer";
import { setCurrentUser, setUserNotLogged } from "./store/actions/usersActions";
import firebase from "./config/firebase";
import { resetAllQuestions } from "./store/actions/questionsActions";

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(resetAllQuestions());
  user
    ? store.dispatch(setCurrentUser(user))
    : store.dispatch(setUserNotLogged());
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
