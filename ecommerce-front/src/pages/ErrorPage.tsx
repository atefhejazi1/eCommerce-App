import { LottieHandler } from "@components/feedback";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="text-center">
        <Col>
          <LottieHandler type="notFound" />
          <Link to="/" replace={true}>
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;
