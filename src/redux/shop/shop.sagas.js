import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";

import { ShopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }

  //dispatch(fetchCollectionsStart());

  // collectionRef
  //   .get()
  //   .then(
  //     //instead of snapshot you can do .get() or native fetch() method with API URL. snapshot is exactly like the Observer Observable pattern
  //     (snapShot) => {
  //       const collectionsMap = convertCollectionSnapshotToMap(snapShot);
  //       dispatch(fetchCollectionsSuccess(collectionsMap));
  //     }
  //   )
  //   .catch((error) => dispatch(fetchCollectionFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_SHOP_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
