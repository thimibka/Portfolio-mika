import Card from "react-bootstrap/Card";
export default function Formation() {
  return (
    <>
      <h1>Formation THP</h1>

      <div className="formation">
        <Card style={{ width: "30rem", backgroundColor: "rgba(0, 0, 0, 0.7)", border: "1px solid rgb(131, 210, 241)" }}>
          <Card.Body>
            <Card.Title style={{ color: "rgb(131, 210, 241)" }}>
              Formation en perr-learning de 1250h où nous avons appris les sujet
              suivant :
            </Card.Title>
            <Card.Text>
              <p>
                <br />
                -Terminal
                <br />
                -Html
                <br />
                -Css
                <br />
                -Git hub
                <br />
                -Bootstrap
                <br />
                -Atomic design
                <br />
                -Ruby
                <br />
                -Programation orienté objet
                <br />
                -Model vue controller
                <br />
                -Rails
                <br />
                -SQL POSTGRESQL
                <br />
                -Deployement fly.io/Heroku
                <br />
                -Javascript vanilla
                <br />
                -Dom
                <br />
                -Figma
                <br />
                -Trello
                <br />
                -Méthode agile
                <br />
                -ES6 variables,fonction et methodes
                <br />
                -ES6 les classes
                <br />
                -La récursivité
                <br />
                -La complexité algorithmique
                <br />
                -Les arbres binaires
                <br />
                -Regex
                <br />
                -Api
                <br />
                -React.js
                <br />
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
