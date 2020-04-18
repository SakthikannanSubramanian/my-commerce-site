import TrolleyActionTypes from "./trolley.types";
export const showMiniTrolley = () => ({
  type: TrolleyActionTypes.SHOW_MINI_TROLLEY,
});
export const addItemToTrolley = (item) => ({
  type: TrolleyActionTypes.ADD_TO_TROLLEY,
  payload: item,
});
export const clearItemFromTrolley = (item) => ({
  type: TrolleyActionTypes.CLEAR_ITEM_FROM_TROLLEY,
  payload: item,
});
export const reduceItemFromTrolley = (item) => ({
  type: TrolleyActionTypes.REDUCE_FROM_TROLLEY,
  payload: item,
});
