import { Container, Row, Col } from 'react-bootstrap';

const Player = () => {
  return (
    <section
      className="match-intro-section text-white py-5"
      style={{
        background: 'linear-gradient(to bottom, #111, #000)', 
        position: 'relative',
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Player Image */}
          <Col md={2} className="text-center">
            <img
              src="/assets/muscle-img-black-bg.webp" 
              alt="Left Player"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>

          {/* Left Team Logo + Name */}
          <Col md={3} className="text-center">
            <img
              src="/assets/team-flag.jpg" 
              alt="Pro Soccer"
              style={{ width: '120px', marginBottom: '10px' }}
            />
            <div style={{ color: 'red', marginTop: '10px' }}>PROSOCCER</div>
          </Col>

          {/* Match Info */}
          <Col md={2} className="text-center">
            <h3 style={{ color: 'red' }}>LIGA PREMIERE</h3>
            <p style={{ color: 'red', fontSize: '14px' }}>JUNE 18, 17:00</p>
            <h4 style={{ margin: '20px 0' }}>VS</h4>
            <p style={{ fontSize: '14px' }}>
              STADION JAKABARING
              <br />
              PEKANBARU
            </p>
          </Col>

          {/* Right Team Logo + Name */}
          <Col md={3} className="text-center">
            <img
              src="/assets/team1-flag.jpg" 
              alt="Juventus"
              style={{ width: '120px', marginBottom: '10px' }}
            />
            <div style={{ color: 'red', marginTop: '10px' }}>JUPENTUS</div>
          </Col>

          {/* Right Player Image */}
          <Col md={2} className="text-center">
            <img
              src="/assets/muscle-img-black-bg.webp" 
              alt="Right Player"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Player;
