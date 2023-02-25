import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getProducts } from "../api";

function HomeScreen() {

  const { data, isLoading } = useQuery(['products'], getProducts);

  console.log(data);

  if (isLoading) return null;

  return (
    <div>
      <h2>Featured products</h2>
      <div className="products">
        {data.map((product, i) => (
          <div key={i} className="product">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>{product.price}</p>
              <button>add to card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
