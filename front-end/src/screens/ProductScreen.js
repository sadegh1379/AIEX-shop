import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../api";

function ProductScreen() {
  const { slug } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery(["product", slug], () => getProduct(slug));

  console.log(product);

  if (isLoading) {
    return (
      <div className="text-center pt-5">
        <span>is loading...</span>
      </div>
    );
  }
  if (!isLoading && error) {
    return (
      <div className="text-center pt-5">
        <span>{error?.response?.data}</span>
      </div>
    );
  }
  return (
    <div>
      <h1>product screens test {product.name}</h1>
    </div>
  );
}

export default ProductScreen;
