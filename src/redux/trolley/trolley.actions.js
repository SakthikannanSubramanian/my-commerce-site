import TrolleyActionTypes from "./trolley.types";
export const showMiniTrolley = () => ({
  type: TrolleyActionTypes.SHOW_MINI_TROLLEY,
});
export const addItemToTrolley = (item) => ({
  type: TrolleyActionTypes.ADD_TO_TROLLEY,
  payload: item,
});
