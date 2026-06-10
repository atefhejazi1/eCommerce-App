import { Container } from "react-bootstrap";
import { Header, Footer } from "@components/common";
import styles from "./styles.module.css";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Container className={styles.wrapper}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default MainLayout;
