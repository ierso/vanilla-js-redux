import { createStore } from "redux";
import { combineReducers } from "redux";
import { counter } from "./reducers/clockReducer";
import { toggle } from "./reducers/toggleReducer";

const rootReducer = combineReducers({ counter: counter, toggle: toggle });
const store = createStore(rootReducer);

export default store;
