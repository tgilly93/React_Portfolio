import React, { useState }from "react";
import { Carousel } from "react-bootstrap";

function PdfCarousel() {
    const pdfFiles = [
        "https://example.com/file1.pdf",
        "https://example.com/file2.pdf",
        "https://example.com/file3.pdf"
    ];

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-5">
        {pdfFiles.map((pdf, i) => (
            <Carousel.Item key={i}>
                <div className="d-flex justify-content-center">
                    <iframe
                        src={pdf}
                        width="100%"
                        height="600px"
                        title={`PDF ${i + 1}`}
                        style={{ border: "none" }}
                    />
                </div>
            </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default PdfCarousel;
