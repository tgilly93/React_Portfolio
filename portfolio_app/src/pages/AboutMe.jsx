import Container from "react-bootstrap/esm/Container";
import Description from "../components/Description";
import React from "react";


function AboutMe() {
  return (
    <Container className="text-center mt-5">
      <h1>A Glimpse Into My Journey</h1>
      <Description />
    </Container>
  );
}

export default AboutMe;
