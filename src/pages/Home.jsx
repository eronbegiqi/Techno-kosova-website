import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { events, artists } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()

const eventDate = (date) => {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const today = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  return date
}

export default function Home() {
  const now = today()
  const upcoming = events.filter(e => !e.canceled && eventDate(e.date) >= now).sort((a, b) => eventDate(a.date) - eventDate(b.date))
  const featured = upcoming.filter(e => e.featured).slice(0, 3)
  const featuredArtists = artists.slice(0, 4)

  useEffect(() => {
    gsap.fromTo('.hero-word', { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power4.out', delay: 0.2 })
    gsap.fromTo('.hero-sub', { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' })
    gsap.fromTo('.hero-meta', { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.1 })

    gsap.utils.toArray('.reveal-up').forEach(el => {
      gsap.fromTo(el, { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' } })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 32px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(240,235,227,0.12) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(240,235,227,0.03) 0px, rgba(240,235,227,0.03) 1px, transparent 1px, transparent 160px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--font-d)', fontSize: 'min(22vw, 320px)', color: 'rgba(240,235,227,0.03)', whiteSpace: 'nowrap', letterSpacing: '-0.02em', userSelect: 'none', pointerEvents: 'none' }}>
          UNDERGROUND
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div className="hero-meta" style={{ display: 'flex', gap: 24, marginBottom: 32, alignItems: 'center' }}>
            <span className="tag">Prishtinë, Kosovo</span>
            <span style={{ color: 'var(--fg-dim)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Est. 2019</span>
            <span style={{ color: 'var(--acid)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>— Upcoming: {upcoming[0]?.date || events[0].date}</span>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: 8 }}>
            <h1 style={{ fontSize: 'min(18vw, 240px)', display: 'flex', gap: '0.12em', flexWrap: 'wrap' }}>
              {'TECHNO'.split('').map((c, i) => (
                <span key={i} className="hero-word" style={{ display: 'inline-block', color: 'var(--fg)' }}>{c}</span>
              ))}
            </h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: 40 }}>
            <h1 style={{ fontSize: 'min(18vw, 240px)', display: 'flex', gap: '0.12em', flexWrap: 'wrap' }}>
              {'KOSOVO'.split('').map((c, i) => (
                <span key={i + 6} className="hero-word" style={{ display: 'inline-block', color: 'var(--acid)' }}>{c}</span>
              ))}
            </h1>
          </div>

          <div className="hero-sub" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <p style={{ color: 'var(--fg-dim)', fontSize: 14, maxWidth: 480, lineHeight: 1.7 }}>
              Electronic music, nightlife, and underground culture<br />
              in Kosovo and the region. Discover events, artists, and the scene.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link to="/events" className="btn">View Events</Link>
              <Link to="/artists" className="btn btn-ghost">Artists</Link>
            </div>
          </div>
        </div>

        <div className="hero-meta" style={{ position: 'absolute', right: 32, bottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 1, height: 64, background: 'linear-gradient(to bottom, transparent, var(--acid))', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-dim)', writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <p className="text-dim uppercase reveal-up" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Upcoming</p>
              <h2 className="reveal-up" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>FEATURED<br /><span className="text-acid">EVENTS</span></h2>
            </div>
            <Link to="/events" className="btn btn-ghost reveal-up" style={{ whiteSpace: 'nowrap' }}>All Events →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'var(--border)' }}>
            {featured.map((ev, i) => {
              const showTicketActions = ev.id !== 'oda-haliti-akti-i-hapjes'

              return (
                <div key={ev.id} className="card reveal-up" style={{ background: 'var(--bg)', padding: 32, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 320, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: ev.posterColor, opacity: 0.4 }} />
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                      {showTicketActions && <span className="tag">{ev.soldOut ? 'SOLD OUT' : 'TICKETS AVAILABLE'}</span>}
                      <span style={{ fontFamily: 'var(--font-d)', fontSize: 13, color: 'var(--fg-dim)', letterSpacing: '0.08em' }}>0{i + 1}</span>
                    </div>
                  <p style={{ fontSize: 11, color: 'var(--acid)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>{formatDate(ev.date)} — {ev.time}</p>
                  {ev.image && (
                    <img src={ev.image} alt={ev.title} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 18, marginBottom: 18 }} />
                  )}
                  <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 48, lineHeight: 1, marginBottom: 4 }}>{ev.title}</h3>
                  <p style={{ color: 'var(--fg-dim)', fontSize: 12, marginBottom: 16 }}>{ev.venue} · {ev.address}</p>
                  <p style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.6, marginBottom: 20 }}>{ev.description}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                    {ev.lineup.slice(0, 3).map(n => <span key={n} className="tag tag-dim">{n}</span>)}
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* <span style={{ color: 'var(--acid)', fontFamily: 'var(--font-b)', fontSize: 12 }}>{ev.price}</span> */}
                    {showTicketActions && !ev.soldOut && (
                      <a href={ev.ticketLink} target="_blank" rel="noreferrer" className="btn" style={{ padding: '10px 20px', fontSize: 11 }}>Buy Tickets</a>
                    )}
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FEATURED ARTISTS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <p className="text-dim uppercase reveal-up" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Roster</p>
              <h2 className="reveal-up" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>THE<br /><span className="text-acid">ARTISTS</span></h2>
            </div>
            <Link to="/artists" className="btn btn-ghost reveal-up">Full Roster →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--border)' }}>
            {featuredArtists.map(a => (
              <Link key={a.id} to="/artists" style={{ textDecoration: 'none' }}>
                <div className="card reveal-up" style={{ background: 'var(--bg)', padding: 28, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
                  <div className="video-placeholder" style={{
                    marginBottom: 4,
                    backgroundImage: a.videoId ? `url(https://img.youtube.com/vi/${a.videoId}/hqdefault.jpg)` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                    <div style={{ position: 'absolute', bottom: 10, left: 12, right: 12, display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.08em' }}>{a.videoLabel}</span>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 36 }}>{a.name}</h3>
                  <p style={{ color: 'var(--fg-dim)', fontSize: 11 }}>{a.realName} — {a.origin}</p>
                  <p style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.6 }}>{a.bio.slice(0, 100)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT STRIP */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p className="text-dim uppercase reveal-up" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Who We Are</p>
              <h2 className="reveal-up" style={{ fontSize: 'clamp(48px, 6vw, 80px)', marginBottom: 24 }}>KOSOVO'S<br /><span className="text-acid">UNDERGROUND</span><br />VOICE</h2>
              <p className="reveal-up" style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.8, marginBottom: 32 }}>
                Techno Kosovo is a media and events platform dedicated to the growth
                of electronic music culture across Kosovo, Albania, the wider Balkan region and Europe.
                We connect artists, promoters, and audiences — local and international.
              </p>
              <Link to="/about" className="btn btn-ghost reveal-up">Read More →</Link>
            </div>
            <div className="reveal-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
              {[['72+', 'PROJECTS & COLLABS'], ['120+', 'FEATURED ARTISTS'], ['3K+', 'Community Members'], ['4', 'Country Covered']].map(([n, l]) => (
                <div key={l} style={{ background: 'var(--bg)', padding: 32 }}>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 56, color: 'var(--acid)', lineHeight: 1 }}>{n}</div>
                  <div style={{ color: 'var(--fg-dim)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="text-dim uppercase reveal-up" style={{ fontSize: 11, marginBottom: 16, letterSpacing: '0.16em' }}>— Support the Scene</p>
          <h2 className="reveal-up" style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: 24 }}>KEEP THE<br /><span className="text-acid">UNDERGROUND</span> ALIVE</h2>
          <p className="reveal-up" style={{ color: 'var(--fg-dim)', fontSize: 14, maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.8 }}>
            Techno Kosovo is community-funded. Your support keeps events accessible, artists paid fairly, and the culture growing.
          </p>
          <a href="https://www.ko-fi.com/TechnoKosovo" target="_blank" rel="noopener noreferrer" className="btn reveal-up">Support Us</a>
        </div>
      </section>
    </div>
  )
}
