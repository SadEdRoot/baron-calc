import { createSlice } from "@reduxjs/toolkit";

export const commanderSlice = createSlice({
  name: 'solders',
  initialState: [],
  reducers: {
    setSolder: (state, action) =>
      state = [...state, action.payload],
    removeSolderId: (state, action) =>
      state = state.filter((el) => el.id !== action.payload),
    setSolderUnit: (state, action) => {
      void(state[state.findIndex((el) => el.id === action.payload.unitId)].unit = action.payload.unit)},
    setSolderData: (state, action) =>
      void(state[action.payload.unitId].unit.data.equipment = action.payload.data),
  }
})


export const {} = commanderSlice.actions

export default commanderSlice.reducer
