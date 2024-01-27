import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    totalBooks: 0,
    totalPages: 0,
    currentPages: 0,
    pageSize: 0,
    books: [],
  },
  reducers: {
    setTotalBooks: (state, action) => {
      state.totalBooks = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPages: (state, action) => {
      state.currentPages = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const {
  setTotalBooks,
  setTotalPages,
  setCurrentPages,
  setPageSize,
  setBooks,
} = bookSlice.actions;

export default bookSlice.reducer;