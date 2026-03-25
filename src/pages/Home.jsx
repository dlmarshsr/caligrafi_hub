import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="cj-hero animate-fade-in-up">
        <h1 className="cj-hero-title cj-text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
          keep <span>JOY</span>,<br/>live Disciplined.
        </h1>
        <p className="cj-hero-subtitle" style={{ fontSize: '1.25rem', letterSpacing: '0.05em' }}>
          Home of all things Caligrafi Jones
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#waitlist" className="cj-btn-gold">Join The Waitlist</a>
          <Link to="/music" className="cj-btn-outline">Listen to the music</Link>
        </div>
      </section>

      {/* What is JOY Section */}
      <section style={{ padding: '4rem 20px', backgroundColor: 'var(--cream-bg)', display: 'flex', justifyContent: 'center' }}>
        <div className="cj-container cj-glass-card animate-fade-in-up delay-100" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '4rem 2rem', border: '1px solid var(--gold-primary)', background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.05) 0%, var(--cream-surface) 100%)' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '1rem', marginBottom: '1rem', fontWeight: '700' }}>The Blueprint</h3>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--navy-primary)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            JESUS.<br/>OTHERS.<br/>YOURSELF.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--navy-light)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            True joy isn't a fleeting emotion—it's an immovable anchor. The acronym is the blueprint for a fulfilled life and the foundation of the Joy Crew: prioritizing <strong style={{color: 'var(--navy-primary)'}}>Jesus</strong> first, serving <strong style={{color: 'var(--navy-primary)'}}>Others</strong> second, and taking care of <strong style={{color: 'var(--navy-primary)'}}>Yourself</strong> third.
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
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
          ></iframe>
        </div>
      </section>

      {/* Primary Fan Lead Magnet: Seven Churches Waitlist */}
      <section id="waitlist" style={{ padding: '6rem 0', backgroundColor: 'var(--cream-surface)' }}>
        <div className="cj-container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--navy-primary)' }}>The Seven Churches Diagnostic Series</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--navy-light)' }}>
            Join the waitlist for the upcoming 7-part deep-dive study on the Churches of Revelation. 
            Get early access to the scholarly notes, and a direct line to text Caligrafi Jones.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }} onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining the waitlist! (Netlify forms incoming)"); }}>
            <input type="text" placeholder="First Name" required style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--cream-bg)', color: 'var(--navy-primary)', fontSize: '1rem', outline: 'none' }} />
            <input type="email" placeholder="Email Address" required style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--cream-bg)', color: 'var(--navy-primary)', fontSize: '1rem', outline: 'none' }} />
            <input type="tel" placeholder="Mobile Number (for Texts)" required style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--cream-bg)', color: 'var(--navy-primary)', fontSize: '1rem', outline: 'none' }} />
            <button type="submit" className="cj-btn-gold" style={{ marginTop: '1rem', width: '100%' }}>Join The Waitlist &rarr;</button>
          </form>
        </div>
      </section>

      {/* The Fan Ecosystem Grid */}
      <section id="ecosystem" className="cj-container" style={{ padding: '7rem 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>The Ecosystem</h2>
        
        <div className="cj-grid">
          {/* Card 1: Merch */}
          <a href="https://joyhoodie.com" target="_blank" rel="noreferrer" className="cj-glass-card animate-fade-in-up delay-100">
            <div style={{height: '160px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)'}}>
              <img src="/images/media__1773877230140.png" style={{width: '100%', height:'100%', objectFit: 'cover'}} alt="Joy Hoodie Merch" />
            </div>
            <h3>Joy Hoodie</h3>
            <p>Signature apparel representing the movement. Navy and gold standard quality.</p>
            <span className="cj-text-gradient" style={{ fontWeight: 'bold', marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>Shop Merch <ChevronRight size={16}/></span>
          </a>

          {/* Card 2: Music */}
          <Link to="/music" className="cj-glass-card animate-fade-in-up delay-200">
            <div style={{height: '160px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)'}}>
              <img src="/images/media__1773877240640.jpg" style={{width: '100%', height:'100%', objectFit: 'cover'}} alt="First Fruits Music" />
            </div>
            <h3>First Fruits</h3>
            <p>A unified release blending transformative soundscapes with written revelations.</p>
            <span className="cj-text-gradient" style={{ fontWeight: 'bold', marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>Listen Now <ChevronRight size={16}/></span>
          </Link>

          {/* Card 3: Crew Notes */}
          <Link to="/crew-notes" className="cj-glass-card animate-fade-in-up delay-300">
            <div style={{height: '160px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)'}}>
              <img src="/images/media__1773877342021.jpg" style={{width: '100%', height:'100%', objectFit: 'cover'}} alt="Crew Notes Study" />
            </div>
            <h3>Crew Notes</h3>
            <p>Weekly biblical scholarship, the newsletter, and a disciplined faith community.</p>
            <span className="cj-text-gradient" style={{ fontWeight: 'bold', marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>Read Notes <ChevronRight size={16}/></span>
          </Link>
        </div>
      </section>
    </>
  );
}
