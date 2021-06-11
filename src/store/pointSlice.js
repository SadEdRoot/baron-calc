import { createSlice } from "@reduxjs/toolkit";

export const pointSlice = createSlice({
  name: 'point',
  initialState: {
    startPoint: 500,
    currentPoint: 0
  },
  reducers: {
    setStartPoints: (state, action) => {
      state.startPoint = Number(action.payload);
    },
    setCurPoints: (state, action) => {
      state.currentPoint = Number(action.payload);
    }
  }
})


export const { setStartPoints, setCurPoints } = pointSlice.actions

export default pointSlice.reducer
