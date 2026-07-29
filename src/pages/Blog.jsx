import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Blog() {
  useEffect(() => {
    gsap.fromTo('.blog-hero', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.utils.toArray('.blog-card').forEach((card, index) => {
      gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + index * 0.12, ease: 'power3.out' })
    })
  }, [])

  return (
    <div style={{ paddingTop: 64 }}>
      <section className="blog-hero" style={{ padding: '64px 0 40px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="text-dim uppercase" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Stories</p>
          <h1 style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}>BLOG<span className="text-acid">.</span></h1>
          <p style={{ color: 'var(--fg-dim)', fontSize: 14, maxWidth: 620, lineHeight: 1.8, marginTop: 24 }}>
            The latest scene updates, artist spotlights, and must-see moments from Kosovo’s electronic music community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 40 }}>
          <article className="blog-card" style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.15)' }}>
            <div style={{ width: '100%', minHeight: 420, overflow: 'hidden' }}>
              <img
                src="https://i.postimg.cc/9Fzn3Ysf/Save-Clip-App-744169947-1570330177811222-3623588134581771686-n.jpg"
                alt="Sunny Hill Festival stage"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{ padding: '40px', display: 'grid', gap: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 10 }}>Artist Spotlight</p>
                  <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(36px, 5vw, 64px)', margin: 0 }}>Sunny Hill Festival 2026 — URAN B.</h2>
                </div>
                <span style={{ color: 'var(--acid)', fontFamily: 'var(--font-b)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>July 31 • 13:00–15:00</span>
              </div>

              <div style={{ display: 'grid', gap: 18 }}>
                <p style={{ color: 'var(--fg)', fontSize: 14, lineHeight: 1.8 }}>
                  One of Kosovo’s finest takes over The Satellite 📡 Stage at Sunny Hill Festival 2026.
                </p>
                <p style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.8 }}>
                  With decades behind the decks and a deep connection to the underground scene, URAN B. continues to represent Kosovo’s electronic music culture at the highest level.
                </p>
                <p style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.8 }}>
                  Catch him live on July 31 from 13:00 to 15:00 and be part of the journey.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 12 }}>
                {['#TechnoKosovo', '#UranB', '#SunnyHillFestival', '#Prishtina', '#ElectronicMusic'].map(tag => (
                  <span key={tag} style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--acid)', border: '1px solid var(--acid)', padding: '10px 14px', borderRadius: 999 }}>{tag}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="blog-card" style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.15)' }}>
            <div style={{ width: '100%', minHeight: 420, overflow: 'hidden' }}>
              <img
                src="https://i.postimg.cc/fRMGHGM2/Save-Clip-App-759300584-18164476138456503-7508485321891172940-n.jpg"
                alt="Street Party Prishtina"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{ padding: '40px', display: 'grid', gap: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 10 }}>Scene Report</p>
                  <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(36px, 5vw, 64px)', margin: 0 }}>Street Party Prishtina — Edition 7</h2>
                </div>
                <span style={{ color: 'var(--acid)', fontFamily: 'var(--font-b)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Aug 8 • All Afternoon</span>
              </div>

              <div style={{ display: 'grid', gap: 18 }}>
                <p style={{ color: 'var(--fg)', fontSize: 14, lineHeight: 1.8 }}>
                  Street Party Prishtina returns for its 7th edition on 08.08.2026 at Rr. Fehmi Agani (te Kafet e Vogla), bringing the city together for an open-air celebration of music, art, and community.
                </p>
                <p style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.8 }}>
                  This beloved urban festival showcases local talent and creative energy from dusk till late, with Luna SKye, Jeton Berisha, Luk, Neritaan, Adrian Berisha, and LA Baresha ready to light up the street.
                </p>
                <p style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.8 }}>
                  Expect a weekend of live performances, city beats, and the kind of communal vibe that makes Prishtina’s open-air gatherings unforgettable.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 12 }}>
                {['#TechnoKosovo', '#StreetParty', '#Prishtina', '#NXT LVL', '#ElectronicMusic'].map(tag => (
                  <span key={tag} style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--acid)', border: '1px solid var(--acid)', padding: '10px 14px', borderRadius: 999 }}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
