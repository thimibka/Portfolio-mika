import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Projets() {
  return (
    <>
      <h1>Projets</h1>
      <div className="projets">
        <Row xs={1} sm={2} md={3} lg={3} xl={3}>
          {/* <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/projets/image1.jpg" />
              <Card.Body>
                <Card.Title>Projet parcours full stack :</Card.Title>
                <Card.Text>
                  <p>
                    Creation d&apos;un site pour un patron de plusieurs
                    complexes d&apos;excalade.
                    <br />
                    Pour la partie client, l&apos;utilisateur pourra voir tout
                    les services du complexe (restauration, coworking, loisir,
                    détente) et aussi acheter un abonnement ou réserver un
                    cours.
                  </p>{" "}
                  <p>Pour voir le projet :</p>
                </Card.Text>
                <Button
                  href="https://theclimbingproject.herokuapp.com/"
                  variant="primary"
                >
                  Click ici
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/projets/image2.jpg" />
              <Card.Body>
                <Card.Title> Projet parcours dev :</Card.Title>
                <Card.Text>
                  <p>
                    Création d&apos;un site de blind test. Possibilité de
                    s&apos;inscrire, donnant droit à un suivi de points et de
                    nombre de parties jouées.{" "}
                  </p>
                </Card.Text>
                <Button
                  href="https://musicdetective.vercel.app/"
                  variant="primary"
                >
                  Click ici
                </Button>
              </Card.Body>
            </Card>
          </Col> */}

          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/projets/image3.jpg" />
              <Card.Body>
                <Card.Title> Projet perso</Card.Title>
                <Card.Text>
                  <p>
                    Création d&apos;un site vitrine présentant toutes les
                    réalisations faites au crochet
                  </p>
                </Card.Text>
                <Button
                  href="https://crochets-de-marinette.vercel.app/"
                  variant="primary"
                >
                  Click ici
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/projets/image4.jpg" />
              <Card.Body>
                <Card.Title> Projet perso</Card.Title>
                <Card.Text>
                  <p>
                    Création d&apos;un site de recherche de jeu video, avec
                    description de celui ci
                  </p>
                </Card.Text>
                <Button href="https://findgame.vercel.app/" variant="primary">
                  Click ici
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/projets/image5.jpg" />
              <Card.Body>
                <Card.Title> Projet perso</Card.Title>
                <Card.Text>
                  <p>Création d&apos;un site de recherche de films</p>
                </Card.Text>
                <Button href="https://searchfilm.vercel.app/" variant="primary">
                  Click ici
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
