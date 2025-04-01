import React from "react";
import { Button, Container, Image, Row, Col } from "react-bootstrap";

function Description() {
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center text-center py-3">
        <Row className="flex-lg-row-reverse g-5">
            <Col xs={10} sm={8} lg={6} >
            <Image
            src="bootsrap-themes.png"
            alt="Bootstrap Themes"
            fluid
            className="d-block mx-lg-auto"
            width={700}
            height={500}
            loading="lazy"
            />
            </Col>
            <Col lg={6} className="text-center">
            <h1 className="display-5 fw-bold text-body-emphasis 1h-1 mb-3">
                Responsive left-aligned hero with image
            </h1>
            <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                It uses utility classes for typography and spacing to space content out within the larger container.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
                <Button variant="primary" size="lg" className="px-4 me-md-2">
                Primary button
                </Button>
            </div>
            </Col>
        </Row>
        </Container>
  );
}

export default Description;
