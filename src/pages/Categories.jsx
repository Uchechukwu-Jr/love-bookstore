import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (categories.length === 0) {
    return (
      <div className="text-center">
        <p>No Categories available.</p>
        <br />
        <br />
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <br />
      <br />
      <h2>Categories</h2>
      <u className="list-disc">
        {categories.map((category) => (
          <li key={category}>
            <Link to={`${category}`}>{category}</Link>
          </li>
        ))}
      </u>
    </div>
  );
};

export default Categories;
