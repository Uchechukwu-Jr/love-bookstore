/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { getGenres } from "../utils/api";

export function loader() {
  return getGenres();
}

const Try = () => {
  const genres = useLoaderData();
  return (
    <ul>
      {genres.map((genre, index) => (
        <li key={index}>
          <Link to={encodeURIComponent(genre)}>{genre}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Try;
