import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop);

export const selectCollection = (collectionIdParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionIdParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collection) =>
    collection ? Object.keys(collection).map((keys) => collection[keys]) : []
);
