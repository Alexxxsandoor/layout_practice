import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MobileMenu = ({menuItems, subItems, logo}) => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary mobile-menu">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item, index) => <Nav.Link key={index} href={item.link} className={item.className}>{item.name}</Nav.Link>)}
            {subItems.map((item, index) => <Nav.Link key={index} href={item.link} className={item.className}>{item.name}</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default MobileMenu;