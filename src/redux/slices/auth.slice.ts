import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    }
  }
});

export const { setUser } = authSlice.actions;
export interface IAuthState {
  user?: IUser;
}

export default authSlice.reducer;
