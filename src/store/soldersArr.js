import { createSlice } from "@reduxjs/toolkit";

export const soldersSlice = createSlice({
  name: 'solders',
  initialState: [],
  reducers: {
    setSolder: (state, action) =>
      state = [...state, action.payload],
    removeSolderId: (state, action) =>
      state = state.filter((el) => el.id !== action.payload)
  }
})


export const { setSolder, removeSolderId } = soldersSlice.actions

export default soldersSlice.reducer
