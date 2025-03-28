import Container from "react-bootstrap/esm/Container";
import ContactForm from "../components/ContactForm";
import { Col, Row } from "react-bootstrap";

function ContactMe() {
  return (
    <Container>
    <h1 className="text-center mt-5">This is a Contact Me Page!</h1>
    <p className="text-center mt-5">This is a portfolio with Light & Dark mode.</p>
    <ContactForm />
    </Container>
  );
}

export default ContactMe;
