import { getBooks } from "../utils/api";
import { useLoaderData, useNavigate } from "react-router-dom";

export async function loader() {
  return await getBooks(15);
}

const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Books</h1>
      <ul>
        {data.map((book, index) => (
          <li key={index}>{book.name}</li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <button className="btn btn-primary" onClick={() => navigate("/page/1")}>
        see all books
      </button>
    </div>
  );
};

export default Home;
