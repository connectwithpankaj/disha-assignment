import Header from './components/Header';
import Hero from './components/Hero';
import MatchSchedule from './components/MatchSchedule';
import Videos from './components/Videos';
import Team from './components/Team';
import Player from './components/Player';
import Gallery from './components/Gallery';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pro-soccer-app">
      <Header />
      <Hero />
      <Player/>
      <div className="main-content container py-5">
        <div className="text-center mb-3">
          <h2 className="section-title">About Fc</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div
              className="shop-promo p-4 text-center mb-4"
              style={{
                backgroundImage: "url('/assets/images.jpg')", // <-- Correct background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '8px',
                color: '#fff',
                minHeight: '330px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ minHeight: '250px' }} className="d-flex flex-column justify-content-end align-items-start">
              <button
                className="btn btn-danger"
                style={{ width: '80px', textAlign: 'left' }}
              >
                SHOP NOW
              </button>
            </div>
            </div>
          </div>

          <div className="col-md-6">
            <MatchSchedule />
          </div>
        </div>
      </div>
      <Videos />
      <Team />
      <Gallery />
      <News />
      <Footer />
    </div>
  );
}

export default App;
