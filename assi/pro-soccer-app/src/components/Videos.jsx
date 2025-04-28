import { Container, Row, Col, Card } from 'react-bootstrap';

const Videos = () => {
  return (
    <section
      className="videos-section py-5"
      style={{
        backgroundImage: "url('/assets/muscle-img-black-bg.webp')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h2 className="section-title">Latest video</h2> 
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
          
            <Card className="border-0 shadow-sm" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
              <div className="ratio ratio-16x9">
              <iframe width="900" height="480" src="https://www.youtube.com/embed/8ZpImShEo-M" title="1 in a Trillion Football Moments" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <Card.Body className="text-center text-white">
                <Card.Title className="mb-3">
                  Highlight TPL 2015 - Navy Football Club 0-1, Bangkok Glass FC
                </Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Videos;
