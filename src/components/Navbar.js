import { Navbar, Container, Nav } from "react-bootstrap";

export default function Navbarup() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">Movie Box</Navbar.Brand>
          <Nav>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
