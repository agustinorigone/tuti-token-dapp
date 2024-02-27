import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { locations } from "../../modules/routing/locations";

import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={locations.root()}>ERC20 TUTI TOKEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={locations.transfer()}>Transfer</Nav.Link>
            <Nav.Link href={locations.mint()}>Mint</Nav.Link>
            <Nav.Link href={locations.burn()}>Burn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
