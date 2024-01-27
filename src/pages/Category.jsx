import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const path = location.pathname;
  const lastPath = path.split("/").pop();
  const lastPathDecoded = decodeURIComponent(lastPath);

  const navigate = useNavigate();
  const holder = {
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    justifyItems: "center",
    gridAutoFlow: "dense",
    justifyContent: "center",
  };
  const holderDiv = {
    minWidth: "100px",
    minHeight: "150px",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/categories/${lastPath}`
        );
        setCategory(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lastPath]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (category.length === 0) {
    return (
      <div className="text-center">
        <p>No Product found in {lastPathDecoded}.</p>
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
      <h2 className=" underline">
        Category / <span className="font-bold">{lastPathDecoded}</span>
      </h2>
      <div>
        <h1>Product List</h1>
        <div style={holder}>
          {category.map((product) => (
            <div key={product.id} style={holderDiv} className=" text-left">
              <Link to={`/${product.id}`}>
                <div
                  style={{
                    minWidth: "100px",
                    minHeight: "100px",
                    backgroundImage: `url('${product.imageUrl}')`,
                  }}
                ></div>
                <h1 className=" text-base font-bold">{product.name}</h1>
                <p className=" text-xm">{product.category}</p>
                <p className=" text-xm">{product.status}</p>
                <p className=" text-xm">{product.size}</p>
                <p className=" text-xm font-bold">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
