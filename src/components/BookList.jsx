import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";
import { useParams, useNavigate, useLoaderData, Link } from "react-router-dom";
import { getBooks } from "../utils/api";
import "../css/booklist.css";

export function loader() {
  return getBooks();
}

const BookList = () => {
  const data = useLoaderData();
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    const parsedPage = parseInt(page);

    if (!isNaN(parsedPage) && parsedPage > 0 && parsedPage <= npage) {
      setCurrentPage(parsedPage);
    } else {
      navigate("/page/1");
    }
  }, [page, npage, navigate]);

  const createPaginationItem = (i) => {
    return (
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => changeCpage(i)}
      >
        {i}
      </Pagination.Item>
    );
  };

  const paginationItems = [];
  paginationItems.push(createPaginationItem(1));
  if (currentPage > 3) {
    paginationItems.push(<Pagination.Ellipsis key="ellipsis-prev" />);
  }
  const start = Math.max(2, currentPage - 2);
  const end = Math.min(npage - 1, currentPage + 2);
  for (let i = start; i <= end; i++) {
    paginationItems.push(createPaginationItem(i));
  }
  if (currentPage < npage - 2) {
    paginationItems.push(<Pagination.Ellipsis key="ellipsis-next" />);
  }
  paginationItems.push(createPaginationItem(npage));

  return (
    <div className="min-h-screen">
      <div className="container grid-container">
        {records.map((book) => (
          <div key={book.id}>
            <Link to={`/${book.id}`}>
              <img
                width={100}
                className="book-list-img"
                src={book.imageUrl}
                alt={book.imageUrl}
              />
              <h3>{book.name}</h3>
              <p>{book.author}</p>
              <button className="btn btn-primary">Get this book</button>
            </Link>
          </div>
        ))}
      </div>
      <nav className="mt-[50px]">
        <ul
          className="pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button href="#" className="page-link" onClick={prePage}>
              Prev
            </button>
          </li>
          {paginationItems}
          <li
            className={`page-item ${currentPage === npage ? "disabled" : ""}`}
          >
            <button href="#" className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      navigate(`/page/${currentPage - 1}`);
    }
  }

  function changeCpage(id) {
    navigate(`/page/${id}`);
  }

  function nextPage() {
    if (currentPage !== npage) {
      navigate(`/page/${currentPage + 1}`);
    }
  }
};

export default BookList;
