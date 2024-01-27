import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/bookSlice';
import searchTermReducer from '../features/searchTermSlice';
import searchResultsReducer from '../features/searchResultsSlice';
import loadingReducer from '../features/loadingSlice';
import errorReducer from '../features/errorSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    searchTerm: searchTermReducer,
    searchResults: searchResultsReducer,
    loading: loadingReducer,
    error: errorReducer,
  },
});

export default store;