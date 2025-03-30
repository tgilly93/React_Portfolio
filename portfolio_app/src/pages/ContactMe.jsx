import ContactForm from "../components/ContactForm";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ButtonBar from "../components/ButtonBar";
import RotatingText from "../components/RotatingText";

function ContactMe() {
  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Row className="w-100 text-center mt-5 mb-3">
        <Col>
          <RotatingText
          textArray={[
            "LinkedIn? Let's Connect!",
            "View my work on GitHub!",
            "Feel free to drop a message!",
          ]}
          />
        </Col>
      </Row>
      <ContactForm />
      <ButtonBar />
    </Container>
  );
}

export default ContactMe;
