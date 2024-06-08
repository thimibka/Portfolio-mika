import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function Curriculum() {
  return (
    <>
      <h1>Curriculum vitae</h1>
      <Container>
        <div className="curriculum">
          <Card style={{ width: "70rem" }}>
            <Card.Img src="/cv/cv-dev.webp" />
          </Card>
        </div>
      </Container>
    </>
  );
}
