import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Projets() {
  return (
    <>
      <h1>Projets</h1>

      <Container>
        <Row className="justify-content-center">
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
                src="/projets/image3.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  Projet perso
                </Card.Title>
                <Card.Text>
                  <p>
                    Création d&apos;un site vitrine présentant toutes les
                    réalisations faites au crochet
                  </p>
                </Card.Text>
                <Button
                  style={{ color: "rgb(131, 210, 241)" }}
                  href="https://crochets-de-marinette.vercel.app/"
                >
                  Click ici
                </Button>
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
                src="/projets/image4.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  Projet perso
                </Card.Title>
                <Card.Text>
                  <p>
                    Création d&apos;un site de recherche de jeu vidéo, avec
                    description de celui-ci
                  </p>
                </Card.Text>
                <Button
                  style={{ color: "rgb(131, 210, 241)" }}
                  href="https://findgame.vercel.app/"
                >
                  Click ici
                </Button>
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
                src="/projets/image5.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  Projet perso
                </Card.Title>
                <Card.Text>
                  <p>Création d&apos;un site de recherche de films</p>
                </Card.Text>
                <Button
                  style={{ color: "rgb(131, 210, 241)" }}
                  href="https://searchfilm.vercel.app/"
                >
                  Click ici
                </Button>
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
                src="/projets/image6.jpg"
                style={{
                  height: "200px", // Hauteur fixe pour toutes les images
                  objectFit: "cover", // Remplit l'espace sans déformer l'image
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
                  Projet perso
                </Card.Title>
                <Card.Text>
                  <p>Création d&apos;un blind-test</p>
                </Card.Text>
                <Button
                  style={{ color: "rgb(131, 210, 241)" }}
                  href="https://culture-sound.vercel.app/"
                >
                  Click ici
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}