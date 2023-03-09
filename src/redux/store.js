import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DemoSlice from "./DemoSlice";

const store = configureStore({
  reducer: {
    posts: DemoSlice,
  },
});

export default store;





