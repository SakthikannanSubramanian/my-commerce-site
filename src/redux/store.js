import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// const middleWares = [thunk];

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
