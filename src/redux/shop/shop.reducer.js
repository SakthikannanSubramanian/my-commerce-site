import { INITIAL_STATE } from "./shop-initial-state";
import { ShopActionTypes } from "./shop.types";

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SET_SHOP_DATA:
      state = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default shopReducer;
