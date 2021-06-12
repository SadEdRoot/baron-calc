import { createSlice } from "@reduxjs/toolkit";

export const soldersSlice = createSlice({
  name: 'solders',
  initialState: [],
  reducers: {
    setSolder: (state, action) =>
      state = [...state, action.payload],
    removeSolderId: (state, action) =>
      state = state.filter((el) => el.id !== action.payload),
    setSolderUnit: (state, action) =>
      void(state[action.payload.unitId].unit = action.payload.unit),
    setSolderData: (state, action) =>
      void(state[action.payload.unitId].unit.data.equipment = action.payload.data),
  }
})


export const { setSolder, removeSolderId, setSolderUnit, setSolderData } = soldersSlice.actions

export default soldersSlice.reducer
