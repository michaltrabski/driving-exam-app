import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./userReducer";
import { settingsReducer } from "./settingsReducer";
import { questionsReducer } from "./questionsReducer";
import thunk from "redux-thunk";

const michalMiddleware = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const store = createStore(
  combineReducers({ questionsReducer, userReducer, settingsReducer }),
  {},
  applyMiddleware(michalMiddleware, thunk)
);
