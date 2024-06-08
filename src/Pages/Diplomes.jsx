import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Diplomes() {
  return (
    <>
      <h1>Diplômes</h1>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="/diplomes/image1.jpg" />
              <Card.Body>
                <Card.Title>RNCP 5 (Développeur web)</Card.Title>
                <Card.Text>2023</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="/diplomes/image2.jpg" />
              <Card.Body>
                <Card.Title>
                  RNCP 3 MSAMC (Monteur structure aéronautique métallique et
                  composite)
                </Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="/diplomes/image3.jpg" />
              <Card.Body>
                <Card.Title>
                  CQPM (Certificat de qualification paritaire de la métallurgie)
                </Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="/diplomes/image4.jpg" />
              <Card.Body>
                <Card.Title> BEP ELECTROTECHNIQUE</Card.Title>
                <Card.Text>2005</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="/diplomes/image5.jpg" />
              <Card.Body>
                <Card.Title>BREVET INFORMATIQUE NIVEAU 1 ET 2</Card.Title>
                <Card.Text>2002</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/diplomes/image6.jpg" />
              <Card.Body>
                <Card.Title>BREVET DES COLLÈGES</Card.Title>
                <Card.Text>2002</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
