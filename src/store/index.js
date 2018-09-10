import { createStore, combineReducers, applyMiddleware } from "redux";
import * as example from "./example/reducer";
import globalReducer from "./reducer";

import thunk from "redux-thunk";

let store = createStore(
    combineReducers({ ...example, ...globalReducer}),
    applyMiddleware(thunk)
);

export default store;
