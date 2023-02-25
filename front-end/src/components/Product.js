import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StarRatings from "react-star-ratings";

function Product({ product }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className="product">
        <Link to={`/product/${product.slug}`}>
          <img
            className="card-img-top"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <Card.Body>
          <div className="product-info">
            <Link to={`/product/${product.slug}`}>
              <Card.Title>
                <small>{product.name}</small>
              </Card.Title>
            </Link>
            <Card.Text>${product.price}</Card.Text>
            <Card.Text>
            <StarRatings
              rating={product.rating}
              starDimension="20px"
              starSpacing="3px"
              starRatedColor="#ffc107"
              />
              </Card.Text>
            <Button className="w-100 btn btn-warning">add to card</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
