import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../api";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import StarRatings from "react-star-ratings";

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
    <Row>
      <Col md={6}>
        <img className="img-large" src={product.image} alt={product.name} />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h2>{product.name}</h2>
          </ListGroup.Item>
          <ListGroup.Item>price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>
            Rating:{" "}
            <StarRatings
              rating={product.rating}
              starDimension="20px"
              starRatedColor="#ffc107"
              starSpacing="0px"
            />
          </ListGroup.Item>
          <ListGroup.Item>description: {product.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                status:{" "}
                {product.countInStock > 0 ? (
                  <Badge bg="success">In stock</Badge>
                ) : (
                  <Badge bg="danger">Unavailable</Badge>
                )}
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                    <Button className="w-100 btn btn-warning">
                      add to card
                    </Button>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ProductScreen;
