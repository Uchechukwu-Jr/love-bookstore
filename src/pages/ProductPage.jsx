import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products${path}`
        );

        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [path]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (product.length === 0) {
    return <p>product not found.</p>;
  }
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <br />
      <br />
      <div>
        <img src={product.imageUrl} alt={product.name} width={100} />
      </div>
      {product.name}
    </div>
  );
};

export default ProductPage;
