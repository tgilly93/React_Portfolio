import React from "react";
import { Button } from "react-bootstrap";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa6";

function ButtonBar() {
    return (
        <div className="d-flex justify-content-center gap-3 mt-4 mb-0">
            <Button
            variant="link"
            href="https://www.linkedin.com/in/terrygilmorefullstackengineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex justify-content-center align-items-center"
            style={{ width: "50px", height: "50px "}} 
            >
                <FaLinkedin size={24} />
            </Button>

            <Button
            variant="link"
            href="https://github.com/tgilly93"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex justify-content-center align-items-center"
            style={{ width: "50px", height: "50px" }} >
                <FaGithubAlt size={24} />
            </Button>
        </div>
    );
};

export default ButtonBar;