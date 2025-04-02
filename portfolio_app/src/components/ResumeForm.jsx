import React from "react";
import { Container, Button } from "react-bootstrap";

const ResumeForm = () => {
    const resumeUrl = "/Terry_Gilmore_SWE_Resume.pdf";

    return (
        <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh", paddingBottom: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
            <iframe
            src={`${import.meta.env.BASE_URL}Terry_Gilmore_SWE_Resume.pdf#toolbar=0`}
            width="90%"
            height="90vh"
            title="Resume PDF"
            style={{ border: "none", borderRadius: "8px", flexGrow: 1}}
            ></iframe>

            <Button
            variant="primary"
            href={resumeUrl}
            download="Terry_Gilmore_SWE_Resume.pdf"
            className="mt-4 mb-4"
            >
                Download Resume
            </Button>
        </Container>
    );
};

export default ResumeForm;