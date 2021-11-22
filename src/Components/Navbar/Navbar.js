import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Mercedes-Benz</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>

    )
}

export default Header
