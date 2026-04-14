import './Pages.css';
import { useSEO } from '../hooks/useSEO';

// Replace these with real Marshmagnify (or Stripe/etc.) links before sending
const PACKAGES = [
  {
    name: 'The Show',
    price: '$1,000',
    items: ['Live performance only', '45–60 minutes'],
    featured: false,
    payLink: '#',   // ← replace with payment/booking link
    ctaLabel: 'Book The Show',
  },
  {
    name: 'Show + Workshop',
    price: '$2,000',
    items: [
      'Live performance',
      'Disciplined Life Blueprint workshop session',
      'School supplies the space — everything else is covered',
    ],
    featured: true,
    payLink: '#',   // ← replace with payment/booking link
    ctaLabel: 'Book Show + Workshop',
  },
  {
    name: 'Full Student Package',
    price: '$5,000',
    items: [
      'Performance + workshop',
      '150 physical books for students',
      '150 CDs for students',
      'Additional student sets — inquire for pricing',
    ],
    featured: false,
    payLink: '#',   // ← replace with payment/booking link
    ctaLabel: 'Book Full Package',
  },
];

export default function Pay() {
  useSEO({
    title: 'Confirm Your Booking | Caligrafi Jones',
    description: 'Select your package and confirm your booking for Caligrafi Jones on your campus.',
  });

  return (
    <div>

      {/* ── Header ───────────────────────────────────────────────────── */}
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
          Confirm Your Booking
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.2,
          margin: '0 auto 1.25rem',
          maxWidth: '680px',
        }}>
          Choose Your Package
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.72)',
          maxWidth: '540px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Select the option that fits your campus and confirm your date. Questions? Reply to your inquiry email.
        </p>
      </section>

      {/* ── Packages ─────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem 7rem', backgroundColor: 'var(--cream-bg)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {PACKAGES.map((pkg, i) => (
              <div key={i} style={
                pkg.featured
                  ? {
                      background: 'var(--navy-primary)',
                      padding: '2.5rem 2rem',
                      borderRadius: '20px',
                      border: '2px solid var(--gold-primary)',
                      display: 'flex',
                      flexDirection: 'column',
                    }
                  : {
                      background: '#fff',
                      padding: '2.5rem 2rem',
                      borderRadius: '20px',
                      border: '1px solid var(--glass-border)',
                      boxShadow: 'var(--drop-shadow)',
                      display: 'flex',
                      flexDirection: 'column',
                    }
              }>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: pkg.featured ? 'var(--gold-primary)' : 'var(--navy-light)',
                  marginBottom: '0.75rem',
                }}>
                  {pkg.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  color: pkg.featured ? '#fff' : 'var(--navy-primary)',
                  margin: '0 0 1.5rem',
                  lineHeight: 1,
                }}>
                  {pkg.price}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', flex: 1 }}>
                  {pkg.items.map((item, j) => (
                    <li key={j} style={{
                      padding: '0.65rem 0',
                      borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.1)' : 'var(--glass-border)'}`,
                      color: pkg.featured ? 'rgba(255,255,255,0.88)' : 'var(--navy-light)',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                      paddingLeft: '1.5rem',
                      position: 'relative',
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--gold-primary)', fontWeight: 700 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.payLink}
                  className={pkg.featured ? 'cj-btn-gold' : 'cj-btn-outline'}
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  {pkg.ctaLabel}
                </a>
              </div>
            ))}
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            fontSize: '0.9rem',
            color: 'var(--navy-light)',
            fontStyle: 'italic',
            maxWidth: '680px',
            margin: '2.5rem auto 0',
            lineHeight: 1.7,
          }}>
            All packages are available to campus activities boards, student affairs offices, campus ministry organizations, and Dean of Students offices. Pricing is negotiable based on school size and budget.
          </p>
        </div>
      </section>

    </div>
  );
}
