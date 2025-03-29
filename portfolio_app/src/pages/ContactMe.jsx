import ContactForm from "../components/ContactForm";
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

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

  const disintegrationVariants = {
    hidden: {opacity: 0, y: 20, filter: "blur(10px)", scale: 1.1 },
    visible: {opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
    exit: {opacity: 0, y: -20, filter: "blur(10px)", scale: 0.9 }
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Row className="w-100 text-center mt-5 mb-3">
        <Col>
          <AnimatePresence mode="wait">
          <motion.h1
            key={textIndex}
            variants={disintegrationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8 }}
          >
            {textArray[textIndex]}
          </motion.h1>
          </AnimatePresence>
        </Col>
      </Row>
      <ContactForm />
    </Container>
  );
}

export default ContactMe;
