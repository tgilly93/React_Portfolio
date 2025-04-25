import React, { useEffect, useState } from "react";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { fetchProfilePic as fetchProfilePicService } from "../services/githubService";
import { Link } from "react-router-dom";
import RotatingDisappearText from "./RotatingDisappearText";
import "../styles/TextAnimation.css";

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
          <Row className="w-100 text-center mt-5 mb-3">
            <Col>
              <RotatingDisappearText
                className="rotating-text-container"
                textArray={[
                  <span
                    style={{ color: "red", textDecoration: "line-through" }}
                  >
                    Insulator
                  </span>,
                  <span style={{ color: "green" }}>Full Stack Engineer</span>,
                ]}
              />
            </Col>
          </Row>
          <div className="lead text-start">
            <p>
              <strong>Hey, I’m Terry Gilmore</strong>—Full Stack Engineer and
              lifelong learner.
            </p>

            <p>
              Growing up, I excelled{" "}
              <strong>
                academically, musically, and in competitive sports
              </strong>
              . Music opened doors to extraordinary experiences, allowing me to{" "}
              <strong>travel the world</strong> as a child. I attended{" "}
              <strong>Avon Old Farms</strong>, a prestigious prep school, before
              studying <strong>Business at Rutgers University</strong>. However,
              a major <strong>eye surgery</strong> forced me to leave school
              permanently to focus on recovery.
            </p>

            <p>
              After healing, I built my career across diverse
              industries—starting in{" "}
              <strong>retail and customer service </strong>
              before transitioning into <strong>construction</strong>, following
              in my father’s footsteps. As an <strong>insulator</strong>, I
              thrived in fast-paced, mentally and physically demanding
              environments, consistently <strong>exceeding deadlines</strong>{" "}
              and supporting my team. This experience sharpened my{" "}
              <strong>
                problem-solving skills, adaptability, and work ethic
              </strong>
              .
            </p>

            <p>
              Now, I’m channeling my passion for{" "}
              <strong>technology and innovation</strong> into a career as a{" "}
              <strong>Full Stack Engineer</strong>. I’ve always been fascinated
              by the power of computer programming to solve real-world problems.
            </p>
            <p>
              After completing{" "}
              <strong>
                Tech Elevator's Java Full-Stack Web Development Bootcamp
              </strong>{" "}
              and <strong>Udacity's Front-End Web Development Bootcamp</strong>,
              along with countless hours of self-study and online courses, I am
              proud to showcase my journey and everything I have learned so far!
            </p>

            <p>
              I <strong>thrive on continuous learning and improvement</strong>,
              always seeking ways to refine my skills and stay ahead in the
              ever-evolving tech landscape. My journey has taught me to{" "}
              <strong>work smarter, not harder</strong>, ensuring that I excel
              in my career while maintaining a fulfilling life beyond work.
            </p>

            <p>
              I’m excited to bring my{" "}
              <strong>
                resilience, problem-solving mindset, and passion for development
              </strong>{" "}
              to my next opportunity!
            </p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-center mt-5">
            <Link to="/Projects">
              <Button variant="primary" size="lg" className="px-4 me-md-2 mb-4">
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
