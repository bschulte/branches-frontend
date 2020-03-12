import { combineReducers } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/auth.slice";

export default combineReducers({
  auth: authSliceReducer
});
