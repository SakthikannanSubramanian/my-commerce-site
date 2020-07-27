import { ShopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_SHOP_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_SHOP_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_SHOP_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionsSuccessAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then(
//         //instead of snapshot you can do .get() or native fetch() method with API URL. snapshot is exactly like the Observer Observable pattern
//         (snapShot) => {
//           const collectionsMap = convertCollectionSnapshotToMap(snapShot);
//           dispatch(fetchCollectionsSuccess(collectionsMap));
//         }
//       )
//       .catch((error) => dispatch(fetchCollectionFailure(error.message)));
//   };
// };
