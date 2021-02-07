import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import {
  getSubjectsFailure,
  getSubjectsRequest,
  getSubjectsSuccess,
} from "./../actions/subjects";
import { getSubjects } from "./../../api/api";

function* getSubjectsWorker(action) {
  yield put(getSubjectsRequest());
  try {
    const subjects = yield call(getSubjects, action.userId);
    yield put(getSubjectsSuccess(subjects));
  } catch (error) {
    console.log(error);
    yield put(getSubjectsFailure(error));
  }
}

function* watchGetSubjects() {
  yield takeEvery("GET_SUBJECTS", getSubjectsWorker);
}

export default function* subjectsSaga() {
  yield all([fork(watchGetSubjects)]);
}
