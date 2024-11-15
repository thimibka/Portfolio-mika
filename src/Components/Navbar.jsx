import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavPortFolio = () => {
  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "rgba(59, 130, 246, 0.4)" }}
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "black" }}>
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{ color: "black" }}>
                Présentation
              </Nav.Link>
              <Nav.Link as={Link} to="/Formation" style={{ color: "black" }}>
                Formation
              </Nav.Link>
              <Nav.Link as={Link} to="/Diplomes" style={{ color: "black" }}>
                Diplômes
              </Nav.Link>
              <Nav.Link as={Link} to="/Projets" style={{ color: "black" }}>
                Projets
              </Nav.Link>
              
            /*<Nav.Link as={Link} to="/Curriculum" style={{ color: "black" }}>
                Curriculum
              </Nav.Link>*/
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavPortFolio;
