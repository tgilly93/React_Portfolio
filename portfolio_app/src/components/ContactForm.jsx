import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_USER_ID
        )

        .then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
                alert("Message sent successfully!");

                form.current.reset();
                
            },
            (error) => {
                console.log(error.text);
                
            }
        );
    };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <main className="p-4 border rounded bg-white shadow">
            <h2 className="mb-4 text-center">Contact Me!</h2>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type="email"
                name="user_email"
                placeholder="name@example.com" 
                required 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                as="textarea" 
                name="message"
                rows={4} 
                placeholder="Enter your message" 
                required 
                />
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
