import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import { AiTwotoneDelete } from 'react-icons/ai';

function CartScreen() {
  const { cart } = useSelector(state => state.app);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <Row className="mt-4">
        <Col md={8}>
          <ListGroup variant="flush">
               {cart.cartItems?.map(item => (
                    <ListGroup.Item key={item._id}>
                         <Row className="d-flex align-items-center justify-content-center text-center">
                              <Col md={4}>
                                   <img className="img-fulid img-thumbnail rounded me-2" src={item.image} alt={item.name} />{' '}
                                   <Link to={`/product/${item.slug}`}>{item.name}</Link>
                              </Col>
                              <Col md={3}>
                                   <Button disabled={item.quntity === 1} variant="light"><FiMinusCircle/></Button>
                                   <strong className="mx-2">{item.quntity}</strong>
                                   <Button disabled={item.quntity === item.countInStock} variant="light"><FiPlusCircle/></Button>
                              </Col>
                              <Col md={3}>&{item.price}</Col>
                              <Col md={2}>
                                   <Button variant="light"><AiTwotoneDelete /></Button>
                              </Col>
                         </Row>
                    </ListGroup.Item>
               ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
               <Card.Body>
                    <ListGroup>
                         <ListGroup.Item>
                              Total Price ({cart.cartItems.reduce((a, c) => a + c.quntity, 0)} items)
                              : ${cart.cartItems.reduce((a, c) => a + c.quntity * c.price, 0)}
                         </ListGroup.Item>
                         <ListGroup.Item>
                              <Button className="w-100" type="button" variant="warning">
                                   Proceed to checkout
                              </Button>
                         </ListGroup.Item>
                    </ListGroup>
               </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartScreen;
