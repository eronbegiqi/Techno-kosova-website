import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Blog() {
  useEffect(() => {
    gsap.fromTo('.blog-hero', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.utils.toArray('.blog-card').forEach((card, index) => {
      gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + index * 0.12, ease: 'power3.out' })
    })
  }, [])

  const posts = [
    {
      title: "KISSMET X NXT LVL N'maje vol2",
      category: 'Event Preview',
      date: '2026-08-21',
      label: 'Aug 21 • TBA',
      image: 'https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMTYyZTM4YjQzMTcyMTNiNDZjMDk0NzNiMmYwOWYxMzIyMzdmOGQyNC5wbmc=',
      lines: [
        'KISSMET X NXT LVL N\'MAJE vol2 returns to the peak of Golesh on 21 August 2026 for a hilltop gathering of sound and community.',
        "Expect an intimate, carefully curated lineup featuring Olsvangèr, Sasho Uzun, Zogai, Erleta, and Uran B., with sunset-to-night sets and a raw, atmospheric vibe.",
        'Tickets are available on Resident Advisor — bring warm layers and an appetite for long, immersive performances in a stunning natural setting.',
      ],
      tags: ['#KISSMET', '#NXT LVL', '#Golesh', '#Prishtina', '#ElectronicMusic'],
    },
    {
      title: 'ANITË at Sunny Hill Festival 2026',
      category: 'Artist Spotlight',
      date: '2026-08-02',
      label: 'Aug 2 • 13:00–15:00',
      image: 'https://i.postimg.cc/508G69bK/Save-Clip-App-740608561-1570310607813179-5713678400961185760-n.jpg',
      lines: [
        'From local scene to major festival stages, ANITË continues to make her mark with a unique sound, refined selection, and a growing international presence.',
        'One of Kosovo’s most exciting electronic music exports joins Sunny Hill Festival 2026, bringing her signature energy to The Satellite 📡 Stage.',
        'Catch ANITË live on August 2 from 13:00 to 15:00.',
      ],
      tags: ['#TechnoKosovo', '#Anitë', '#SunnyHillFestival', '#Prishtina', '#ElectronicMusic', '#Kosovo'],
    },
    {
      title: 'Street Party Prishtina — Edition 7',
      category: 'Scene Report',
      date: '2026-08-08',
      label: 'Aug 8 • All Afternoon',
      image: 'https://i.postimg.cc/fRMGHGM2/Save-Clip-App-759300584-18164476138456503-7508485321891172940-n.jpg',
      lines: [
        'Street Party Prishtina returns for its 7th edition on 08.08.2026 at Rr. Fehmi Agani (te Kafet e Vogla), bringing the city together for an open-air celebration of music, art, and community.',
        'This beloved urban festival showcases local talent and creative energy from dusk till late, with Luna SKye, Jeton Berisha, Luk, Neritaan, Adrian Berisha, and LA Baresha ready to light up the street.',
        'Expect a weekend of live performances, city beats, and the kind of communal vibe that makes Prishtina’s open-air gatherings unforgettable.',
      ],
      tags: ['#TechnoKosovo', '#StreetParty', '#Prishtina', '#NXT LVL', '#ElectronicMusic'],
    },
    {
      title: 'Sunny Hill Festival 2026 — URAN B.',
      category: 'Artist Spotlight',
      date: '2026-07-31',
      label: 'July 31 • 13:00–15:00',
      image: 'https://i.postimg.cc/9Fzn3Ysf/Save-Clip-App-744169947-1570330177811222-3623588134581771686-n.jpg',
      lines: [
        'One of Kosovo’s finest takes over The Satellite 📡 Stage at Sunny Hill Festival 2026.',
        'With decades behind the decks and a deep connection to the underground scene, URAN B. continues to represent Kosovo’s electronic music culture at the highest level.',
        'Catch him live on July 31 from 13:00 to 15:00 and be part of the journey.',
      ],
      tags: ['#TechnoKosovo', '#UranB', '#SunnyHillFestival', '#Prishtina', '#ElectronicMusic'],
    },
  ].sort((a, b) => new Date(b.date) - new Date(a.date))

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
          {posts.map((post) => (
            <article key={post.title} className="blog-card" style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '100%', minHeight: 420, overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div style={{ padding: '40px', display: 'grid', gap: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <p style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 10 }}>{post.category}</p>
                    <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(36px, 5vw, 64px)', margin: 0 }}>{post.title}</h2>
                  </div>
                  <span style={{ color: 'var(--acid)', fontFamily: 'var(--font-b)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{post.label}</span>
                </div>

                <div style={{ display: 'grid', gap: 18 }}>
                  {post.lines.map((line) => (
                    <p key={line} style={{ color: line === post.lines[0] ? 'var(--fg)' : 'var(--fg-dim)', fontSize: 14, lineHeight: 1.8 }}>
                      {line}
                    </p>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 12 }}>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--acid)', border: '1px solid var(--acid)', padding: '10px 14px', borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
