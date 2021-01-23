import {put, takeEvery} from 'redux-saga/effects';
import {updateUser} from './../actions/user';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// worker saga does the heavy lifting
export function* dummySaga() {
  yield delay(1000)
  yield put(updateUser({ name: { firstname: 'dummy' } }))
}

//watcher saga does something every time it sees the action defined
export function* watchUpdateUser(){
  yield takeEvery('UPDATE_USER', dummySaga)
}