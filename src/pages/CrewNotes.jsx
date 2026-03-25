import './Pages.css';
import { ExternalLink, Rss } from 'lucide-react';

export default function CrewNotes() {
  return (
    <div className="cj-container">
      <section className="cj-crew-hero animate-fade-in-up" style={{ padding: '6rem 2rem' }}>
        <img 
          src="/images/media__1773877565356.jpg" 
          alt="Crew Notes Graphic" 
          style={{ maxWidth: '600px', width: '100%', height: 'auto', marginBottom: '3rem', display: 'block', margin: '0 auto', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
        />
        
        <h2 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>BIBLICAL BREAKDOWNS</h2>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
          Weekly deep dives into scripture, theology, and the practical discipline required to Keep Joy in a chaotic world.
        </p>
      </section>

      {/* Substack Feed Mockup replacing Placards */}
      <section className="animate-fade-in-up delay-100" style={{ padding: '2rem 0 6rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Latest Dispatches</h2>
        
        <div className="cj-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Post 1 */}
          <a href="https://caligrafijones.substack.com/" target="_blank" rel="noreferrer" className="cj-glass-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
              <img src="/images/media__1773877371009.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Ephesus Study" />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#FFF' }}>The Ephesian Compromise</h3>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                A deep dive into the first church of Revelation and what it really means to lose your first love.
              </p>
              <span className="cj-text-gradient" style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Read on Substack <ExternalLink size={16} style={{ marginLeft: '8px' }}/>
              </span>
            </div>
          </a>

          {/* Post 2 */}
          <a href="https://caligrafijones.substack.com/" target="_blank" rel="noreferrer" className="cj-glass-card delay-100" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
              <img src="/images/media__1773877342021.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Joy Devotional" />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#FFF' }}>Discipline & The Creative</h3>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                Why your gifts require stewardship, and how to build a routine that honors your calling.
              </p>
              <span className="cj-text-gradient" style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Read on Substack <ExternalLink size={16} style={{ marginLeft: '8px' }}/>
              </span>
            </div>
          </a>

          {/* Post 3 */}
          <a href="https://caligrafijones.substack.com/" target="_blank" rel="noreferrer" className="cj-glass-card delay-200" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
               <img src="/images/media__1773877494574.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Original Language" />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#FFF' }}>Notes on Original Language</h3>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                Unpacking the distinct weights of Agapé vs Phileo in modern context.
              </p>
              <span className="cj-text-gradient" style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Read on Substack <ExternalLink size={16} style={{ marginLeft: '8px' }}/>
              </span>
            </div>
          </a>

        </div>
      </section>

      {/* Substack Subscribe CTA */}
      <section className="cj-optin-section animate-fade-in-up" style={{ padding: '4rem 2rem', border: 'none', background: 'transparent' }}>
        <h2 className="cj-text-gradient" style={{ fontSize: '2.5rem' }}>Join The Community</h2>
        <p style={{ marginBottom: '2.5rem', fontSize: '1.15rem' }}>
          Get the <strong>Crew Notes</strong> biblical study guide delivered directly to your inbox every week.
        </p>
        <a href="https://caligrafijones.substack.com/" target="_blank" rel="noreferrer" className="cj-btn-gold" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
          <Rss size={20} style={{ marginRight: '10px' }} /> Subscribe on Substack
        </a>
      </section>
    </div>
  );
}
