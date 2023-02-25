import axios from "axios";

export async function getProducts() {
  const result = await axios.get("/api/products");
  return result?.data;
}

export async function getProduct(slug) {
  // const result = await axios.get('/api/products');
  const result = await axios.get(`/api/products/slug/${slug}`);
  return result?.data;
}
