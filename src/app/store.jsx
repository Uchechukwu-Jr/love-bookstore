import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/bookSlice";
import searchTermReducer from "../features/searchTermSlice";
import searchResultsReducer from "../features/searchResultsSlice";
import loadingReducer from "../features/loadingSlice";
import errorReducer from "../features/errorSlice";
import hasSearchedReducer from "../features/hasSearchedSlice"; // Add this import
import homeBooksReducer from "../features/homeBooksSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    searchTerm: searchTermReducer,
    searchResults: searchResultsReducer,
    loading: loadingReducer,
    error: errorReducer,
    hasSearched: hasSearchedReducer,
    homeBooks: homeBooksReducer,
  },
});

export default store;
