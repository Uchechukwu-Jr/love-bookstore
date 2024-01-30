import { createSlice } from "@reduxjs/toolkit";

const homeBooksSlice = createSlice({
  name: "homeBooks",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    setHomeBooks: (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    setBooksError: (state, action) => {
      state.data = [];
      state.error = action.payload;
      state.loading = false;
    },
    setBooksLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setHomeBooks, setBooksError, setBooksLoading } =
  homeBooksSlice.actions;

export default homeBooksSlice.reducer;
