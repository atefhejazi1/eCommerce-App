import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogout } from "@store/auth/authSlice";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import styles from "./styles.module.css";
import { NavLink } from "react-router";
import { useEffect } from "react";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("productIds"));
    }
  }, [dispatch, accessToken]);

  return (
    <header>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <span>Our </span>
          <span className={styles.headerLogoAccent}>eCom</span>
        </div>
        <HeaderLeftBar />
      </Container>

      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        style={{ borderBottom: "3px solid var(--primary)" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto gap-1">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
              <Nav.Link as={NavLink} to="about-us">About</Nav.Link>
            </Nav>
            <Nav>
              {!accessToken ? (
                <>
                  <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                  <Nav.Link as={NavLink} to="register">Register</Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={`Welcome, ${user?.firstName}`}
                  id="user-nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="profile" end>Profile</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="profile/orders">My Orders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/" onClick={() => dispatch(authLogout())}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
