import ContactForm from "../components/ContactForm";
import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonBar from "../components/ButtonBar";
import RotatingDisappearText from "../components/RotatingDisappearText";
import "../styles/TextAnimation.css";

function ContactMe() {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
    >
      <Row className="w-100 text-center mt-5 mb-3">
        <Col>
          <div className="rotating-text-container">
            <RotatingDisappearText
              textArray={[
                "LinkedIn? Let's Connect!",
                "View my work on GitHub!",
                "Feel free to drop a message!",
              ]}
            />
          </div>
        </Col>
      </Row>
      <ContactForm />
      <ButtonBar />
      <div className="d-grid gap-2 d-md-flex justify-content-center mt-5">
            <Link to="/">
              <Button variant="primary" size="lg" className="px-4 me-md-2 mb-4">
                Return Home <span className="arrow">→</span>
              </Button>
            </Link>
          </div>
    </Container>
  );
}

export default ContactMe;
