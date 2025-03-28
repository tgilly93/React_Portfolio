import { Container, Col } from "react-bootstrap";
import React from "react";

function Footer() {
  return (
    <footer className="fixed-bottom py-3 border-top">
        <Container>
            <Col className="text-center text-body-secondary">
            © 2025 Terry Gilmore Jr. | All Rights Reserved.
            </Col>
        </Container>
    </footer>
  );
}

export default Footer;
