/* eslint-disable react-refresh/only-export-components */
import { getBooks } from "../utils/api";
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import "../css/booklist.css";

export async function loader() {
  return await getBooks(20);
}

const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="w-[100%] flex flex-col min-h-screen">
      <div className="container grid-container">
        {data.map((book) => (
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
              <button className="btn btn-primary text-nowrap">
                Get this book
              </button>
            </Link>
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary mx-32 mb-5 mt-20"
        onClick={() => navigate("/page/1")}
      >
        <span className="pr-2">see all books</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-up-right inline-block"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
          />
          <path
            fillRule="evenodd"
            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Home;
