import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import subjectsSaga from "./subjectsSaga";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(subjectsSaga)]);
}
