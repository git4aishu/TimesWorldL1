import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "../features/view/HomePage/HomePageSlice";

export const store = configureStore({
  reducer: {
    homePageData: homePageSlice,
  },
});
