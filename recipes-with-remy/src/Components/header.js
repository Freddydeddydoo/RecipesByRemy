import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();

  const getNavLinkStyle = (path) => {
    return location.pathname === path ? { fontSize: '1.5rem', color: 'green' } : { fontSize: '1.5rem' };
  };
  return (
    <Navbar expand="xl"  style={{borderRadius: '0px 0px 35px 35px', backgroundColor: '#B8CDAB'}}>
      <Container>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-between" style={{ width: "100%" }}>
            <Nav.Link href="/efridge" style={getNavLinkStyle("/efridge")}>Efridge <div style={{fontSize: '15px'}}> Track your ingridients</div></Nav.Link>
            <Nav.Link href="#link" style={{ fontSize: '1.5rem' }}>Explore Recipes<div style={{fontSize: '15px'}}> Find the one you want</div></Nav.Link>
            <Nav.Link href="#about" style={{ fontSize: '1.5rem' }}>View Saved<div style={{fontSize: '15px'}}> See your saved recipes</div></Nav.Link>
            <Nav.Link href="#services" style={{ fontSize: '1.5rem' }}>Account<div style={{fontSize: '15px'}}> Info and settings</div></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
