import { useLoaderData } from "react-router-dom";
import { getGenres } from "../utils/api";

export function loader() {
  return getGenres();
}

const Try = () => {
  const genresData = useLoaderData();
  console.log(genresData);
  return <div>Try</div>;
};

export default Try;
