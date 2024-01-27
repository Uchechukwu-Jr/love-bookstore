import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTotalBooks,
  setTotalPages,
  setCurrentPages,
  setPageSize,
  setBooks,
} from '../features/bookSlice';

const BookComponent = () => {
  const dispatch = useDispatch();
  const { totalBooks, totalPages, currentPages, pageSize, books } = useSelector((state) => state.book);

  // Dispatch actions to update the state (you can remove this in your actual application)
  React.useEffect(() => {
    dispatch(setTotalBooks(10));
    dispatch(setTotalPages(3));
    dispatch(setCurrentPages(1));
    dispatch(setPageSize(5));
    dispatch(setBooks(['Book1', 'Book2', 'Book3']));
  }, [dispatch]);

  return (
    <div>
      <h2>Total Books: {totalBooks}</h2>
      <p>Total Pages: {totalPages}</p>
      <p>Current Pages: {currentPages}</p>
      <p>Page Size: {pageSize}</p>

      <h3>Books:</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookComponent;