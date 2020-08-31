import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./root-reducer";

const store = configureStore({
  reducer: rootReducers,
  devTools: !__IS_PROD__,
});

export default store;
