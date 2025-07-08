import { Row, Col, ListGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router";

const ProfileLayout = () => {
  return (
    <Row>
      <Col md={3}>
        <ListGroup as="ul">
          <ListGroup.Item as={Link} to="">
            Account Info
          </ListGroup.Item>
          <ListGroup.Item as={Link} to="orders">
            Orders
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};

export default ProfileLayout;
