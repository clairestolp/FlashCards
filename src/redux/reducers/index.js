import { combineReducers } from "redux";

import userReducer from "./user";
import subjectsReducer from "./subjects";

const rootReducer = combineReducers({
  user: userReducer,
  subjects: subjectsReducer,
});

export default rootReducer;
