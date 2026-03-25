import './Pages.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="cj-container cj-about-wrapper">
      <div className="cj-about-hero animate-fade-in-up">
        <h1 className="cj-text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>The Meaning of the Movement</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
          Behind the music, the apparel, and the community lies a singular focus.
        </p>
      </div>

      <div className="cj-mantra-breakdown">
        {/* Row 1: Keep Joy */}
        <div className="cj-mantra-row animate-fade-in-up delay-100">
          <div className="cj-mantra-text">
            <h3>Keep Joy</h3>
            <h2>Jesus. Others. Yourself.</h2>
            <p>
              True joy isn't a fleeting emotion—it's an immovable anchor. The acronym is the blueprint for a fulfilled life and the foundation of the Joy Crew: prioritizing Jesus first, serving Others second, and taking care of Yourself third.
            </p>
          </div>
          <div className="cj-mantra-image-container">
            <img src="/images/media__1773877528262.jpg" alt="Keep Joy Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Row 2: Live Disciplined */}
        <div className="cj-mantra-row animate-fade-in-up delay-200">
          <div className="cj-mantra-text">
            <h3>Live Disciplined</h3>
            <h2>The Pursuit of Excellence</h2>
            <p>
              Discipline is the bridge between intention and reality. Whether it's producing high-ticket records, diving deep into biblical scholarship, or building a lasting legacy, a disciplined life is required to steward the gifts we've been given.
            </p>
          </div>
          <div className="cj-mantra-image-container">
            <img src="/images/media__1773877813341.jpg" alt="Live Disciplined" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <div className="animate-fade-in-up delay-300" style={{ textAlign: 'center', marginTop: '5rem' }}>
        <Link to="/" className="cj-btn-gold">Return to the Hub</Link>
      </div>
    </div>
  );
}
