import { createStore, combineReducers, applyMiddleware } from "redux";
import * as example from "./example/reducer";
import thunk from "redux-thunk";

let store = createStore(
    combineReducers({ ...example, }),
    applyMiddleware(thunk)
);

export default store;
