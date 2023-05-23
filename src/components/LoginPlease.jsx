import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

const LoginPlease = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h3>Login Please..!</h3>
            <Link to="/" className="btn btn-dark my-3">
              Go Back
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPlease;
