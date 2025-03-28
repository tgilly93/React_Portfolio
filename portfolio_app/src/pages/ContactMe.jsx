import Container from "react-bootstrap/esm/Container";
import ContactForm from "../components/ContactForm";

function ContactMe() {
  return (
    <Container className="text-center mt-5">
      <h1>This is a Contact Me Page!</h1>
      <p>This is a portfolio with Light & Dark mode.</p>
      <ContactForm />
    </Container>
  );
}

export default ContactMe;
