import { useEffect } from 'react';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

const WHAT_YOU_GET = [
  {
    title: 'Live Performance',
    body: '45–60 minute faith-driven hip-hop set built for a college audience. Connects music to identity, purpose, and real decisions students are navigating right now.',
  },
  {
    title: 'Disciplined Life Blueprint Workshop',
    body: 'A structured session built around identity, resilience, and intentional living. Based on the published curriculum and physical workbook. Delivered same day as the performance or as a standalone session.',
  },
  {
    title: 'Student Resource Package (optional add-on)',
    body: 'Schools can cover physical books and CDs for every student in the room as part of the booking. Inquire for details on the student package tier.',
  },
];

function BookingForm() {
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
      src="https://links.marshmagnify.com/widget/form/GuEpltanmTPxroUso2BN"
      style={{ width: '100%', height: '700px', border: 'none', borderRadius: '8px' }}
      id="inline-GuEpltanmTPxroUso2BN"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Form 3"
      data-layout-iframe-id="inline-GuEpltanmTPxroUso2BN"
      data-form-id="GuEpltanmTPxroUso2BN"
      title="Booking Inquiry"
    />
  );
}

export default function Booking() {
  useSEO({
    title: 'Book Caligrafi Jones | Campus Booking & EPK',
    description: 'Bring Caligrafi Jones to your campus — live hip-hop performance + Disciplined Life Blueprint workshop for college and university students. Inquire about booking.',
  });

  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{
        textAlign: 'center',
        padding: '8rem 2rem 6rem',
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
          Booking Info
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.15,
          marginBottom: '1.5rem',
          maxWidth: '700px',
          margin: '0 auto 1.5rem',
        }}>
          A Live Show. A Real Curriculum. One Visit.
        </h1>
        <p style={{
          fontSize: '1.15rem',
          maxWidth: '620px',
          margin: '0 auto 2.5rem',
          color: 'rgba(255,255,255,0.8)',
          lineHeight: 1.7,
        }}>
          Caligrafi Jones brings faith-driven hip-hop and the Disciplined Life Blueprint to your campus — a performance and workshop experience built for college and university students.
        </p>
        <a href="#booking-form" className="cj-btn-gold" style={{ display: 'inline-block' }}>
          Inquire About Booking
        </a>
      </section>

      {/* ── Who He Is ────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-bg)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--gold-dark)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}>
            About Caligrafi Jones
          </p>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--navy-light)',
            lineHeight: 1.8,
            margin: 0,
          }}>
            Caligrafi Jones is a Los Angeles-based hip-hop artist, biblical scholar, and creator of the Disciplined Life Blueprint — a curriculum built around identity, resilience, and purpose for college-age students. He operates under Marsh Magnify LLC, an SDVOSB-certified creative and consulting company. His work has aired on the Armed Forces Network and he has performed at universities and faith-based events across Southern California.
          </p>
        </div>
      </section>

      {/* ── What Your Campus Gets ────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-surface)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: 'var(--navy-primary)',
            fontFamily: 'var(--font-serif)',
            marginBottom: '3rem',
          }}>
            What Your Campus Gets
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {WHAT_YOU_GET.map((item, i) => (
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
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1rem', lineHeight: 1.75, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video ────────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-bg)' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: 'var(--navy-primary)',
            fontFamily: 'var(--font-serif)',
            marginBottom: '2rem',
          }}>
            Live Performance
          </h2>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: 'var(--drop-shadow)',
          }}>
            <iframe
              src="https://www.youtube.com/embed/YeIXIVGasno"
              title="Caligrafi Jones Live Performance"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
          <p style={{
            marginTop: '1.25rem',
            fontSize: '0.95rem',
            color: 'var(--navy-light)',
            fontStyle: 'italic',
          }}>
            Current booking reel available upon request.
          </p>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────── */}
      <section id="booking-form" style={{ padding: '6rem 2rem 8rem', backgroundColor: 'var(--navy-primary)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-serif)',
            marginBottom: '0.75rem',
          }}>
            Inquire About Booking
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1rem',
            marginBottom: '2.5rem',
          }}>
            Fill out the form below and we'll follow up within 48 hours.
          </p>
          <BookingForm />
        </div>
      </section>

    </div>
  );
}
