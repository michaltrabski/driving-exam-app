import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./usersReducer";
import { settingsReducer } from "./settingsReducer";
import { questionsReducer } from "./questionsReducer";
import thunk from "redux-thunk";
import { examReducer } from "./examReducer";

export const store = createStore(
  combineReducers({
    questionsReducer,
    usersReducer,
    settingsReducer,
    examReducer,
  }),
  {},
  applyMiddleware(thunk)
);
