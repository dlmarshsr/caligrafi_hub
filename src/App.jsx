import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CrewNotes from './pages/CrewNotes';
import Production from './pages/Production';
import Music from './pages/Music';
import { Instagram, Youtube } from 'lucide-react';
import './App.css';

function App() {
  return (
    <Router>
      <header className="cj-header">
        <div className="cj-container cj-nav">
          <Link to="/" className="cj-logo">Caligrafi Jones</Link>
          <nav className="cj-nav-links">
            <Link to="/about">About</Link>
            <Link to="/music">Music</Link>
            <Link to="/crew-notes">Crew Notes</Link>
            <Link to="/production">Music Services</Link>
            <a href="https://joyhoodie.com" target="_blank" rel="noreferrer" style={{color: 'var(--gold-primary)'}}>Shop Merch</a>
          </nav>
        </div>
      </header>
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/crew-notes" element={<CrewNotes />} />
          <Route path="/production" element={<Production />} />
        </Routes>
      </main>

      <footer style={{ backgroundColor: 'var(--navy-primary)', padding: '4rem 0 3rem', textAlign: 'center', marginTop: 'auto' }}>
        <div className="cj-container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#FFFFFF' }}>keep JOY, live Disciplined</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <a href="https://instagram.com/caligrafijones_" target="_blank" rel="noreferrer" style={{ color: 'var(--gold-primary)', transition: 'opacity 0.3s' }} onMouseOver={e => e.currentTarget.style.opacity = 0.7} onMouseOut={e => e.currentTarget.style.opacity = 1}><Instagram size={28}/></a>
            <a href="https://www.youtube.com/@caligrafijonesmusic" target="_blank" rel="noreferrer" style={{ color: 'var(--gold-primary)', transition: 'opacity 0.3s' }} onMouseOver={e => e.currentTarget.style.opacity = 0.7} onMouseOut={e => e.currentTarget.style.opacity = 1}><Youtube size={32}/></a>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>&copy; {new Date().getFullYear()} Caligrafi Jones | All Rights Reserved</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
