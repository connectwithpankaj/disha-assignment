import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pro-soccer-footer">
      <Container>
        <Row>
          {/* About Club Column */}
          <Col md={4} className="footer-column">
            <h5 className="footer-heading">ABOUT CLUB</h5>
            <p className="footer-text">
              This template is a micro niche for business categories, namely Pro Soccer Business. 
              There was an excess of this template in terms HTML/CSS. Condimentum aliquam, mollit 
              magna velit mela, temper curata vitae sit aliquet tempor incipis. Utterea locus proti 
              corullia dictum tempus, tempor pale viner faucibus.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </Col>

          {/* Recent Post Column */}
          <Col md={2} className="footer-column">
            <h5 className="footer-heading">RECENT POST</h5>
            <ul className="footer-list">
              <li className="footer-list-item">
                Connectivuer porttitor feugiat vestibulum sit feugiat.
                <div className="post-date">May 30, 2011</div>
              </li>
              <li className="footer-list-item">
                vestibulum sit feugiat voluptate dui non libero.
                <div className="post-date">May 30, 2011</div>
              </li>
            </ul>
          </Col>

          {/* Information Column - Split into two columns */}
          <Col md={2} className="footer-column">
            <h5 className="footer-heading">INFORMATION</h5>
            <div className="row">
              <div className="col-6">
                <ul className="footer-list">
                  <li className="footer-list-item">Home</li>
                  <li className="footer-list-item">About</li>
                  <li className="footer-list-item">Team</li>
                  <li className="footer-list-item">Gallery</li>
                  <li className="footer-list-item">News</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="footer-list">
                  <li className="footer-list-item">Shop</li>
                  <li className="footer-list-item">Contact</li>
                  <li className="footer-list-item">FAQs</li>
                  <li className="footer-list-item">Support</li>
                  <li className="footer-list-item">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Newsletter Column */}
          <Col md={4} className="footer-column">
            <h5 className="footer-heading">NEWSLETTER</h5>
            <div className="newsletter-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="form-control footer-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="form-control footer-input"
                />
              </div>
              <button className="footer-button">SEND</button>
            </div>
          </Col>
        </Row>
        
        {/* Copyright Section */}
        <Row>
          <Col className="footer-copyright">
            <p>© 2015 Pro Soccer by Rudhi Saemito - All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;