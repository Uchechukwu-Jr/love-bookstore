/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { getGenres } from "../utils/api";

export function loader() {
    return getGenres();
}

const Genres = () => {
    const genres = useLoaderData();
    return (
        <div className="container text-center">
            {genres.map((genre, index) => (
                <button
                    className="btn btn-primary px-3 py-1 mx-1 my-1"
                    key={index}
                >
                    <Link to={encodeURIComponent(genre)}>{genre}</Link>
                </button>
            ))}
        </div>
    );
};

export default Genres;
