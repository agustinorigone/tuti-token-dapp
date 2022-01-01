import { Link } from 'react-router-dom'
import { locations } from '../../modules/routing/locations'

import { 
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap'


const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tuti Token Dapp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Transfer</Nav.Link>
            <Nav.Link href="#link">Burn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
