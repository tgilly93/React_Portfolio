import Container from "react-bootstrap/esm/Container";
import Description from "../components/Description";
import React from "react";


function AboutMe() {
  return (
    <Container className="text-center mt-5">
      <h1>This is an About Me Page!</h1>
      <p>This is a portfolio with Light & Dark mode.</p>
      <Description />
    </Container>
  );
}

export default AboutMe;
