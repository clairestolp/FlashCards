import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./../actions/user";
import { getUser } from "./../../api/api";

function* loginWorker(action) {
  yield put(loginRequest());
  const user = yield call(getUser, action.email);
  console.log(user);
  yield put(loginSuccess(user));
}

function* watchLogin() {
  yield takeEvery("LOGIN", loginWorker);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
