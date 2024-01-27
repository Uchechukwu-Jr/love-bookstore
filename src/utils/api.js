import axios from "axios";

export function fetchProducts() {
  return axios
    .get("http://localhost:3000/products")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.message);
    });
}

export function fetchProductById(productId) {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  return axios
    .get(`http://localhost:3000/product/${productId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        `Error fetching product with ID ${productId}:`,
        error.message
      );
      // Handle error in your preferred way (e.g., return null, throw)
    });
}
