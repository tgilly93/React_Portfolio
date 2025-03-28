import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent! Thank You");
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <main className="p-4 border rounded bg-white shadow">
            <h2 className="mb-4 text-center">Contact Me!</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
