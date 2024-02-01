/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { getAuthors } from "../utils/api";

export function loader() {
    return getAuthors();
}

const Authors = () => {
    const authors = useLoaderData();
    return (
        <div className="container text-center">
            {authors.map((author, index) => (
                <button
                    className="btn btn-primary px-3 py-1 mx-1 my-1"
                    key={index}
                >
                    <Link to={encodeURIComponent(author)}>{author}</Link>
                </button>
            ))}
        </div>
    );
};

export default Authors;
