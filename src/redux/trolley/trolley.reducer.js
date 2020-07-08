import { INITIAL_STATE } from "./trolley-initial-state";
import TrolleyActionType from "./trolley.types";
import { addItemToTrolley, reduceItemFromTrolley } from "./trolley.utils";
import TrolleyActionTypes from "./trolley.types";

const trolleyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TrolleyActionType.SHOW_MINI_TROLLEY:
      return {
        ...state,
        showMiniTrolley: !state.showMiniTrolley,
      };
    case TrolleyActionType.ADD_TO_TROLLEY:
      return {
        ...state,
        trolleyItems: addItemToTrolley(state.trolleyItems, action.payload),
      };
    case TrolleyActionType.CLEAR_ITEM_FROM_TROLLEY:
      return {
        ...state,
        trolleyItems: state.trolleyItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case TrolleyActionType.REDUCE_FROM_TROLLEY:
      return {
        ...state,
        trolleyItems: reduceItemFromTrolley(state.trolleyItems, action.payload),
      };
    case TrolleyActionTypes.EMPTY_TROLLEY:
      return {
        ...state,
        trolleyItems: [],
      };
    default:
      return state;
  }
};
export default trolleyReducer;
