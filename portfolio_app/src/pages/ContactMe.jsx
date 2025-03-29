import ContactForm from "../components/ContactForm";
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";
import DisappearText from "../components/DisappearText";
import ButtonBar from "../components/ButtonBar";

function ContactMe() {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    "LinkedIn? Let's Connect!",
    "View my work on GitHub!",
    "Feel free to drop a message!",
  ];

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(textChangeInterval);
  }, []);


  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Row className="w-100 text-center mt-5 mb-3">
        <Col>
          <AnimatePresence mode="wait">
            <DisappearText key={textArray[textIndex]} text={textArray[textIndex]} />
          </AnimatePresence>
        </Col>
      </Row>
      <ContactForm />
      <ButtonBar />
    </Container>
  );
}

export default ContactMe;
