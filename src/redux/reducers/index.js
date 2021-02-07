import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import userReducer from "./user";
import subjectsReducer from "./subjects";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const userPersistConfig = {
  key: "user",
  storage: storage,
  stateReconsiler: autoMergeLevel2,
  whitelist: ["id", "email", "name"],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  subjects: subjectsReducer,
});

export default rootReducer;
