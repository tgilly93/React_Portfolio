import ContactForm from "../components/ContactForm";
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";
import DisappearText from "../components/DisappearText";;

function ContactMe() {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    "Let's Connect!",
    "Please feel free to reach out with any questions!",
    "Can't wait to hear from you!",
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
    </Container>
  );
}

export default ContactMe;
