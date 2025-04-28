import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Gallery = () => {
  const galleryImages = [
    '/assets/images.jpg',
    '/assets/Rapinoe-Polkinghorne-US-Australia-soccer-football-2020-Tokyo-Olympics.webp',
    '/assets/pexels-pixabay-262524.jpg',
    '/assets/pexels-pixabay-262524.jpg',
    '/assets/Rapinoe-Polkinghorne-US-Australia-soccer-football-2020-Tokyo-Olympics.webp',
    '/assets/images.jpg'
  ]

  return (
    <section
      className="gallery-section py-5"
      style={{
        backgroundImage: 'url("/assets/muscle-img-black-bg.webp")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className="text-center mb-3">
              <h2 className="section-title">Gallery</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {galleryImages.map((imageUrl, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={imageUrl} alt={`Gallery ${index + 1}`} />
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="text-center mt-1s">
            <Button variant="danger" size="lg">
              See More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
