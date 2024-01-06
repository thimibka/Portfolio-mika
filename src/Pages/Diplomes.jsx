// import Button from "react-bootstrap/Button";

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
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/assets/diplomes/image1.jpg" />
              <Card.Body>
                <Card.Title>RNCP 5 (Développeur web)</Card.Title>
                <Card.Text>...</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/assets/diplomes/image2.jpg" />
              <Card.Body>
                <Card.Title>
                  RNCP 3 MSAMC (Monteur structure aeronautique metalique et
                  composite)
                </Card.Title>
                <Card.Text>...</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/assets/diplomes/image3.jpg" />
              <Card.Body>
                <Card.Title>
                  CQPM (certificat de qualification paritaire de la metallurgie)
                </Card.Title>
                <Card.Text>...</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/assets/diplomes/image4.jpg" />
              <Card.Body>
                <Card.Title> BEP ELECTROTECHNIQUE</Card.Title>
                <Card.Text>...</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/assets/diplomes/image5.jpg" />
              <Card.Body>
                <Card.Title>BREVET INFORMATIQUE NIVEAU 1 ET 2</Card.Title>
                <Card.Text>...</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/assets/diplomes/image6.jpg" />
              <Card.Body>
                <Card.Title>BREVET DES COLLÈGES</Card.Title>
                <Card.Text>...</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
