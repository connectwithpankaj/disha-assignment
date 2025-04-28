import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      {/* Top Red Banner */}
      <div className="top-banner">
        <Container>
          <div className="banner-content">
            <div className="news-ticker">
              <span>News: Felbino and the players who cost more than Pigbo.</span>
            </div>
            <div className="banner-right">
              <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className="main-navigation">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">PRO SOCCER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link">HOME</Nav.Link>
              <Nav.Link href="#about" className="nav-link">ABOUT</Nav.Link>
              <Nav.Link href="#team" className="nav-link">TEAM</Nav.Link>
              <Nav.Link href="#gallery" className="nav-link">GALLERY</Nav.Link>
              <Nav.Link href="#news" className="nav-link">NEWS</Nav.Link>
              <Nav.Link href="#shop" className="nav-link">SHOP</Nav.Link>
              <Nav.Link href="#contact" className="nav-link">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;