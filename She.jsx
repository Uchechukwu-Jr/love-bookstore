/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useCallback } from "react";
import MyContext from "./Context";
import { getBooks } from "../utils/api";
import ReactPaginate from "react-paginate";
import "../css/pagination.css";

const MyComponent = () => {
  const { data, updateData, updateCurrentPage, pageSize, currentPage } =
    useContext(MyContext);
  const memoizedUpdateData = useCallback(updateData, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getBooks({ currentPage, pageSize });
        memoizedUpdateData(booksData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [memoizedUpdateData, currentPage, pageSize]);

  const handlePageClick = (selected) => {
    updateCurrentPage(selected.selected);
  };

  return (
    <div>
      <ul>
        {data?.books?.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
      <ReactPaginate
        breakLabel="..."
        pageCount={data.totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default MyComponent;
