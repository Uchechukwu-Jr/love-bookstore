import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
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

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <div style={holder}>
        {products.map((product) => (
          <div
            key={product.id}
            style={holderDiv}
            className=" bg-slate-200 rounded shadow-md p-2 text-left"
          >
            <Link to={product.id}>
              <div
                style={{
                  minWidth: "100px",
                  minHeight: "100px",
                  backgroundImage: `url('${product.imageUrl}')`,
                }}
              ></div>
              <h1 className=" text-base font-bold">{product.name}</h1>
              <p className=" text-xm">{product.category}</p>
              <p className=" text-xm">{product.size}</p>
              <p className=" text-xm font-bold">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
