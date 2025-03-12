import Card from "react-bootstrap/Card";
import BannerEffect from "../fonction-js/presentation";
import "/src/styles/presentation.css";

export default function Home() {
  return (
    <>
      <div className="page_presentation">
        {/* Bannière avec effet Matrix */}
        <div className="title_page">
          <div className="banner">
            <img src="/cv/matrix.jpg" alt="Bannière Matrix" />
          </div>
        </div>
        <div className="matrixRain"></div>
        <BannerEffect />

        {/* Section de présentation avec la carte */}
        <div className="title_and_photo_and_presentation_text">
          <div className="title_and_photo_presentation">
           
          </div>
          <div className="presentation">
            {/* Carte React-Bootstrap */}
            <Card style={{ width: "30rem", margin: "auto", backgroundColor: "rgba(0, 0, 0, 0.7)", border: "1px solid rgb(131, 210, 241)" }}>
              <Card.Img variant="top" src="/moi.webp" />
              <Card.Body>
                <Card.Title style={{ color: "rgb(131, 210, 241)" }}>GERVAIS Mickael</Card.Title>
                <Card.Text style={{ color: "rgb(131, 210, 241)" }}>
                  <p>
                    Ancien militaire ayant servi avec dévouement pendant 11 ans,
                    je souhaite désormais orienter ma carrière vers le domaine de
                    l'informatique, un domaine qui m'a toujours passionné par sa
                    capacité à innover et à résoudre des problèmes complexes.
                    <br />          <br />
                    Mon parcours dans l'armée m'a permis de développer des
                    compétences telles que la discipline, la rigueur et la
                    capacité à travailler sous pression, des qualités essentielles
                    dans le monde du développement informatique où le respect des
                    délais et la précision sont cruciaux.  
                    <br />          <br />
                    Mon expérience militaire m'a également permis de cultiver un esprit d'équipe
                    solide et une capacité d'adaptation à différents
                    environnements, des compétences qui seront indéniablement
                    utiles dans un contexte professionnel collaboratif.
                  </p>
                  <p>
                    Je suis motivé, déterminé et prêt à
                    m'investir pleinement dans les projets de l'entreprise.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Section de contact */}
        <div className="contact_presentation">
          <div className="link_presentation">
            🌐 Où me trouver :<br />
            GITHUB :{" "}
            <a
              href="https://github.com/thimibka"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1a1dd1" }}
            >
              ici
            </a>
            <br />
            LINKEDIN :{" "}
            <a
              href="https://www.linkedin.com/in/gervais-mickael-thimibka"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1a1dd1" }}
            >
              ici
            </a>
            <br />
            EMAIL :{" "}
            <a href="mailto:fseetp@gmail.com" style={{ color: "#1a1dd1" }}>
              Contactez-moi !
            </a>
          </div>
        </div>
      </div>
    </>
  );
}