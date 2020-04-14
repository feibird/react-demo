import { createStore, combineReducers } from "redux";
import countReducers from "./reducers/countReducers";
import menuReducers from "./reducers/menuReducers";
const rootReducer = combineReducers({
  countReducers,
  menuReducers
});

const initState = {};

const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const Store = createStore(rootReducer, initState, reduxDevtools);

export default Store;
