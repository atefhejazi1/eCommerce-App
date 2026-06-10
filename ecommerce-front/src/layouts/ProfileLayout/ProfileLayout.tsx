import { Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router";
import styles from "./styles.module.css";

const ProfileLayout = () => {
  return (
    <Row className="g-4">
      <Col md={3}>
        <nav className={styles.sidebar}>
          <p className={styles.sidebarLabel}>My Account</p>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `${styles.sidebarLink} ${isActive ? styles.active : ""}`
            }
          >
            👤 Account Info
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              `${styles.sidebarLink} ${isActive ? styles.active : ""}`
            }
          >
            📦 My Orders
          </NavLink>
        </nav>
      </Col>
      <Col md={9}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default ProfileLayout;
