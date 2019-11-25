import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./usersReducer";
import { settingsReducer } from "./settingsReducer";
import { questionsReducer } from "./questionsReducer";
import thunk from "redux-thunk";
import { examReducer } from "./examReducer";

// const michalMiddleware = store => next => action => {
//   console.log("dispatching", action);
//   let result = next(action);
//   console.log("next state", store.getState());
//   return result;
// };

export const store = createStore(
  combineReducers({
    questionsReducer,
    usersReducer,
    settingsReducer,
    examReducer
  }),
  {},
  applyMiddleware(thunk)
);
