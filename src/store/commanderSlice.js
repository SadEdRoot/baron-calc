import { createSlice } from "@reduxjs/toolkit";

export const commanderSlice = createSlice({
  name: 'command',
  initialState: [],
  reducers: {
    setCommand: (state, action) =>
      {console.log(action.payload);
      return state = [...state, action.payload]},
    removeCommandId: (state, action) =>
      state = state.filter((el) => el.id !== action.payload),
    setCommandUnit: (state, action) => {
      void(state[state.findIndex((el) => el.id === action.payload.unitId)].unit = action.payload.unit)},
    setCommandData: (state, action) =>
      void(state[action.payload.unitId].unit.data.equipment = action.payload.data),
  }
})


export const {setCommand, removeCommandId, setCommandUnit, setCommandData} = commanderSlice.actions

export default commanderSlice.reducer
