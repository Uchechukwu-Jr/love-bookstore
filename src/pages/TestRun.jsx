import { getBooks } from "../utils/api";
import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  return await getBooks(15);
}

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>Home Books</h1>
      <ul>
        {data.map((book, index) => (
          <li key={index}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
