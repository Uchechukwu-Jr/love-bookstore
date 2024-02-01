/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { getBooks } from "../utils/api";

export function loader() {
    return getBooks();
}

const Author = () => {
    const books = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const lastPath = path.split("/").pop();
    const lastPathDecoded = decodeURIComponent(lastPath);
    const requestedAuthor = lastPathDecoded.toLowerCase();
    const filteredBooks = books.filter(book =>
    book.author.toLowerCase() === requestedAuthor
);

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <br />
            <br />
            <h2 className=" underline">
                Authors / <span className="font-bold">{lastPathDecoded}</span>
            </h2>
            <div>
                <h1>Product List</h1>
            </div>
            <div>
                {filteredBooks.length === 0 ? (
                    <p>No books in {lastPathDecoded} Genre</p>
                ) : (
                    <ul>
                        {filteredBooks.map(book => (
                            <li key={book.id}>{book.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Author;
