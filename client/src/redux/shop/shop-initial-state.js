import { STORE } from "./../../api/store";

export const INITIAL_STATE = {
  collections: null, //because now we have started looking the data from firebase firestore
  isFetching: false,
  errorMessage: undefined,
};
