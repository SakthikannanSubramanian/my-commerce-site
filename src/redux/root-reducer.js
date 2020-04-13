import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import trolleyReducer from "./trolley/trolley.reducer";

export default combineReducers({
  user: userReducer,
  trolley: trolleyReducer,
});
