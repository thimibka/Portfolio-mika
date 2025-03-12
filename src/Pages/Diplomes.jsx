import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Diplomes() {
  return (
    <>
      <h1>Diplômes</h1>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4} className="mt-4 mb-4">
            <Card
              style={{
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgb(131, 210, 241)",
                height: "100%",
                 // Assure que toutes les cartes ont la même hauteur
              }}
            >
              <Card.Img
                variant="top"
                src="/diplomes/image1.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />

              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)", }}>
                  RNCP 5 (Développeur web)
                </Card.Title>
                <Card.Text>2023</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="mt-4 mb-4">
            <Card
              style={{
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgb(131, 210, 241)",
                height: "100%", // Assure que toutes les cartes ont la même hauteur
              }}
            >
              <Card.Img
                variant="top"
                src="/diplomes/image2.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />

              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  RNCP 3 MSAMC (Monteur structure aéronautique métallique et
                  composite)
                </Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} className="mt-4 mb-4">
            <Card
              style={{
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgb(131, 210, 241)",
                height: "100%", // Assure que toutes les cartes ont la même hauteur
              }}
            >
              <Card.Img
                variant="top"
                src="/diplomes/image3.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />

              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  CQPM (Certificat de qualification paritaire de la métallurgie)
                </Card.Title>
                <Card.Text>2019</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8} md={6} lg={4} className="mt-4 mb-4">
            <Card
              style={{
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgb(131, 210, 241)",
                height: "100%", // Assure que toutes les cartes ont la même hauteur
              }}
            >
              <Card.Img
                variant="top"
                src="/diplomes/image4.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />

              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  {" "}
                  BEP ELECTROTECHNIQUE
                </Card.Title>
                <Card.Text>2005</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="mt-4 mb-4">
            <Card
              style={{
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgb(131, 210, 241)",
                height: "100%", // Assure que toutes les cartes ont la même hauteur
              }}
            >
              <Card.Img
                variant="top"
                src="/diplomes/image5.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />

              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  BREVET INFORMATIQUE NIVEAU 1 ET 2
                </Card.Title>
                <Card.Text>2002</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} className="mt-4 mb-4">
            <Card
              style={{
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgb(131, 210, 241)",
                height: "100%", // Assure que toutes les cartes ont la même hauteur
              }}
            >
              <Card.Img
                variant="top"
                src="/diplomes/image6.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />

              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  BREVET DES COLLÈGES
                </Card.Title>
                <Card.Text>2002</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
