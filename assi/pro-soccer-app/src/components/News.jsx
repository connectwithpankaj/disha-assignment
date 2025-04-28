import { Container, Row, Col, Card } from 'react-bootstrap';

const News = () => {
  const newsItems = [
    {
      date: 'May 29, 2015',
      title: 'We give you good documentation',
      excerpt: 'We give you good documentation to make easy to understand about this templates and the features.',
      image: '/assets/images.jpg'
    },
    {
      date: 'May 29, 2015',
      title: 'Template features',
      excerpt: 'Condimentum aliquam, mollit magna velit nec, tempor caraus vitae sit aliquet neque purus.',
      image: '/assets/Rapinoe-Polkinghorne-US-Australia-soccer-football-2020-Tokyo-Olympics.webp'
    },
    {
      date: 'May 29, 2015',
      title: 'Latest updates',
      excerpt: 'Uitresis lacus proin conubia dictum tempus, tempor pede vitae faucibus.',
      image: '/assets/pexels-pixabay-262524.jpg'
    }
  ];
  

  return (
    <section className="news-section py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <div className="text-center mb-3">
              <h2 className="section-title">Latest News</h2>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          {newsItems.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 news-card">
                <Card.Img 
                  variant="top" 
                  src={item.image} 
                  alt={item.title}
                  className="news-image"
                />
                <Card.Body>
                  <small className="text-muted">{item.date}</small>
                  <Card.Title className="mt-2">{item.title}</Card.Title>
                  <Card.Text>{item.excerpt}</Card.Text>
                  <a href="#read-more" className="text-primary">Read More</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <button className="btn btn-danger px-4 py-2">
              Load More
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default News;