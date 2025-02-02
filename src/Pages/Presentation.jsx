import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <>
      <h1>Présentation</h1>
      <div className="presentation">
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src="/moi.webp" />
          <Card.Body>
            <Card.Title>GERVAIS Mickael</Card.Title>
            <Card.Text>
              <p>
                Salut à tous ! Je suis Mickael, un jeune développeur.
                <br />
                J&apos;ai récemment plongé dans le monde du numérique et plus
                précisément du développement web avec ma formation qui m&apos;a
                permis d&apos; aborder plusieurs langages de programmation, tels
                que Html, Css, Ruby on Rails, JavaScript, React.js.
                <br />
              </p>
              🌐 Où me trouver :<br />
              GITHUB : <a href="https://github.com/thimibka">ici</a>
              <br />
              LINKEDIN :{" "}
              <a href="https://www.linkedin.com/in/gervais-mickael-thimibka">
                ici
              </a>
              <br />
              EMAIL : <a href="mailto:fseetp@gmail.com">Contactez-moi !</a>
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
