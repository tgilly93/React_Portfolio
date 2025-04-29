import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).href;

const ResumeForm = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Terry_Gilmore_SWE_Resume.pdf`;
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>Loading Resume...</p>}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={window.innerWidth > 768 ? 800 : window.innerWidth * 0.9}
            />
          ))}
        </Document>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-3 mb-4">
        <Button
          variant="primary"
          href={resumeUrl}
          download="Terry_Gilmore_SWE_Resume.pdf"
          size="lg"
        >
          Download Resume
        </Button>

        <Link to="/Achievements">
          <Button variant="primary" size="lg">
            Continue Journey <span className="arrow">→</span>
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default ResumeForm;
