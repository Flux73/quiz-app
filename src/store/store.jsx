import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app-data-slice";
import themeSlice from "./theme-slice";

const store = configureStore({
  reducer: { themeSlice, appSlice },
});

export default store;
