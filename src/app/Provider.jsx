/* eslint-disable react/prop-types */
import { useState } from "react";
import MyContext from "./Context";

const MyProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState({
    data: {
      totalBooks: 0,
      totalPages: 0,
      currentPage: 0,
      pageSize: 0,
      books: [],
    },
  });
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 3;

  const updateData = (newData) => {
    setSharedState((prevState) => ({
      ...prevState,
      data: newData,
    }));
  };

  const updateCurrentPage = (newValue) => {
    setCurrentPage(newValue);
  };

  return (
    <MyContext.Provider
      value={{
        ...sharedState,
        updateData,
        updateCurrentPage,
        pageSize,
        currentPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
