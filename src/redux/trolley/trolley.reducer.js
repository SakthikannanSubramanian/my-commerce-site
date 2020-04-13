import { INITIAL_STATE } from "./trolley-initial-state";
import TrolleyActionType from "./trolley.types";

const trolleyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TrolleyActionType.SHOW_MINI_TROLLEY:
      return {
        ...state,
        showMiniTrolley: !state.showMiniTrolley,
      };
    default:
      return state;
  }
};
export default trolleyReducer;
