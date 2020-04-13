import { INITIAL_STATE } from "./trolley-initial-state";
import TrolleyActionType from "./trolley.types";
import { addItemToTrolley } from "./trolley.utils";

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
    default:
      return state;
  }
};
export default trolleyReducer;
