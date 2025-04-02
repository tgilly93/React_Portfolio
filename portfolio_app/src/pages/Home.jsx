import Container from "react-bootstrap/esm/Container";
import React from "react";
import HomeForm from "../components/HomeForm";

function Home() {
  return (
    <Container className="text-center mt-5">
      <HomeForm />
    </Container>
  );
}

export default Home;
