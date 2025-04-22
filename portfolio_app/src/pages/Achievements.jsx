import React from "react";
import PdfCarousel from "../components/PdfCarousel";
import { Container } from "react-bootstrap";

function Achievements() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="flex-grow-1 d-flex flex-column justify-content-center">
        <PdfCarousel />
      </Container>
    </div>
  );
}

export default Achievements;
