/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { getBooks } from "../utils/api";

export function loader() {
  return getBooks();
}

const Category = () => {
  const books = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const lastPath = path.split("/").pop();
  const lastPathDecoded = decodeURIComponent(lastPath);
  const requestedGenre = lastPathDecoded.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.genre.some((genre) => genre.toLowerCase() === requestedGenre)
  );

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <br />
      <br />
      <h2 className=" underline">
        Category / <span className="font-bold">{lastPathDecoded}</span>
      </h2>
      <div>
        <h1>Product List</h1>
      </div>
      <div>
        {filteredBooks.length === 0 ? (
          <p>No books in {lastPathDecoded} Genre</p>
        ) : (
          <ul>
            {filteredBooks.map((book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Category;
