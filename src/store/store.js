import { configureStore } from '@reduxjs/toolkit'
import pointSlice from "./pointSlice";
import soldersSlice from "./soldersArr";
import commanderSlice from "./commanderSlice";

export default configureStore({
  reducer: {
    point: pointSlice,
    solders: soldersSlice,
    commanders: commanderSlice,
  },
})
