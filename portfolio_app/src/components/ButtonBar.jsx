import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa6";

function ButtonBar() {
    return (
        <Container
        className="position-fixed top-50 start-0 translate-middle-y d-flex align-items-center flex-column gap-3 p-3"
        style={{ width: "60px", borderRadius: "5px" }}
        >
            <Button
            variant="dark"
            href="https://www.linkedin.com/in/terrygilmorefullstackengineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex justify-content-center align-items-center"
            style={{ width: "50px", height: "50px "}} 
            >
                <FaLinkedin size={24} />
            </Button>

            <Button
            variant="dark"
            href="https://github.com/tgilly93"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex justify-content-center align-items-center"
            style={{ width: "50px", height: "50px" }} >
                <FaGithubAlt size={24} />
            </Button>
        </Container>
    );
};

export default ButtonBar;