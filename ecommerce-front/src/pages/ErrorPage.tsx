// src/pages/ErrorPage.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found !!";
  }
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="text-center">
        <Col>
          <h1 className="display-1 fw-bold text-danger"> {errorStatus}</h1>
          <h2 className="mb-4">{errorStatusText}</h2>
          <Link to="/" replace={true}>
            <Button variant="primary">Back to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;
