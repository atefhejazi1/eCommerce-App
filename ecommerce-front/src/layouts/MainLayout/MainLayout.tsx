import { Container } from "react-bootstrap";
import { Header, Footer } from "@components/common";

import styles from "./styles.module.css";
import { Outlet } from "react-router";

const { container, wrapper } = styles;
function MainLayout() {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}

export default MainLayout;
