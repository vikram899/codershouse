import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    otp: {
      phone: null,
      hash: null,
    },
  },
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    setOTP: (state, action) => {
      state.otp.phone = action.payload.phone;
      state.otp.hash = action.payload.hash;
    },
  },
});

export const { setAuth, setOTP } = authSlice.actions;

export default authSlice.reducer;
