import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavPortFolio = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Presentation
            </Nav.Link>
            <Nav.Link as={Link} to="/Formation">
              Formation
            </Nav.Link>
            <Nav.Link as={Link} to="/Diplomes">
              Diplomes
            </Nav.Link>
            <Nav.Link as={Link} to="/Projets">
              Projets
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavPortFolio;
