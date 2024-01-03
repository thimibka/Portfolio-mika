import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavPortFolio = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#Home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="Presentation">Presentation</Nav.Link>
            <Nav.Link href="Formation">Formation</Nav.Link>
            <Nav.Link href="Diplomes">Diplomes</Nav.Link>
            <Nav.Link href="Projets">Projets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavPortFolio;
