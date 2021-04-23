import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../redux/slice";

export default configureStore({
  reducer: dataSlice,
});
