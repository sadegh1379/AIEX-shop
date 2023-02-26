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
import { Helmet } from "react-helmet-async";
import { getError } from "../helper";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/app.slice";
import axios from "axios";

function ProductScreen() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.app);
  console.log(cart);
  const { slug } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery(["product", slug], () => getProduct(slug));

  const addToCartHandler = async () => {
     const exsist = cart.cartItems.find(item => item._id === product._id);
     const quntity = exsist ? exsist.quntity + 1 : 1;
     const { data } = await axios.get(`/api/products/${product._id}`);
     if(+data.countInStock < quntity){
          window.alert('Sorry, product quantity is out of stock')
          return
     }
    dispatch(addToCart({ ...product, quntity }));
  };

  if (isLoading) return <LoadingBox />;
  if (!isLoading && error) {
    return (
      <div className="text-center pt-5">
        <MessageBox variant={"danger"} text={getError(error)} />
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
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
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
                  <Button
                    onClick={addToCartHandler}
                    className="w-100 btn btn-warning"
                  >
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
