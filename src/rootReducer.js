import { combineReducers } from "redux";
import { user, movies } from "./reducers/index";

export default combineReducers({ user, movies });
