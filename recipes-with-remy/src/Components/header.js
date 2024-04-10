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
            <Nav.Link href="/efridge" style={getNavLinkStyle("/efridge")}>eFridge <div style={{fontSize: '15px'}}> Track your ingredients</div></Nav.Link>
            <Nav.Link href="#link" style={{ fontSize: '1.5rem' }}>Search<div style={{fontSize: '15px'}}> Find new recipes</div></Nav.Link>
            <Nav.Link href="#about" style={{ fontSize: '1.5rem' }}>Saved<div style={{fontSize: '15px'}}> View saved recipes</div></Nav.Link>
            <Nav.Link href="/profile" style={getNavLinkStyle("/profile")}>Account<div style={{fontSize: '15px'}}> Expiries and settings</div></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
