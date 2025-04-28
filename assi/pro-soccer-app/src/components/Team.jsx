import { Row, Col, Card } from 'react-bootstrap';
import { FaFutbol } from 'react-icons/fa';

const Team = () => {
  const players = [
    { name: 'CHRISTIAN RONALDOEL', position: 'Forwarder', image: '/assets/messi.jpg' },
    { name: 'GUILLIGI BUTTON', position: 'Goal Keeper', image: '/assets/images.jpg' },
    { name: 'ALEXANDRO NISTA', position: 'Center Back', image: '/assets/ronaldo-gui.jpg' },
    { name: 'DAVID BECKMAN', position: 'Right Middle Forward', image: '/assets/alexendro.jpg' },
  ];

  return (
    <section className="team-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">OUR PLAYERS</h2>
        </div>
        <Row className="g-4">
          {players.map((player, index) => (
            <Col md={3} sm={6} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="player-image-container position-relative">
                  <Card.Img 
                    variant="top" 
                    src={player.image} 
                    alt={player.name}
                    className="player-image"
                  />
                </div>
                <Card.Body className="text-center p-0">
                  <div style={{ backgroundColor: '#000', padding: '10px 0' }}>
                    <Card.Title style={{ color: '#fe0000', marginBottom: 0, fontSize: '1rem' }}>
                      {player.name}
                    </Card.Title>
                  </div>
                  <div style={{ backgroundColor: '#000', padding: '5px 0' }}>
                    <Card.Text style={{ color: '#fff', fontStyle: 'italic', marginBottom: 0 }}>
                      {player.position}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <button className="btn btn-danger px-4 py-2">
            View Full Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
