import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const links = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/artists', label: 'Artists' },
  { to: '/about', label: 'About' },
  { to: '/donate', label: 'Donate' },
]

export default function Nav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo('.mobile-menu', { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.25 })
    }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      borderBottom: scrolled ? '1px solid rgba(240,235,227,0.1)' : '1px solid transparent',
      background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.4s',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-d)', fontSize: 22, letterSpacing: '0.08em', color: 'var(--fg)' }}>TECHNO</span>
          <span style={{ fontFamily: 'var(--font-d)', fontSize: 22, letterSpacing: '0.08em', color: 'var(--acid)' }}>KOSOVO</span>
        </Link>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: 'var(--font-b)', fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', textDecoration: 'none',
              color: isActive(l.to) ? 'var(--acid)' : 'var(--fg-dim)',
              transition: 'color 0.2s',
              paddingBottom: 2,
              borderBottom: isActive(l.to) ? '1px solid var(--acid)' : '1px solid transparent',
            }}>{l.label}</Link>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(m => !m)} style={{
          display: 'none', background: 'none', border: 'none', color: 'var(--fg)',
          fontFamily: 'var(--font-b)', fontSize: 11, letterSpacing: '0.1em',
        }} className="hamburger">
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute', top: 64, left: 0, right: 0,
          background: 'rgba(8,8,8,0.98)', borderBottom: '1px solid var(--border)',
          padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              borderBottom: '1px solid var(--border)', textAlign: 'left', padding: '16px 0',
              fontFamily: 'var(--font-d)', fontSize: 28, letterSpacing: '0.06em', textDecoration: 'none',
              color: isActive(l.to) ? 'var(--acid)' : 'var(--fg)',
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
