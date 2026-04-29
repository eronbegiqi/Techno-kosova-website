import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: 'Blerta Hoxha', role: 'Co-founder / Events Director' },
  { name: 'Mentor Gashi', role: 'Co-founder / Creative Director' },
  { name: 'Arta Kelmendi', role: 'Artist Bookings' },
  { name: 'Liridon Berisha', role: 'Media & Communications' },
  { name: 'Fjolla Selimi', role: 'Community & Partnerships' },
  { name: 'Granit Morina', role: 'Technical Production' },
]

export default function About() {
  useEffect(() => {
    gsap.fromTo('.about-hero', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
    gsap.utils.toArray('.reveal-about').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' } })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="about-hero" style={{ padding: '64px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="text-dim uppercase" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Our Story</p>
          <h1 style={{ fontSize: 'clamp(64px, 10vw, 130px)', marginBottom: 48 }}>ABOUT<span className="text-acid">.</span></h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <p style={{ color: 'var(--fg)', fontSize: 15, lineHeight: 1.9 }}>
              Techno Kosovo was founded in Prishtina in 2019 by a group of DJs, producers,
              and music lovers who saw a need for a dedicated platform for underground
              electronic culture in the country. Starting as a series of small basement parties,
              we have grown into a full media and events organisation.
            </p>
            <p style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.9 }}>
              Kosovo has a young, hungry population with deep roots in music and culture.
              The electronic music scene here is raw, authentic, and entirely self-built —
              no major label support, no heritage institution. Just people who care about the music.
              Techno Kosovo is here to amplify that.
            </p>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <h2 className="reveal-about" style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: 64 }}>OUR<br /><span className="text-acid">MISSION</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: 'var(--border)' }}>
            {[
              ['Platform', 'Give Kosovo-based electronic artists visibility locally and internationally — through media, bookings, and events.'],
              ['Community', 'Build a safe, inclusive, and passionate community of electronic music lovers across all of Kosovo.'],
              ['Education', 'Run workshops, panels, and open sessions for the next generation of producers, DJs, and promoters.'],
              ['Culture', 'Position Kosovo as a credible and exciting node on the global underground electronic music map.'],
            ].map(([t, b]) => (
              <div key={t} className="reveal-about" style={{ background: 'var(--bg)', padding: 36 }}>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 11, color: 'var(--acid)', letterSpacing: '0.2em', marginBottom: 16 }}>◆ {t.toUpperCase()}</div>
                <p style={{ color: 'var(--fg-dim)', fontSize: 13, lineHeight: 1.8 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="reveal-about" style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: 48 }}>THE<br /><span className="text-acid">TEAM</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 1, background: 'var(--border)' }}>
            {team.map((m, i) => (
              <div key={m.name} className="reveal-about card" style={{ background: 'var(--bg)', padding: 32 }}>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.16em', marginBottom: 20 }}>0{i + 1}</div>
                <div style={{ width: 64, height: 64, background: 'var(--bg3)', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'var(--font-d)', fontSize: 24, color: 'var(--acid)' }}>{m.name[0]}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-d)', fontSize: 24, marginBottom: 6 }}>{m.name}</h4>
                <p style={{ color: 'var(--fg-dim)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--border)', padding: '56px 0' }}>
        <div className="container">
          <h3 className="reveal-about" style={{ fontFamily: 'var(--font-d)', fontSize: 32, marginBottom: 32, color: 'var(--fg-dim)' }}>AS SEEN IN</h3>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center' }}>
            {['Resident Advisor', 'Mixmag Balkans', 'XLR8R', 'Radio Prishtina', 'Kosovo 2.0'].map(p => (
              <span key={p} className="reveal-about" style={{ fontFamily: 'var(--font-d)', fontSize: 22, color: 'var(--fg-faint)', letterSpacing: '0.06em' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
