import { ShopActionTypes } from "./shop.types";
export const setShopData = (shopCollection) => ({
  type: ShopActionTypes.SET_SHOP_DATA,
  payload: shopCollection,
});
