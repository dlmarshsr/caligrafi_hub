import './Pages.css';

export default function Production() {
  return (
    <div className="cj-container">
      <section className="cj-prod-hero animate-fade-in-up">
        <h3 style={{ color: 'var(--gold-primary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '1rem' }}>Full Stack Production</h3>
        <h1 className="cj-prod-title">
          THE <span className="cj-momentum">MOMENTUM</span> MODEL
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto', color: '#FFF' }}>
          A servant-focused approach aimed at helping independent artists create a career and a catalog that lasts.
        </p>
      </section>

      {/* The Real Struggle / Why they need this */}
      <section className="animate-fade-in-up delay-100" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 className="cj-text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>The Real Struggle</h2>
        <div className="cj-grid" style={{ gap: '2rem' }}>
          <div className="cj-glass-card" style={{ padding: '2rem', background: 'var(--navy-light)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--gold-primary)', marginBottom: '1rem' }}>"I know I have a unique sound, but I can't capture it"</h3>
            <p style={{ fontSize: '1.1rem', color: '#FFF' }}>You hear it in your head, but when you record, it doesn't match your vision. You're stuck between where you are and where you know you could be.</p>
          </div>
          <div className="cj-glass-card" style={{ padding: '2rem', background: 'var(--navy-light)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--gold-primary)', marginBottom: '1rem' }}>"I feel like I'm copying other artists"</h3>
            <p style={{ fontSize: '1.1rem', color: '#FFF' }}>You're making music, but it doesn't sound like YOU yet. You're borrowing from everyone else's playbook instead of developing your own authentic style.</p>
          </div>
          <div className="cj-glass-card" style={{ padding: '2rem', background: 'var(--navy-light)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--gold-primary)', marginBottom: '1rem' }}>"I'm making music, but not growing as an artist"</h3>
            <p style={{ fontSize: '1.1rem', color: '#FFF' }}>You're putting out tracks, but you don't feel like you're actually developing. You need intentional guidance and a clear path forward.</p>
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="animate-fade-in-up delay-200" style={{ maxWidth: '1000px', margin: '6rem auto', padding: '0 2rem' }}>
        <h2 className="cj-text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>The Value of Momentum</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Going it alone */}
          <div style={{ background: 'var(--navy-light)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ textAlign: 'center', color: '#fff', marginBottom: '2rem', fontSize: '1.5rem' }}>Going It Alone</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><span style={{color:'#FFF'}}>Studio Session</span><span style={{color:'#var(--gold-bright)'}}>$100-$125</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><span style={{color:'#FFF'}}>Audio Engineer</span><span style={{color:'#var(--gold-bright)'}}>$50-$100</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><span style={{color:'#FFF'}}>Mixing (1 track)</span><span style={{color:'#var(--gold-bright)'}}>$75-$150</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><span style={{color:'#FFF'}}>Mastering</span><span style={{color:'#var(--gold-bright)'}}>$100</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><span style={{color:'#FFF'}}>Brand Strategy</span><span style={{color:'#var(--gold-bright)'}}>$500-$1000</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><span style={{color:'#FFF'}}>Marketing Agency</span><span style={{color:'#var(--gold-bright)'}}>$1000-$2000</span></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem', marginTop: '1rem', borderTop: '2px solid rgba(255,255,255,0.2)', fontWeight: 'bold' }}>
              <span style={{color:'#FFF', fontSize: '1.3rem'}}>Monthly Total</span>
              <span style={{color: '#ff6b6b', fontSize: '1.3rem'}}>$2,125 - $4,025</span>
            </div>
          </div>

          {/* The Momentum Model */}
          <div style={{ background: 'linear-gradient(135deg, rgba(230,200,117,0.15), var(--navy-light))', padding: '3rem', borderRadius: '24px', border: '1px solid var(--gold-primary)', position: 'relative' }}>
             <h3 style={{ textAlign: 'center', color: 'var(--gold-bright)', marginBottom: '2rem', fontSize: '1.5rem' }}>The Momentum Model</h3>
             <ul className="cj-tier-features" style={{ color: '#FFF' }}>
                <li>Studio Sessions Included</li>
                <li>Technical Training & Guidance</li>
                <li>Full Vocal Engineering</li>
                <li>Comprehensive Mix & Mastering</li>
                <li>Distribution & Registration Setup</li>
                <li>Long-Term Marketing Strategy</li>
                <li>Brand Development</li>
                <li>Personal Mentorship</li>
             </ul>
             <div style={{ textAlign: 'center', marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(230,200,117,0.1)', borderRadius: '12px' }}>
                <strong style={{ color: 'var(--gold-bright)', fontSize: '1.2rem' }}>Save thousands per year while getting personalized, servant-focused mentorship.</strong>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: '1000px', margin: '4rem auto', padding: '3rem', background: 'var(--navy-light)', borderRadius: '24px', border: '1px solid var(--glass-border)' }} className="animate-fade-in-up delay-300">
        <h2 className="cj-text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>What Artists Say</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', borderLeft: '4px solid var(--gold-primary)', padding: '2rem', background: 'var(--navy-surface)', borderRadius: '12px' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#FFF', fontSize: '1.15rem' }}>"Ultimate professional... Prolific writer and producer. Hears the in between and knows what sounds to create to bring the music to life."</p>
            <strong style={{ color: 'var(--gold-bright)' }}>- Shaunte U. (R&B Artist)</strong>
          </div>
          <div style={{ flex: 1, minWidth: '300px', borderLeft: '4px solid var(--gold-primary)', padding: '2rem', background: 'var(--navy-surface)', borderRadius: '12px' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#FFF', fontSize: '1.15rem' }}>"Cali is definitely someone worth talking to with regards to planning, and carrying out that plan... Always beautiful when you hear things aloud and they align."</p>
            <strong style={{ color: 'var(--gold-bright)' }}>- Christian Torres (The Real Nobody)</strong>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="animate-fade-in-up delay-400" style={{ maxWidth: '800px', margin: '4rem auto 8rem', textAlign: 'center', padding: '0 2rem' }}>
        <h2 className="cj-text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Build Momentum?</h2>
        <p style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: '#FFF' }}>
          Let's see if we're a fit for your vision. Book a quick discovery call below and let's talk about your next project.
        </p>
        <div style={{ border: '2px dashed var(--gold-primary)', padding: '4rem 2rem', borderRadius: '24px', color: 'var(--gold-primary)', background: 'var(--navy-light)' }}>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#fff' }}>Use the calendar widget below or email us directly to book a session:</p>
          <a href="mailto:music@caligrafijones.com" className="cj-btn-gold" style={{ display: 'inline-block', fontSize: '1.1rem' }}>music@caligrafijones.com</a>
          <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>[ Insert GoHighLevel / Calendly Embed Here ]</p>
        </div>
      </section>
    </div>
  );
}
