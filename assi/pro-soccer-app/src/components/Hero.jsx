import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section
      className="hero-section text-white text-center"
      style={{
        backgroundImage: "url('/assets/image1.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div
              style={{
                padding: '10px',
                display: 'inline-block',
              }}
            >
              <h1 className="m-0">WELCOME TO PRO SOCCER</h1>
            </div>
            <div
              style={{
                backgroundColor: 'black',
                marginTop: '10px',
                padding: '15px',
              }}
            >
              <p className="m-0">
                This template is using bootstrap framework, works totally responsive,
                <br />
                easy to customise, well commented codes and seo friendly.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
