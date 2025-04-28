import React, { useState, useEffect } from "react";
import { Carousel, Container, Spinner } from "react-bootstrap";

function PdfCarousel() {
  const pdfFiles = [
    "pdfs/te_cert.pdf",
    "pdfs/itf_plus.pdf",
    "pdfs/fend_cert.pdf",
    "pdfs/ba_cert.pdf",
    "pdfs/data.pdf",
    "pdfs/cyber.pdf",
    "pdfs/react.pdf",
    "pdfs/backend.pdf",
    "pdfs/cloud_compute.pdf",
    "pdfs/intermediate_java.pdf",
    "pdfs/java_oop.pdf",
    "pdfs/basic_java.pdf",
    "pdfs/javascript.pdf",
    "pdfs/python.pdf",
    "pdfs/databases.pdf",
    "pdfs/swift.pdf",
    "pdfs/praise.pdf",
  ];

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-start py-5"
    >
      <h1 className="text-center mb-4">View my Achievements!</h1>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-100 px-2"
      >
        {pdfFiles.map((pdf, i) => (
          <Carousel.Item key={i}>
            <div className="iframe-wrapper">
              <iframe
                src={`${import.meta.env.BASE_URL}pdfs/${pdf.split("/").pop()}#toolbar=0`}
                title={`PDF ${i + 1}`}
                allowFullScreen
                className="responsive-iframe"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      )}

      <style>
        {`
          .iframe-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 80vh; 
          overflow: hidden;
          }
          .responsive-iframe {
          width: 100%;
          height: 100%;
          border: none;
          max-width: 100%;
          max-height: 100%;
          }

          @media (max-width: 768px) {
          .iframe-wrapper {
          height: 75vh;
          }
          }
          `}
      </style>
    </Container>
  );
}

export default PdfCarousel;
