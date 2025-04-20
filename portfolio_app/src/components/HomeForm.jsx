import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import RotatingText from "./RotatingText";
import { Link } from "react-router-dom";


function HomeForm() {
    const [isFlashing, setIsFlashing] = useState(false);

    useEffect(() => {
        const flashInterval = setInterval(() => {
            setIsFlashing((prev) => !prev);
        }, 1000);

        return () => clearInterval(flashInterval);
    }, []);

  return (
    <Container className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center py-3">
      <h1 className="mb-3">Welcome to my Portfolio</h1>
      <Row className="w-100 text-center mt-4 mb-3">
            <Col>
              <RotatingText
                textArray={[
                    "Learn more about me!",
                    "View my Projects!",
                    "See my achievements!",
                    "Connect with me!",
                ]}
              />
            </Col>
          </Row>
      <div className="lead">
        <Link to="/AboutMe">
        <Button
          variant="light"
          size="lg"
          className="fw-bold border-white bg-white mt-4"
          style={{ 
            boxShadow: isFlashing
                ? "0px 0px 25px rgba(255, 255, 255, 1)"
                : "0px 0px 15px rgba(255, 255, 255, 0.8)",
                transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0px 0px 30px rgba(255, 255, 255, 1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = isFlashing
                ? "0px 0px 25px rgba(255, 255, 255, 1)"
                : "0px 0px 15px rgba(255, 255, 255, 0.8)";
          }}
        >
          Let's Get Started
        </Button>
        </Link>
      </div>
    </Container>
  );
}

export default HomeForm;
