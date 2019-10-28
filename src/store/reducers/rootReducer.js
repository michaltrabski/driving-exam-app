import { createStore, combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { settingsReducer } from "./settingsReducer";
import { questionsReducer } from "./questionsReducer";

export const store = createStore(
  combineReducers({ questionsReducer, userReducer, settingsReducer })
);
