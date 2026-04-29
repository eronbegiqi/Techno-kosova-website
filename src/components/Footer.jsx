import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' }, { to: '/events', label: 'Events' },
  { to: '/artists', label: 'Artists' }, { to: '/about', label: 'About' },
  { to: '/donate', label: 'Donate' }, { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginBottom: 64, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-d)', fontSize: 32, lineHeight: 1, marginBottom: 16 }}>
              TECHNO<span style={{ color: 'var(--acid)' }}>KOSOVO</span>
            </div>
            <p style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.8, maxWidth: 260 }}>
              Electronic music, nightlife, and underground culture in Kosovo. Based in Prishtinë.
            </p>
          </div>

          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 20 }}>Navigate</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(l => (
                <Link key={l.to} to={l.to} style={{
                  fontFamily: 'var(--font-b)', fontSize: 12, letterSpacing: '0.08em',
                  color: 'var(--fg-dim)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--acid)'}
                  onMouseLeave={e => e.target.style.color = 'var(--fg-dim)'}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 20 }}>Stay Connected</p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
              {['Instagram', 'Facebook', 'SoundCloud', 'RA'].map(s => (
                <a key={s} href="https://example.com" target="_blank" rel="noreferrer" style={{
                  fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--fg-dim)', textDecoration: 'none', border: '1px solid var(--border)',
                  padding: '6px 12px', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.target.style.color = 'var(--acid)'; e.target.style.borderColor = 'var(--acid)' }}
                  onMouseLeave={e => { e.target.style.color = 'var(--fg-dim)'; e.target.style.borderColor = 'var(--border)' }}
                >{s}</a>
              ))}
            </div>
            <p style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 10 }}>Newsletter</p>
            <div style={{ display: 'flex' }}>
              <input placeholder="your@email.com" style={{
                background: 'var(--bg2)', border: '1px solid var(--border)', borderRight: 'none',
                color: 'var(--fg)', fontFamily: 'var(--font-b)', fontSize: 11, padding: '10px 14px',
                outline: 'none', flex: 1,
              }} />
              <button className="btn" style={{ fontSize: 10, padding: '10px 16px', flexShrink: 0 }}>→</button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--fg-faint)', fontSize: 10, letterSpacing: '0.1em' }}>
            © 2026 TECHNO KOSOVO — ALL RIGHTS RESERVED
          </p>
          <p style={{ color: 'var(--fg-faint)', fontSize: 10, letterSpacing: '0.08em' }}>
            PRISHTINË, KOSOVO ◆ EST. 2019
          </p>
        </div>
      </div>
    </footer>
  )
}
