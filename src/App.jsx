import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CrewNotes from './pages/CrewNotes';
import Production from './pages/Production';
import Music from './pages/Music';
import IndieAdmin from './pages/IndieAdmin';
import Booking from './pages/Booking';
import Pay from './pages/Pay';
import { Instagram, Youtube, Menu, X } from 'lucide-react';
import './App.css';

const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Music', path: '/music' },
  { label: 'Crew Notes', path: '/crew-notes' },
  { label: 'Book Cali', path: '/booking' },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="cj-header">
        <div className="cj-container cj-nav">
          <Link to="/" className="cj-logo">Caligrafi Jones</Link>

          {/* Desktop links */}
          <nav className="cj-nav-links">
            {NAV_LINKS.map(l => (
              <Link key={l.path} to={l.path}>{l.label}</Link>
            ))}
            <a href="https://joyhoodie.com" target="_blank" rel="noreferrer" style={{ color: 'var(--gold-primary)' }}>
              Shop Merch
            </a>
          </nav>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: 'var(--navy-primary)',
            }}
            className="cj-hamburger"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          backgroundColor: 'var(--cream-bg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}>
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--navy-primary)',
            }}
          >
            <X size={32} />
          </button>

          {NAV_LINKS.map(l => (
            <Link
              key={l.path}
              to={l.path}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontStyle: 'italic',
                color: 'var(--navy-primary)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://joyhoodie.com"
            target="_blank"
            rel="noreferrer"
            className="cj-btn-gold"
          >
            Shop Merch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .cj-nav-links { display: none !important; }
          .cj-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/crew-notes" element={<CrewNotes />} />
          <Route path="/production" element={<Production />} />
          <Route path="/indie-admin" element={<IndieAdmin />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </main>

      <footer style={{ backgroundColor: 'var(--navy-primary)', padding: '4rem 1.5rem 3rem', textAlign: 'center', marginTop: 'auto' }}>
        <div className="cj-container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '1rem', color: '#FFFFFF' }}>
            keep JOY, live Disciplined
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <a href="https://instagram.com/caligrafijones_" target="_blank" rel="noreferrer"
              style={{ color: 'var(--gold-primary)' }}>
              <Instagram size={28} />
            </a>
            <a href="https://www.youtube.com/@caligrafijonesmusic" target="_blank" rel="noreferrer"
              style={{ color: 'var(--gold-primary)' }}>
              <Youtube size={32} />
            </a>
          </div>
          <p style={{ marginBottom: '2rem' }}>
            <a href="mailto:music@caligrafijones.com" style={{ color: 'var(--gold-primary)', fontSize: '0.95rem', letterSpacing: '0.03em' }}>
              music@caligrafijones.com
            </a>
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
            &copy; {new Date().getFullYear()} Caligrafi Jones | All Rights Reserved
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
