import './Pages.css';
import { ExternalLink, Rss } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const ARTICLES = [
  {
    href: 'https://caligrafijones.substack.com/p/the-bed-knows',
    img: 'https://images.unsplash.com/photo-1742319096912-7bb94fdfeb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    date: 'Mar 13, 2026',
    title: 'The Bed Knows',
    excerpt: 'What you do with small things is who you are with large things. Solomon got there first — and so did the empty tomb.',
  },
  {
    href: 'https://caligrafijones.substack.com/p/useful-or-useless',
    img: 'https://images.unsplash.com/photo-1611098756677-3b1abc307b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    date: 'Feb 12, 2026',
    title: 'Neither Hot Nor Cold',
    excerpt: "The Laodiceans had a water problem. Jesus used their daily reality to diagnose their spiritual condition. You don't have to be loud to be useful — you just have to be clear.",
  },
  {
    href: 'https://caligrafijones.substack.com/p/the-world-wants-you-to-be-a-brick',
    img: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe1f802a5-dc14-416d-a1b6-707c8b8a5529_1536x1024.png',
    date: 'Jan 6, 2026',
    title: 'The World Wants You to Be a Brick. God Made You a Stone.',
    excerpt: 'Bricks are manufactured. Stones are formed. The Bible keeps coming back to this image — and so does your life.',
  },
];

export default function CrewNotes() {
  useSEO({
    title: 'Crew Notes | Biblical Breakdowns — Caligrafi Jones',
    description: 'Weekly deep dives into Scripture with original Hebrew and Greek context. Crew Notes delivers rigorous biblical scholarship for people serious about the Word.',
  });

  return (
    <div className="cj-container">

      {/* Hero */}
      <section className="cj-crew-hero animate-fade-in-up" style={{ padding: '6rem 2rem' }}>
        <img
          src="/images/crew-notes-logo.png"
          alt="Crew Notes"
          style={{ maxWidth: '500px', width: '100%', height: 'auto', marginBottom: '2.5rem', display: 'block', margin: '0 auto 2.5rem', borderRadius: '16px' }}
        />
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--navy-primary)' }}>
          BIBLICAL BREAKDOWNS
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--navy-light)' }}>
          Weekly deep dives into scripture, theology, and the practical discipline required to keep JOY in a chaotic world.
        </p>
      </section>

      {/* Article cards */}
      <section className="animate-fade-in-up delay-100" style={{ padding: '2rem 0 6rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--navy-primary)' }}>
          Latest Dispatches
        </h2>

        <div className="cj-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {ARTICLES.map((article, i) => (
            <a
              key={i}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="cj-glass-card"
              style={{ padding: 0, display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            >
              {/* Cover image */}
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderRadius: '24px 24px 0 0' }}>
                <img
                  src={article.img}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt={article.title}
                />
              </div>

              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Date */}
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--gold-dark)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {article.date}
                </p>

                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--navy-primary)', lineHeight: 1.3 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--navy-light)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
                  {article.excerpt}
                </p>
                <span className="cj-text-gradient" style={{ fontWeight: 700, display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                  Read on Substack <ExternalLink size={14} style={{ marginLeft: '6px' }}/>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="cj-optin-section animate-fade-in-up" style={{ padding: '4rem 2rem', border: 'none', background: 'transparent' }}>
        <h2 className="cj-text-gradient" style={{ fontSize: '2.5rem' }}>Join The Community</h2>
        <p style={{ marginBottom: '2.5rem', fontSize: '1.15rem', color: 'var(--navy-light)' }}>
          Get <strong style={{ color: 'var(--navy-primary)' }}>Crew Notes</strong> delivered to your inbox every week. No spam. Just solid scholarship.
        </p>
        <a
          href="https://caligrafijones.substack.com/"
          target="_blank"
          rel="noreferrer"
          className="cj-btn-gold"
          style={{ fontSize: '1.1rem', padding: '1.2rem 3rem', display: 'inline-flex', alignItems: 'center' }}
        >
          <Rss size={20} style={{ marginRight: '10px' }} /> Subscribe on Substack
        </a>
      </section>

    </div>
  );
}
