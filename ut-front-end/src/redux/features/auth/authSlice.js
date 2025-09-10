import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  accessToken: undefined,
  user: undefined,
  isDemoMode: true, // Enable demo mode by default
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
      state.isDemoMode = false;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      state.isDemoMode = true;
      Cookies.remove('userInfo');
    },
    demoLogin: (state, { payload }) => {
      state.user = payload;
      state.isDemoMode = true;
      state.accessToken = 'demo-token';
    },
  },
});

export const { userLoggedIn, userLoggedOut, demoLogin } = authSlice.actions;
export default authSlice.reducer;
