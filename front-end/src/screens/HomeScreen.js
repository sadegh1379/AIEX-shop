import { useQuery } from "@tanstack/react-query";
import Row from "react-bootstrap/Row";
import { getProducts } from "../api";
import Product from "../components/Product";

function HomeScreen() {
  const { data, isLoading } = useQuery(["products"], getProducts);

  return (
    <div>
      <h2 className="text-dark my-2">Featured products</h2>
      <div className="products">
        <Row className="px-4">
          {isLoading && <span>loading...</span>}
          {!isLoading &&
            data.map((product, i) => <Product key={i} product={product} />)}
        </Row>
      </div>
    </div>
  );
}

export default HomeScreen;
