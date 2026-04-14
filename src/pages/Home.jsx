import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Caligrafi Jones | keep JOY, live Disciplined',
    description: 'The official home of Caligrafi Jones. Music, faith-driven hip-hop, and the Disciplined Life Blueprint.',
  });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="cj-hero animate-fade-in-up"
        style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/cali-bg.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center 20%',
          filter: 'grayscale(15%)', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, var(--cream-bg) 0%, rgba(253,251,247,0.45) 35%, rgba(253,251,247,0.45) 65%, var(--cream-bg) 100%)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          minHeight: '100vh', padding: '8rem 2rem 4rem', textAlign: 'center',
        }}>
          <h1 className="cj-hero-title cj-text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            keep <span>JOY</span>,<br/>live Disciplined.
          </h1>
          <p className="cj-hero-subtitle" style={{ fontSize: '1.25rem', letterSpacing: '0.05em' }}>
            Home of all things Caligrafi Jones
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/booking" className="cj-btn-gold">Book Cali</Link>
            <a
              href="https://www.even.biz/artists/caligrafi-jones"
              target="_blank" rel="noreferrer"
              className="cj-btn-outline"
            >
              Listen to the Music
            </a>
          </div>
        </div>
      </section>

      {/* ── JOY Blueprint ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 20px', backgroundColor: 'var(--cream-bg)', display: 'flex', justifyContent: 'center' }}>
        <div className="cj-container cj-glass-card animate-fade-in-up delay-100" style={{
          maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', padding: '4rem 2rem',
          border: '1px solid var(--gold-primary)',
          background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.05) 0%, var(--cream-surface) 100%)',
        }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '1rem', marginBottom: '1rem', fontWeight: '700' }}>The Blueprint</h3>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--navy-primary)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            JESUS.<br/>OTHERS.<br/>YOURSELF.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--navy-light)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            True joy isn't a fleeting emotion—it's an immovable anchor. The acronym is the blueprint for a fulfilled life and the foundation of the Joy Crew: prioritizing <strong style={{ color: 'var(--navy-primary)' }}>Jesus</strong> first, serving <strong style={{ color: 'var(--navy-primary)' }}>Others</strong> second, and taking care of <strong style={{ color: 'var(--navy-primary)' }}>Yourself</strong> third.
          </p>
        </div>
      </section>

      {/* ── Latest Visuals ───────────────────────────────────────────── */}
      <section style={{ padding: '6rem 20px', backgroundColor: 'var(--cream-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--navy-primary)', marginBottom: '3rem', textAlign: 'center' }}>Latest Visuals</h2>
        <div style={{ width: '100%', maxWidth: '900px', aspectRatio: '16/9', borderRadius: '24px', border: '1px solid var(--glass-border)', overflow: 'hidden', boxShadow: 'var(--drop-shadow)', position: 'relative' }}>
          <iframe
            src="https://www.youtube.com/embed/ihwcqotqcGI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </section>

      {/* ── Book Cali ────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--navy-primary)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--gold-primary)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginBottom: '1.25rem',
          }}>
            Campus Booking
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
          }}>
            A Live Show. A Real Curriculum. One Visit.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Caligrafi Jones brings faith-driven hip-hop and the Disciplined Life Blueprint to your campus — a performance and workshop experience built for college and university students.
          </p>
          <Link to="/booking" className="cj-btn-gold">Inquire About Booking</Link>
        </div>
      </section>

      {/* ── Ecosystem ────────────────────────────────────────────────── */}
      <section id="ecosystem" style={{ padding: '6rem 20px', backgroundColor: 'var(--cream-bg)' }}>
        <div className="cj-container">
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '3rem', color: 'var(--navy-primary)' }}>
            The Ecosystem
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem' }}>

            {/* Joy Hoodie */}
            <a href="https://joyhoodie.com" target="_blank" rel="noreferrer" style={cardStyle}>
              <div style={imgWrap}>
                <img src="/images/joy-hoodie-mockup.png" style={imgStyle} alt="JOY Hoodie" />
              </div>
              <strong style={cardTitle}>Joy Hoodie</strong>
              <p style={cardBody}>Signature apparel. Navy and gold.</p>
              <span className="cj-text-gradient" style={cardLink}>Shop Merch <ChevronRight size={14}/></span>
            </a>

            {/* First Fruits */}
            <a href="https://www.even.biz/artists/caligrafi-jones" target="_blank" rel="noreferrer" style={cardStyle}>
              <div style={imgWrap}>
                <img src="/images/firstfruits-cover.jpg" style={{ ...imgStyle, objectPosition: 'center top' }} alt="First Fruits" />
              </div>
              <strong style={cardTitle}>First Fruits</strong>
              <p style={cardBody}>Upcoming album on Even.</p>
              <span className="cj-text-gradient" style={cardLink}>Listen on Even <ChevronRight size={14}/></span>
            </a>

            {/* Crew Notes */}
            <Link to="/crew-notes" style={cardStyle}>
              <div style={imgWrap}>
                <img src="/images/crew-notes-logo.png" style={imgStyle} alt="Crew Notes" />
              </div>
              <strong style={cardTitle}>Crew Notes</strong>
              <p style={cardBody}>Biblical scholarship & the newsletter.</p>
              <span className="cj-text-gradient" style={cardLink}>Read Notes <ChevronRight size={14}/></span>
            </Link>

            {/* Music Services */}
            <Link to="/production" style={cardStyle}>
              <div style={{ ...imgWrap, background: 'var(--navy-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--gold-primary)', fontSize: '1.1rem', textAlign: 'center', padding: '0.5rem' }}>
                  The Momentum Model
                </span>
              </div>
              <strong style={cardTitle}>Music Services</strong>
              <p style={cardBody}>Production retainers for independent artists.</p>
              <span className="cj-text-gradient" style={cardLink}>Learn More <ChevronRight size={14}/></span>
            </Link>

            {/* Indie Admin */}
            <Link to="/indie-admin" style={cardStyle}>
              <div style={{ ...imgWrap, background: 'var(--navy-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.5rem' }}>
                  Indie Admin
                </span>
              </div>
              <strong style={cardTitle}>Indie Admin</strong>
              <p style={cardBody}>Tools for independent artist operations.</p>
              <span className="cj-text-gradient" style={cardLink}>Explore <ChevronRight size={14}/></span>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: 'var(--glass-bg)',
  border: '1px solid var(--glass-border)',
  borderRadius: '16px',
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'inherit',
  boxShadow: 'var(--drop-shadow)',
  transition: 'transform 0.2s ease',
};

const imgWrap = {
  height: '140px',
  overflow: 'hidden',
  background: '#f0f0f0',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const cardTitle = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  color: 'var(--navy-primary)',
  padding: '0.9rem 1rem 0.25rem',
};

const cardBody = {
  fontSize: '0.82rem',
  color: 'var(--navy-light)',
  lineHeight: 1.5,
  margin: 0,
  padding: '0 1rem',
  flex: 1,
};

const cardLink = {
  fontWeight: 700,
  fontSize: '0.82rem',
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  padding: '0.75rem 1rem 1rem',
};
