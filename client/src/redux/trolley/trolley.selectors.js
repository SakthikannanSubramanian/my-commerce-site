import { createSelector } from "reselect";

const selectTrolley = (state) => state.trolley;

export const selectTrolleyItems = createSelector(
  [selectTrolley],
  (trolley) => trolley.trolleyItems
);

export const selectShowMiniTrolley = createSelector(
  [selectTrolley],
  (trolley) => trolley.showMiniTrolley
);

export const selectTrolleyCount = createSelector(
  [selectTrolleyItems],
  (trolleyItems) =>
    trolleyItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectTrolleyTotal = createSelector(
  [selectTrolleyItems],
  (trolleyItems) =>
    trolleyItems.reduce((totalPrice, item) => totalPrice + item.totalPrice, 0)
);
