import { createStore } from "redux";
import { combineReducers } from "redux";
import { counter, toggle } from "./reducers";

const rootReducer = combineReducers({ counter: counter, toggle: toggle });
const store = createStore(rootReducer);

export default store;
