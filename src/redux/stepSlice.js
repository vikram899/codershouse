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
    setToDefault: (state) => {
      state.value = 1;
    },
  },
});

export const { increment, decrement, setToDefault } = stepSlice.actions;

export default stepSlice.reducer;
