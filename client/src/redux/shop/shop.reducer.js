import { INITIAL_STATE } from "./shop-initial-state";
import { ShopActionTypes } from "./shop.types";

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_SHOP_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_SHOP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_SHOP_FAILURE:
      return {
        ...state,
        isFetching: true,
        errorMessage: action.payload,
      };
    case ShopActionTypes.SET_SHOP_DATA:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
