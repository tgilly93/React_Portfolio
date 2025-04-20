import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

function PdfCarousel() {
  const pdfFiles = [
    "/pdfs/te_cert.pdf",
    "/pdfs/itf_plus.pdf",
    "/pdfs/fend_cert.pdf",
    "/pdfs/ba_cert.pdf",
    "/pdfs/data.pdf",
    "/pdfs/cyber.pdf",
    "/pdfs/react.pdf",
    "/pdfs/backend.pdf",
    "/pdfs/cloud_compute.pdf",
    "/pdfs/intermediate_java.pdf",
    "/pdfs/java_oop.pdf",
    "/pdfs/basic_java.pdf",
    "/pdfs/javascript.pdf",
    "/pdfs/python.pdf",
    "/pdfs/databases.pdf",
    "/pdfs/swift.pdf",
    "/pdfs/praise.pdf",
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "4rem",
        paddingBottom: "5rem",
       }}
    >
        <h1 className="text-center mt-4 mb-4">View my Achievements!</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ width: "80%", height: "90vh" }}
      >
        {pdfFiles.map((pdf, i) => (
          <Carousel.Item key={i}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <iframe
                src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}${pdf}#toolbar=0`}
                width="100%"
                height="90%"
                title={`PDF ${i + 1}`}
                style={{ border: "none", display: "block", margin: "auto", textAlign: "center", backgroundColor: "#fff" }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default PdfCarousel;
