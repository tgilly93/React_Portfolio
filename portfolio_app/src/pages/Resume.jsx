import Container from "react-bootstrap/esm/Container";
import React from "react";
import ResumeForm from "../components/ResumeForm";

function Resume() {
  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">View my Resume!</h1>
      
      <ResumeForm />
      
    </Container>
  );
}

export default Resume;
