import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { artists } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Artists() {
  const [selected, setSelected] = useState(null)
  const filtered = artists
  const artist = selected ? artists.find(a => a.id === selected) : null

  useEffect(() => {
    gsap.fromTo('.artists-header', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.utils.toArray('.artist-card').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' } })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  useEffect(() => {
    if (selected) {
      gsap.fromTo('.artist-modal-inner', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' })
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="artists-header" style={{ borderBottom: '1px solid var(--border)', padding: '64px 0 48px' }}>
        <div className="container">
          <p className="text-dim uppercase" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Roster</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h1 style={{ fontSize: 'clamp(64px, 10vw, 140px)' }}>ARTISTS<span className="text-acid">.</span></h1>
          </div>
        </div>
      </div>

      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 1, background: 'var(--border)' }}>
          {filtered.map(a => (
            <div key={a.id} className="artist-card card" style={{ background: 'var(--bg)', cursor: 'pointer' }}
              onClick={() => setSelected(a.id)}>
              <div className="video-placeholder" style={{ height: 200 }}>
                <div className="play-icon" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)' }}>
                  <p style={{ fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em' }}>{a.videoLabel}</p>
                </div>
              </div>

              <div style={{ padding: '24px 24px 28px' }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
                  {a.tags.map(t => <span key={t} className="tag tag-dim">{t}</span>)}
                </div>
                <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 52, lineHeight: 0.95, marginBottom: 6 }}>{a.name}</h3>
                <p style={{ color: 'var(--fg-dim)', fontSize: 11, letterSpacing: '0.08em', marginBottom: 16 }}>{a.realName} — {a.origin}</p>
                <p style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.7 }}>{a.bio.slice(0, 120)}…</p>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    {a.links.soundcloud && <ExternalLink href={a.links.soundcloud} label="SC" />}
                    {a.links.instagram && <ExternalLink href={a.links.instagram} label="IG" />}
                    {a.links.ra && <ExternalLink href={a.links.ra} label="RA" />}
                    {a.links.bandcamp && <ExternalLink href={a.links.bandcamp} label="BC" />}
                  </div>
                  <span style={{ color: 'var(--acid)', fontSize: 11, letterSpacing: '0.08em' }}>View Profile →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {artist && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(8,8,8,0.95)',
          zIndex: 2000, overflow: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '48px 24px',
        }}>
          <div className="artist-modal-inner" onClick={e => e.stopPropagation()} style={{
            background: 'var(--bg2)', border: '1px solid var(--border)', maxWidth: 760, width: '100%',
          }}>
            <div className="video-placeholder" style={{ height: 360 }}>
              <div className="play-icon" style={{ width: 64, height: 64 }} />
              <div style={{ position: 'absolute', top: 20, right: 20 }}>
                <button onClick={() => setSelected(null)} style={{
                  background: 'rgba(8,8,8,0.8)', border: '1px solid var(--border)', color: 'var(--fg)',
                  fontFamily: 'var(--font-b)', fontSize: 10, letterSpacing: '0.12em', padding: '8px 16px',
                }}>✕ CLOSE</button>
              </div>
              <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                <p style={{ fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em' }}>{artist.videoLabel}</p>
              </div>
            </div>

            <div style={{ padding: 40 }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
                {artist.tags.map(t => <span key={t} className="tag tag-dim">{t}</span>)}
              </div>
              <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 72, lineHeight: 0.95, marginBottom: 8 }}>{artist.name}</h2>
              <p style={{ color: 'var(--fg-dim)', fontSize: 12, letterSpacing: '0.1em', marginBottom: 28 }}>{artist.realName} — {artist.origin}</p>
              <p style={{ color: 'var(--fg)', fontSize: 14, lineHeight: 1.8, marginBottom: 36 }}>{artist.bio}</p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {artist.links.soundcloud && <a href={artist.links.soundcloud} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '10px 24px', fontSize: 11 }}>SoundCloud ↗</a>}
                {artist.links.instagram && <a href={artist.links.instagram} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '10px 24px', fontSize: 11 }}>Instagram ↗</a>}
                {artist.links.ra && <a href={artist.links.ra} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '10px 24px', fontSize: 11 }}>Resident Advisor ↗</a>}
                {artist.links.bandcamp && <a href={artist.links.bandcamp} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '10px 24px', fontSize: 11 }}>Bandcamp ↗</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ExternalLink({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{
      color: 'var(--fg-dim)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
      textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2, transition: 'color 0.2s',
    }}
      onMouseEnter={e => e.target.style.color = 'var(--acid)'}
      onMouseLeave={e => e.target.style.color = 'var(--fg-dim)'}
    >{label}</a>
  )
}
