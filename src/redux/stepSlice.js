import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = createSlice({
  name: "step",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, set } = stepSlice.actions;

export default stepSlice.reducer;
