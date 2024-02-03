/* eslint-disable react-refresh/only-export-components */
import {
  useLoaderData,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import "../css/booklist.css";
import BookCard from "../components/BookCard";

const Author = () => {
  const books = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const lastPath = path.split("/").pop();
  const lastPathDecoded = decodeURIComponent(lastPath);

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <nav
        aria-label="breadcrumb"
        className="bg-[aliceblue] px-4 py-2 mb-4 flex items-center flex-wrap"
      >
        <ul className="flex items-center">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              <svg
                className="hover:text-blue-500 w-5 h-auto fill-current mx-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
            </Link>

            <svg
              className="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li className="inline-flex items-center">
            <Link to={`/authors`} className="text-gray-600 hover:text-blue-500">
              Authors
            </Link>

            <svg
              className="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li
            aria-current="page"
            className="inline-flex underline items-center"
          >
            <p className="text-gray-600 cursor-default">{lastPathDecoded}</p>
          </li>
        </ul>
      </nav>

      <h1 className="text-center font-bold text-2xl mb-3">
        Books <span className=" italic">by</span> {lastPathDecoded}
      </h1>
      <div className="container grid-container">
        {books.map((book) => (
          <div key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
