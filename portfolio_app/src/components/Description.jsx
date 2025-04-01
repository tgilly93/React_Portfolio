import React, { useEffect, useState } from "react";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { fetchProfilePic as fetchProfilePicService } from "../services/githubService";
import RotatingText from "./RotatingText";
import { Link } from "react-router-dom";

function Description() {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchProfilePicAsync = async () => {
      const avatarUrl = await fetchProfilePicService();
      if (avatarUrl) {
        setProfilePic(avatarUrl);
      }
    };
    fetchProfilePicAsync();
  }, []);

  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center text-center py-3">
      <Row className="flex-lg-row-reverse g-5">
        <Col xs={10} sm={8} lg={6}>
          <Image
            src={profilePic}
            roundedCircle
            alt="Bootstrap Themes"
            fluid
            className="d-block mx-lg-auto"
            width={700}
            height={500}
            loading="lazy"
          />
        </Col>
        <Col lg={6} className="text-center">
          <Row className="w-'100 text-center mt-5 mb-3">
            <Col>
              <RotatingText
                textArray={[
                    <span style={{ color: "red", textDecoration: "line-through" }}>
                  Insulator
                  </span>,
                    <span style={{ color: "green" }}>
                  Full Stack Engineer</span>,
                ]}
              />
            </Col>
          </Row>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information. It uses
            utility classes for typography and spacing to space content out
            within the larger container.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-center">
            <Link to="/Projects">
              <Button variant="primary" size="lg" className="px-4 me-md-2">
                Continue Journey
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Description;
