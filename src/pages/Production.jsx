import './Pages.css';
import { useSEO } from '../hooks/useSEO';
import { useEffect } from 'react';

const STRUGGLES = [
  {
    title: '"I know I have a unique sound, but I can\'t capture it"',
    body: "You hear it in your head, but when you record, it doesn't match your vision. You're stuck between where you are and where you know you could be.",
  },
  {
    title: '"I feel like I\'m copying other artists"',
    body: "You're making music, but it doesn't sound like YOU yet. You're borrowing from everyone else's playbook instead of developing your own authentic style.",
  },
  {
    title: '"I\'m making music, but not growing as an artist"',
    body: "You're putting out tracks, but you don't feel like you're actually developing. You need intentional guidance and a clear path forward.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Ultimate professional... Prolific writer and producer. Hears the in between and knows what sounds to create to bring the music to life.",
    name: "Shaunte U. (R&B Artist)",
  },
  {
    quote: "Cali is definitely someone worth talking to with regards to planning, and carrying out that plan... Always beautiful when you hear things aloud and they align.",
    name: "Christian Torres (The Real Nobody)",
  },
];

function BookingCalendar() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://links.marshmagnify.com/js/form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://links.marshmagnify.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src="https://links.marshmagnify.com/widget/booking/v0ataI6MlUkXqg4bozaB"
      style={{ width: '100%', height: '700px', border: 'none', borderRadius: '12px' }}
      title="Book a Discovery Call"
    />
  );
}

export default function Production() {
  useSEO({
    title: 'The Momentum Model | Music Production — Caligrafi Jones',
    description: 'High-level production retainers for independent R&B and rap artists. The Momentum Model is a servant-focused partnership built to develop your sound and grow your catalog.',
  });

  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{
        textAlign: 'center',
        padding: '8rem 2rem 5rem',
        background: 'var(--navy-primary)',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--gold-primary)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontSize: '0.8rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
        }}>
          Full Stack Production
        </p>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 800,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          lineHeight: 1.05,
          letterSpacing: '0.02em',
          marginBottom: '1.5rem',
        }}>
          THE <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', textTransform: 'none', fontWeight: 400 }}>Momentum</span> MODEL
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
          A servant-focused approach aimed at helping independent artists create a career and a catalog that lasts.
        </p>
      </section>

      {/* ── The Real Struggle ────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-bg)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--navy-primary)', marginBottom: '3rem' }}>
            The Real Struggle
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {STRUGGLES.map((s, i) => (
              <div key={i} style={{
                background: 'var(--navy-primary)',
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                borderLeft: '4px solid var(--gold-primary)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  color: 'var(--gold-primary)',
                  marginBottom: '1rem',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}>
                  {s.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Comparison ─────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-surface)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--navy-primary)', marginBottom: '3rem' }}>
            The Value of Momentum
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            {/* Going it alone */}
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', boxShadow: 'var(--drop-shadow)' }}>
              <h3 style={{ textAlign: 'center', color: 'var(--navy-primary)', marginBottom: '2rem', fontSize: '1.4rem' }}>Going It Alone</h3>
              {[
                ['Studio Session', '$100–$125'],
                ['Audio Engineer', '$50–$100'],
                ['Mixing (1 track)', '$75–$150'],
                ['Mastering', '$100'],
                ['Brand Strategy', '$500–$1,000'],
                ['Marketing Agency', '$1,000–$2,000'],
              ].map(([label, price]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.9rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                  <span style={{ color: 'var(--navy-light)', fontSize: '0.95rem' }}>{label}</span>
                  <span style={{ color: 'var(--navy-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{price}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1.25rem', marginTop: '0.5rem', borderTop: '2px solid var(--navy-light)' }}>
                <span style={{ color: 'var(--navy-primary)', fontWeight: 700, fontSize: '1.1rem' }}>Monthly Total</span>
                <span style={{ color: '#e53e3e', fontWeight: 700, fontSize: '1.1rem' }}>$2,125–$4,025</span>
              </div>
            </div>

            {/* Momentum Model */}
            <div style={{ background: 'var(--navy-primary)', padding: '2.5rem', borderRadius: '20px', border: '2px solid var(--gold-primary)' }}>
              <h3 style={{ textAlign: 'center', color: 'var(--gold-primary)', marginBottom: '2rem', fontSize: '1.4rem' }}>The Momentum Model</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
                {[
                  'Studio Sessions Included',
                  'Technical Training & Guidance',
                  'Full Vocal Engineering',
                  'Comprehensive Mix & Mastering',
                  'Distribution & Registration Setup',
                  'Long-Term Marketing Strategy',
                  'Brand Development',
                  'Personal Mentorship',
                ].map((item) => (
                  <li key={item} style={{ padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--gold-primary)', fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ textAlign: 'center', padding: '1.25rem', background: 'rgba(212,175,55,0.12)', borderRadius: '10px' }}>
                <strong style={{ color: 'var(--gold-bright)', fontSize: '1rem', lineHeight: 1.5 }}>
                  Save thousands per year with personalized, servant-focused mentorship.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--navy-primary)', marginBottom: '3rem' }}>
            What Artists Say
          </h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                flex: 1,
                minWidth: '280px',
                background: '#fff',
                borderLeft: '4px solid var(--gold-primary)',
                padding: '2.5rem',
                borderRadius: '0 16px 16px 0',
                boxShadow: 'var(--drop-shadow)',
              }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--navy-light)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  "{t.quote}"
                </p>
                <strong style={{ color: 'var(--gold-dark)', fontSize: '0.9rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}>
                  — {t.name}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ──────────────────────────────────────────────── */}
      <section id="apply" style={{ padding: '6rem 2rem 8rem', backgroundColor: 'var(--cream-surface)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--navy-primary)', marginBottom: '1rem' }}>
            Ready to Build Momentum?
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--navy-light)', marginBottom: '3rem', maxWidth: '550px', margin: '0 auto 3rem' }}>
            Book a quick discovery call. Let's see if we're a fit for your vision.
          </p>
          <BookingCalendar />
          <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: 'var(--navy-light)' }}>
            Or email directly:{' '}
            <a href="mailto:music@caligrafijones.com" style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>
              music@caligrafijones.com
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
