import { useQuery } from "@tanstack/react-query";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet-async";
import { getProducts } from "../api";
import LoadingBox from "../components/LoadingBox";
import Product from "../components/Product";

function HomeScreen() {
  const { data, isLoading } = useQuery(["products"], getProducts);

  return (
    <div>
      <Helmet>
        <title>AIEX shop</title>
      </Helmet>
      <h2 className="text-dark my-2">Featured products</h2>
      <div className="products">
        <Row className="px-4">
          {isLoading && <LoadingBox />}
          {!isLoading &&
            data.map((product, i) => <Product key={i} product={product} />)}
        </Row>
      </div>
    </div>
  );
}

export default HomeScreen;
