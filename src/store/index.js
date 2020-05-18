import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import saga from "redux-saga";
import sagaRun from "./sagaRun";

const sagaMiddleware = saga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

let store = createStore(rootReducer, enhancer);
sagaMiddleware.run(sagaRun);
export default store;
