import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function Music() {
  return (
    <div className="cj-container cj-about-wrapper">
      <div className="cj-about-hero animate-fade-in-up">
        <h1 className="cj-text-gradient" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Caligrafi Jones Music</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
          My latest releases are available directly to my supporters.
          Listen, purchase, and support the movement.
        </p>
      </div>

      <div className="cj-mantra-breakdown">
        {/* Row 1: Listen */}
        <div className="cj-mantra-row animate-fade-in-up delay-100">
          <div className="cj-mantra-text">
            <h2>Listen to Caligrafi Jones</h2>
            <p style={{ marginBottom: '2rem' }}>
              Join the community and support independent art by streaming the latest releases directly on Even.
            </p>
            <a href="https://www.even.biz/artists/caligrafi-jones" target="_blank" rel="noreferrer" className="cj-btn-gold" style={{ display: 'inline-flex' }}>
              Listen Now! <ExternalLink size={20} style={{ marginLeft: '10px' }} />
            </a>
          </div>
          <div className="cj-mantra-image-container">
            <img src="/images/media__1773877528262.jpg" alt="Caligrafi Jones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Row 2: Live */}
        <div className="cj-mantra-row animate-fade-in-up delay-200">
          <div className="cj-mantra-text">
            <h2>See Caligrafi Jones Live!</h2>
            <p style={{ marginBottom: '2rem' }}>
              Ready to experience the movement in person? Bring Cali to your campus or event.
            </p>
            <Link to="/booking" className="cj-btn-gold" style={{ display: 'inline-flex' }}>
              Book Cali
            </Link>
          </div>
          <div className="cj-mantra-image-container">
            <img src="/images/media__1773877813341.jpg" alt="Caligrafi Jones Live" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
