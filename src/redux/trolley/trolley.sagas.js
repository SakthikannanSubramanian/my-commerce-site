import { takeLatest, put, call, all } from "redux-saga/effects";
import TrolleyActionTypes from "./trolley.types";
import UserActionTypes from "../user/user.types";
import { emptyTrolley } from "./trolley.actions";

export function* emptyTrolleyOnSignOut() {
  yield put(emptyTrolley());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, emptyTrolleyOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
