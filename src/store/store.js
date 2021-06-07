import { configureStore } from '@reduxjs/toolkit'
import pointSlice from "./pointSlice";
import soldersSlice from "./soldersArr";

export default configureStore({
  reducer: {
    point: pointSlice,
    solders: soldersSlice
  },
})
