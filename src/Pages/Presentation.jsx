import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <>
      <h1>Presentation</h1>
      <div className="presentation">
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src="src/assets/moi.webp" />
          <Card.Body>
            <Card.Title>GERVAIS Mickael</Card.Title>
            <Card.Text>
              <p>
                Salut à tous ! Je suis Mickael, un jeune développeur.
                <br />
                J&apos;ai récemment plongé dans le monde du numerique et plus
                precisement du développement web avec ma formation qui m&apos;a
                permis d&apos; aborder plusieurs langages de programmation, tel
                que Html, Css, Ruby on Rails, JavaScript, React.js.
                <br />
                Mon objectif est de contribuer à des projets innovants et de
                résoudre des problèmes complexes en utilisant mes compétences en
                développement. J&apos;apprécie particulièrement la collaboration
                avec d&apos;autres passionnés pour créer des solutions robustes
                et durable.
                <br />
                Merci de prendre le temps de me connaître un peu mieux.
                J&apos;ai hâte de faire partie d&apos;une communauté dynamique
                et de relever de nouveaux défis.
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
