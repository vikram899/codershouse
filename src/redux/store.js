import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./stepSlice";
import userReducer from "./authSlice";
import activateReducer from "./activateSlice";

export default configureStore({
  reducer: {
    step: stepReducer,
    auth: userReducer,
    activate: activateReducer,
  },
});
