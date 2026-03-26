import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

function WaitlistForm() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://links.marshmagnify.com/js/form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://links.marshmagnify.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="waitlist" style={{ padding: '6rem 0', backgroundColor: 'var(--cream-surface)' }}>
      <div className="cj-container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--navy-primary)' }}>
          The Seven Churches Diagnostic Series
        </h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--navy-light)' }}>
          Join the waitlist for the upcoming 7-part deep-dive study on the Churches of Revelation.
          Get early access to the scholarly notes, and a direct line to text Caligrafi Jones.
        </p>
        <iframe
          src="https://links.marshmagnify.com/widget/form/upz5EsOLZkBuVxFRCaxs"
          style={{ width: '100%', height: '567px', border: 'none', borderRadius: '8px' }}
          id="inline-upz5EsOLZkBuVxFRCaxs"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Waitlist"
          data-height="567"
          data-layout-iframe-id="inline-upz5EsOLZkBuVxFRCaxs"
          data-form-id="upz5EsOLZkBuVxFRCaxs"
          title="Waitlist"
        />
      </div>
    </section>
  );
}

export default function Home() {
  useSEO({
    title: 'Caligrafi Jones | keep JOY, live Disciplined',
    description: 'The official home of Caligrafi Jones. Music, Scripture-serious biblical scholarship, and the disciplined creative life — all under one roof.',
  });

  return (
    <>
      {/* ── Hero — photo behind the title ────────────────────────────── */}
      <section
        className="cj-hero animate-fade-in-up"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Background photo */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/cali-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          filter: 'grayscale(15%)',
          zIndex: 0,
        }} />
        {/* Overlay — heavier at top and bottom, lighter in middle so photo shows */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, var(--cream-bg) 0%, rgba(253,251,247,0.45) 35%, rgba(253,251,247,0.45) 65%, var(--cream-bg) 100%)',
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '8rem 2rem 4rem', textAlign: 'center' }}>
          <h1 className="cj-hero-title cj-text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            keep <span>JOY</span>,<br/>live Disciplined.
          </h1>
          <p className="cj-hero-subtitle" style={{ fontSize: '1.25rem', letterSpacing: '0.05em' }}>
            Home of all things Caligrafi Jones
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#waitlist" className="cj-btn-gold">Join The Waitlist</a>
            <a
              href="https://www.even.biz/artists/caligrafi-jones"
              target="_blank"
              rel="noreferrer"
              className="cj-btn-outline"
            >
              Listen to the Music
            </a>
          </div>
        </div>
      </section>

      {/* ── What is JOY ──────────────────────────────────────────────── */}
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

      {/* ── Waitlist Form ────────────────────────────────────────────── */}
      <WaitlistForm />

      {/* ── Ecosystem Grid ───────────────────────────────────────────── */}
      <section id="ecosystem" className="cj-container" style={{ padding: '7rem 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>The Ecosystem</h2>
        <div className="cj-grid">

          {/* Joy Hoodie */}
          <a href="https://joyhoodie.com" target="_blank" rel="noreferrer" className="cj-glass-card animate-fade-in-up delay-100">
            <div style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/joy-hoodie-mockup.png" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem' }} alt="JOY Hoodie" />
            </div>
            <h3>Joy Hoodie</h3>
            <p>Signature apparel representing the movement. Navy and gold standard quality.</p>
            <span className="cj-text-gradient" style={{ fontWeight: 'bold', marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>
              Shop Merch <ChevronRight size={16}/>
            </span>
          </a>

          {/* First Fruits — upcoming album */}
          <a href="https://www.even.biz/artists/caligrafi-jones" target="_blank" rel="noreferrer" className="cj-glass-card animate-fade-in-up delay-200">
            <div style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <img src="/images/firstfruits-cover.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} alt="First Fruits Album" />
            </div>
            <h3>First Fruits</h3>
            <p>Upcoming album — available exclusively on Even. Listen to previous releases there now.</p>
            <span className="cj-text-gradient" style={{ fontWeight: 'bold', marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>
              Listen on Even <ChevronRight size={16}/>
            </span>
          </a>

          {/* Crew Notes */}
          <Link to="/crew-notes" className="cj-glass-card animate-fade-in-up delay-300">
            <div style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <img src="/images/crew-notes-logo.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Crew Notes" />
            </div>
            <h3>Crew Notes</h3>
            <p>Weekly biblical scholarship, the newsletter, and a disciplined faith community.</p>
            <span className="cj-text-gradient" style={{ fontWeight: 'bold', marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>
              Read Notes <ChevronRight size={16}/>
            </span>
          </Link>

        </div>
      </section>
    </>
  );
}
