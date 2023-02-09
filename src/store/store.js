import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./animeSlice";

const store = configureStore({
  reducer: {
    animation: animeSlice,
  },
});

export default store;
