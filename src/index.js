import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/reducers/rootReducer";
import { setCurrentUser } from "./store/actions/usersActions";

const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
  apiKey: "AIzaSyA8exKm3Jq4xQRhCKz62SXeOEAf1VWBaXI",
  authDomain: "poznajtesty-ad2ca.firebaseapp.com",
  databaseURL: "https://poznajtesty-ad2ca.firebaseio.com",
  projectId: "poznajtesty-ad2ca",
  storageBucket: "poznajtesty-ad2ca.appspot.com",
  messagingSenderId: "14333994731",
  appId: "1:14333994731:web:6b71c6fe3b41042c4a80ae"
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log("logged as = ", user);
    store.dispatch(setCurrentUser(user));
  } else {
    console.log("User logged out");
    // User is signed out.
    // store.dispatch(setCurrentUser({}));
  }
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
