import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

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
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-start py-5"
    >
      <h1 className="text-center mb-4">View my Achievements!</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-100 px-3"
      >
        {pdfFiles.map((pdf, i) => (
          <Carousel.Item key={i}>
            <div
              className="w-100"
              style={{
                position: "relative",
                paddingTop: "56.25%", 
                overflow: "hidden",
              }}
              >

              <iframe
                src={`${import.meta.env.BASE_URL}${pdf}#toolbar=0`}
                title={`PDF ${i + 1}`}
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  border: "none",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default PdfCarousel;
