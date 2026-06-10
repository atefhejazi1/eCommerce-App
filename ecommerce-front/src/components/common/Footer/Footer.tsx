import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className={styles.brand}>
              <span>Our</span> eCom
            </h5>
            <p className={styles.tagline}>
              Your one-stop shop for quality products at great prices.
            </p>
          </Col>

          <Col md={2} xs={6} className="mb-4 mb-md-0">
            <h6 className={styles.colTitle}>Shop</h6>
            <ul className={styles.linkList}>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-4 mb-md-0">
            <h6 className={styles.colTitle}>Account</h6>
            <ul className={styles.linkList}>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className={styles.colTitle}>About</h6>
            <ul className={styles.linkList}>
              <li><Link to="/about-us">About Us</Link></li>
            </ul>
          </Col>
        </Row>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Our eCom. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
