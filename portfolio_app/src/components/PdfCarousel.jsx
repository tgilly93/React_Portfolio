import React, { useState, useEffect } from "react";
import { Carousel, Container, Spinner, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import { Link } from "react-router-dom";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).href;

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
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-start py-5"
    >
      <h1 className="text-center mb-4">View my Achievements!</h1>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
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
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  margin: "0 auto",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Document
                  file={`${import.meta.env.BASE_URL}${pdf}`}
                  loading={<Spinner animation="border" />}
                >
                  <Page
                    pageNumber={1}
                    width={
                      window.innerWidth > 768 ? 800 : window.innerWidth * 0.9
                    }
                  />
                </Document>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <div className="d-grid gap-2 d-md-flex justify-content-center mt-5">
            <Link to="/ContactMe">
              <Button variant="primary" size="lg" className="px-4 me-md-2 mb-4">
                Continue Journey <span className="arrow">→</span>
              </Button>
            </Link>
          </div>
    </Container>
  );
}

export default PdfCarousel;
