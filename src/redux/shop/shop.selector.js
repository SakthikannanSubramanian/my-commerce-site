import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

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

export const isCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionFetched = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
