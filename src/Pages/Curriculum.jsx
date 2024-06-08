import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function Curriculum() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <h1>Curriculum vitae</h1>
      <Container>
        <div className="curriculum">
          <Card
            style={{
              width: isExpanded ? "auto" : "100%",
              maxWidth: "70rem",
              cursor: "pointer",
            }}
            onClick={handleImageClick}
          >
            <Card.Img
              src="/cv/cv-dev.webp"
              style={{
                width: "100%",
                height: "auto",
                objectFit: isExpanded ? "contain" : "cover",
              }}
            />
          </Card>
        </div>
      </Container>
    </>
  );
}
