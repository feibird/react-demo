import { createStore, combineReducers } from "redux";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  menuReducer: menuReducer,
});

export default rootReducer;
