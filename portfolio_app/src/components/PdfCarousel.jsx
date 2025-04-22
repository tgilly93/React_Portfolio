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
              className="pdf-wrapper">

              <iframe
                src={`${import.meta.env.BASE_URL}${pdf}#toolbar=0`}
                title={`PDF ${i + 1}`}
                allowFullScreen
                className="pdf-frame"
                />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <style>
        {`
          .pdf-wrapper {
          position: relative;
          width: 100%;
          padding-top: 56.25%; 
          overflow: hidden;
          }
          .pdf-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
          
          @media (max-width: 768px) {
          .pdf-wrapper iframe {
          padding-top: 75%;
          }
          .pdf-frame {
          width: 117.6%;
          height: 117.6%;
          transform: scale(0.85);
          transform-origin: top left;
          }
          body {
          overflow-x: hidden;
          }
          }
          `}
      </style>
    </Container>
  );
}

export default PdfCarousel;
