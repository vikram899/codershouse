import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./stepSlice";

export default configureStore({
  reducer: {
    step: stepReducer,
  },
});
