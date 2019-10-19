import { combineReducers } from "redux";
import viewReducer from "./viewReducer";

const rootReducer = combineReducers({ view: viewReducer });

export default rootReducer;
