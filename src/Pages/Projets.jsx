import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Projets() {
  return (
    <>
      <h1>Projets</h1>

      <ul>
        <Card style={{ width: "50rem" }}>
          <Card.Img variant="top" src="src/assets/projets/image1.jpg" />
          <Card.Body>
            <Card.Title>Projet parcours full stack :</Card.Title>
            <Card.Text>
              <p>
                Creation d&apos;un site pour un patron de plusieurs complexes
                d&apos;excalade.
                <br />
                Pour la parti client, l&apos;utilisateur poura voir tout les
                service du complexe (restauration, coworking,loisir,detente) et
                aussi acheter un abonnement, ou reserver un cours.
              </p>{" "}
              <p>Pour voir le projet :</p>
            </Card.Text>
            <Button
              a
              href=" https://theclimbingproject.herokuapp.com/"
              variant="primary"
            >
              Click ici
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "50rem" }}>
          <Card.Img variant="top" src="src/assets/projets/image2.jpg" />
          <Card.Body>
            <Card.Title> Projet parcours dev :</Card.Title>
            <Card.Text>
              <p>
                Création d&apos;un site de blind test. Possibilité de
                s&apos;inscrire, donnant droit à un suivi de point et de nombre
                de parti jouées.{" "}
              </p>
            </Card.Text>
            <Button
              a
              href="https://musicdetective.vercel.app/"
              variant="primary"
            >
              Click ici
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "50rem" }}>
          <Card.Img variant="top" src="src/assets/projets/image3.jpg" />
          <Card.Body>
            <Card.Title> Projet perso</Card.Title>
            <Card.Text>
              <p>
                Creation d&apos;un site vitrine presentant toute les creations
                faites au crochet
              </p>
            </Card.Text>
            <Button
              a
              href="https://crochets-de-marinette.vercel.app/"
              variant="primary"
            >
              Click ici
            </Button>
          </Card.Body>
        </Card>
      </ul>
    </>
  );
}
