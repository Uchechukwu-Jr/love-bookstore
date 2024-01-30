import { createSlice } from "@reduxjs/toolkit";

const hasSearchedSlice = createSlice({
  name: "hasSearched",
  initialState: false,
  reducers: {
    setHasSearched: (state, action) => {
      return action.payload;
    },
  },
});

export const { setHasSearched } = hasSearchedSlice.actions;

export default hasSearchedSlice.reducer;
