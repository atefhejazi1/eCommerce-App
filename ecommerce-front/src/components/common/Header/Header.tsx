import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HeaderBasket } from "../../ecommerce";
import styles from "./styles.module.css";
import { Link } from "react-router";
const { headerContainer, headerLogo } = styles;
function Header() {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg="info">Ecommerce</Badge>
        </h1>
        <HeaderBasket />
      </div>

      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/categories"}>
                Categories
              </Nav.Link>
              <Nav.Link as={Link} to={"/about-us"}>
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to={"/register"}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
