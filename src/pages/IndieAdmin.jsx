import './Pages.css';
import { useSEO } from '../hooks/useSEO';
import { ChevronRight } from 'lucide-react';

const PAIN_POINTS = [
  {
    icon: '📁',
    title: '"My admin is everywhere"',
    body: "Contracts in your email. Invoices in a random folder. Client info in your DMs. Nothing is in one place and it costs you time and money.",
  },
  {
    icon: '💸',
    title: '"I\'m creative, not a businessman"',
    body: "You didn't sign up to run a company — you make art. But the business side doesn't stop existing just because you ignore it.",
  },
  {
    icon: '🔄',
    title: '"I keep reinventing the wheel"',
    body: "Every project feels like starting from scratch. No templates, no systems, no repeatable process. You're always in reactive mode.",
  },
];

const FEATURES = [
  {
    label: 'Business Foundation',
    desc: 'LLC setup checklist, EIN, business banking, branding basics — your legal and structural foundation locked in.',
  },
  {
    label: 'Revenue Tracking',
    desc: 'Know exactly what you\'re earning, from where, and what to do with it. Budgeting for the indie artist.',
  },
  {
    label: 'Client & Contract Systems',
    desc: 'Templates, agreements, and workflows so you never deliver work without protection again.',
  },
  {
    label: 'Release Planning',
    desc: 'A repeatable rollout system for every drop — from recording to release day to post-promo.',
  },
  {
    label: 'Brand & Presence',
    desc: 'Your EPK, bio, press kit, and online presence — all dialed in and consistent.',
  },
  {
    label: 'AI-Assisted Admin',
    desc: 'Powered by Gemini AI to help you write, plan, and execute — so you spend less time on paperwork.',
  },
];

export default function IndieAdmin() {
  useSEO({
    title: 'Indie Admin OS | Run Your Artist Business — Caligrafi Jones',
    description: 'The operating system for independent artists. Organize your business, protect your work, and build systems that let you focus on the music.',
  });

  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{
        textAlign: 'center',
        padding: '8rem 2rem 6rem',
        background: 'var(--navy-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* subtle grid texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.08) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--gold-primary)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}>
            For Independent Artists
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
            INDIE{' '}
            <span style={{
              color: 'var(--gold-primary)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              textTransform: 'none',
              fontWeight: 400,
            }}>
              Admin
            </span>{' '}
            OS
          </h1>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '560px',
            margin: '0 auto 3rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
          }}>
            Your creative career deserves a real operating system. Stop winging your business
            and start running it — so the music can breathe.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://indie-admin.replit.app"
              target="_blank"
              rel="noreferrer"
              className="cj-btn-gold"
            >
              Access the App
            </a>
            <a
              href="https://caligrafijones.gumroad.com/l/indieadminchecklist"
              target="_blank"
              rel="noreferrer"
              className="cj-btn-outline"
            >
              Get the Free Checklist
            </a>
          </div>
        </div>
      </section>

      {/* ── Pain Points ───────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-bg)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--navy-primary)',
            marginBottom: '0.75rem',
          }}>
            Sound familiar?
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--navy-light)',
            fontSize: '1.1rem',
            marginBottom: '3.5rem',
          }}>
            Every indie artist hits the same wall.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {PAIN_POINTS.map((p, i) => (
              <div key={i} style={{
                background: 'var(--navy-primary)',
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                borderLeft: '4px solid var(--gold-primary)',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  color: 'var(--gold-primary)',
                  marginBottom: '1rem',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}>
                  {p.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Is It ────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-surface)' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '4rem 2.5rem',
          border: '1px solid var(--gold-primary)',
          borderRadius: '24px',
          background: 'linear-gradient(180deg, rgba(212,175,55,0.05) 0%, var(--cream-bg) 100%)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--gold-dark)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1.25rem',
          }}>
            The Solution
          </h3>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--navy-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.15,
          }}>
            An OS for your<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--gold-dark)' }}>
              entire creative business.
            </span>
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--navy-light)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Indie Admin OS is the command center for independent artists who are serious about their careers.
            Built-in systems for business setup, revenue tracking, client management, release planning, and more —
            all powered by AI to keep your admin fast and your creative time protected.
          </p>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--cream-bg)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--navy-primary)',
            marginBottom: '0.75rem',
          }}>
            What's Inside
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--navy-light)',
            fontSize: '1.05rem',
            marginBottom: '3.5rem',
          }}>
            Six modules. One system. Zero guessing.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: 'var(--drop-shadow)',
              }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(212,175,55,0.12)',
                  color: 'var(--gold-dark)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  marginBottom: '1rem',
                }}>
                  Module {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  color: 'var(--navy-primary)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  marginBottom: '0.6rem',
                }}>
                  {f.label}
                </h3>
                <p style={{ color: 'var(--navy-light)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two Paths CTA ─────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem 8rem', backgroundColor: 'var(--navy-primary)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: '#fff',
            marginBottom: '1rem',
          }}>
            Pick Your Entry Point
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1.05rem',
            marginBottom: '3.5rem',
          }}>
            Start wherever makes sense for you.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            {/* Checklist */}
            <a
              href="https://caligrafijones.gumroad.com/l/indieadminchecklist"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                height: '100%',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold-primary)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>📋</div>
                <h3 style={{ color: 'var(--gold-primary)', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  The Indie Admin Checklist
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
                  The foundational checklist for building your artist admin from scratch.
                  A great first step to see exactly what you're missing — and what to fix first.
                </p>
                <span style={{
                  color: 'var(--gold-primary)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  Get it on Gumroad <ChevronRight size={16} />
                </span>
              </div>
            </a>

            {/* App */}
            <a
              href="https://indie-admin.replit.app"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: 'var(--gold-primary)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                height: '100%',
                cursor: 'pointer',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>⚙️</div>
                <h3 style={{ color: 'var(--navy-primary)', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 800 }}>
                  Indie Admin App
                </h3>
                <p style={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
                  The full app — your AI-assisted command center. Currently in beta.
                  Join a small group of artists already building their systems inside.
                </p>
                <span style={{
                  color: 'var(--navy-primary)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  Access the Beta <ChevronRight size={16} />
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
