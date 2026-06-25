import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  {
    slug: 'unum-festival-coverage',
    title: 'UNUM Festival Coverage',
    type: 'Festival Documentation',
    location: 'Albania',
    summary: 'A full visual story of stage energy, crowd movement, and artist performances captured across multiple days.',
    image: 'https://www.deephouseamsterdam.com/wp-content/uploads/2023/05/Unknown-1-1.png',
    videoId: '9c6WiIdJqHE',
  },
  {
    slug: 'mihai-popoviciu-in-kosovo',
    title: 'Mihai Popoviciu In Kosovo',
    type: 'Nightlife Media',
    location: 'Prishtina',
    year: '2024',
    summary: 'A focused visual coverage of the event, highlighting the atmosphere, performances, and the work we captured through video and content creation.',
    image: 'https://i.imgur.com/cJQ4XIo.png',
    videoId: 'K9xkDgqcuoY',
  },
  {
    slug: 'cultural-event-storytelling',
    title: 'Cultural Event Storytelling',
    type: 'Multimedia Coverage',
    location: 'Kosovo',
    year: '2024',
    summary: 'A blend of photography, short-form video, and written recaps that helped promoters share the atmosphere of the event.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    videoId: 'qfQb4D0cdgo',
  },
]

export default function Portfolio() {
  useEffect(() => {
    gsap.utils.toArray('.reveal-up').forEach((el) => {
      gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      })
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div>
      <section className="section" style={{ paddingTop: 128, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 48, alignItems: 'center' }}>
            <div>
              <p className="text-dim uppercase reveal-up" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Our Work</p>
              <h1 className="reveal-up" style={{ fontSize: 'clamp(56px, 8vw, 110px)', marginBottom: 24 }}>
                PAST WORK<br /><span className="text-acid">PORTFOLIO</span>
              </h1>
              <p className="reveal-up" style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.8, maxWidth: 620, marginBottom: 32 }}>
                We create authentic visual stories for festivals, club nights, and cultural events across Kosovo, Albania, and the wider region.
                Our event documentation goes beyond ordinary coverage — combining cinematic videography, striking photography, and content that feels special, intentional, and built to last.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/about" className="btn reveal-up">Meet the Team</Link>
                <a href="mailto:kosovotechno@gmail.com" className="btn btn-ghost reveal-up">Book Us</a>
              </div>
            </div>

            <div className="card reveal-up" style={{ background: 'var(--bg2)', padding: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  ['70+', 'Events Covered'],
                  ['400+', 'Visual Assets'],
                  ['4+', 'Countries'],
                  ['24/7', 'Media Ready'],
                ].map(([value, label]) => (
                  <div key={label} style={{ border: '1px solid var(--border)', padding: 20, minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-d)', fontSize: 34, color: 'var(--acid)', lineHeight: 1 }}>{value}</div>
                    <div style={{ color: 'var(--fg-dim)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p className="text-dim uppercase reveal-up" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Featured Media</p>
              <h2 className="reveal-up" style={{ fontSize: 'clamp(40px, 6vw, 70px)' }}>SELECTED<br /><span className="text-acid">PROJECTS</span></h2>
            </div>
            <p className="reveal-up" style={{ color: 'var(--fg-dim)', maxWidth: 460, fontSize: 13, lineHeight: 1.7 }}>
              A mix of festival documentation, nightlife stories, and cultural event coverage that shows both the atmosphere and the professionalism behind our work.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {highlights.map((item, index) => {
              const route = `/portfolio/${item.slug}`

              return (
                <Link key={item.title} to={route} style={{ textDecoration: 'none', height: '100%' }}>
                  <article className="card reveal-up" style={{ background: 'var(--bg)', overflow: 'hidden', height: '100%', minHeight: 430, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ aspectRatio: '16 / 10', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                        <span className="tag">{item.type}</span>
                      </div>
                      <h3 style={{ fontSize: 32 }}>{item.title}</h3>
                      <p style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.7 }}>{item.summary}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                        <span style={{ fontSize: 11, color: 'var(--fg-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.location}</span>
                        <span style={{ fontFamily: 'var(--font-d)', fontSize: 18, color: 'var(--acid)' }}>0{index + 1}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="text-dim uppercase reveal-up" style={{ fontSize: 11, marginBottom: 16, letterSpacing: '0.16em' }}>— Ready to Work Together</p>
          <h2 className="reveal-up" style={{ fontSize: 'clamp(38px, 5vw, 72px)', marginBottom: 24 }}>LET YOUR<br /><span className="text-acid">EVENT SHINE</span></h2>
          <p className="reveal-up" style={{ color: 'var(--fg-dim)', fontSize: 14, maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.8 }}>
            If you are organizing a festival, concert, or cultural event and want authentic, special media coverage, we are ready to help tell your story.
          </p>
          <a href="mailto:kosovotechno@gmail.com" className="btn reveal-up">Contact Us</a>
        </div>
      </section>
    </div>
  )
}
