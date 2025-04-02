import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

function PdfCarousel() {
  const pdfFiles = [
    "/pdfs/TE_Cert.pdf",
    "/pdfs/ITF+.pdf",
    "/pdfs/FEND_Cert.pdf",
    "/pdfs/BA_Cert.pdf",
    "/pdfs/Data.pdf",
    "/pdfs/Cyber.pdf",
    "/pdfs/React.pdf",
    "/pdfs/Backend.pdf",
    "/pdfs/Cloud_Compute.pdf",
    "/pdfs/Intermediate_Java.pdf",
    "/pdfs/Java_OOP.pdf",
    "/pdfs/Basic_Java.pdf",
    "/pdfs/JavaScript.pdf",
    "/pdfs/Python.pdf",
    "/pdfs/Databases.pdf",
    "/pdfs/Swift.pdf",
    "/pdfs/Praisee.pdf",
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
                src={`{import.meta.env.BASE_URL}${pdf}#toolbar=0`}
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
