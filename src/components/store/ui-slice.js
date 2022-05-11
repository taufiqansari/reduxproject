import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isCartIsVisible: true },
  reducers: {
    toggle(state) {
      state.isCartIsVisible = !state.isCartIsVisible;
    },
  },
});

export const uiSliceAction = uiSlice.actions;
export default uiSlice;
