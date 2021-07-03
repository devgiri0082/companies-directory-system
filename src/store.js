import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger/src";
import thunk from "redux-thunk";
import directoryReducer from "./reducers/directoryReducer";

const middleware = [thunk, logger];

export const store = createStore(
  directoryReducer,
  applyMiddleware(...middleware)
);
