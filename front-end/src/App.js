import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import CartScreen from "./screens/CartScreen";

function App() {
  const { cart } = useSelector((state) => state.app);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>AIEX</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link className="nav-link" to="/cart">
                  cart
                  {cart.cartItems.length > 0 && (
                    <Badge bg="danger" pill>{cart.cartItems.reduce((a, c) => a + c.quntity, 0)}</Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center py-2">
          <small>
            All rights reserved @{new Date().getFullYear()} - powered by{" "}
            <a href="https://sadegh-akbari.vercel.app/">sadegh akbari</a>
          </small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
