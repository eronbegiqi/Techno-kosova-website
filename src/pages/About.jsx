import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: 'Person 1', role: 'Founder / Events Director' },
  { name: 'Person 2', role: 'Technical Production' },
]

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok) {
        gsap.to('.contact-form', { opacity: 0, y: -20, duration: 0.4, onComplete: () => setSent(true) })
      } else {
        setError(data.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }
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
              Techno Kosovo was founded in Kosovo in 2019 by an electronic music enthusiast and passionate music lover who saw the need for a dedicated platform for underground electronic culture in the country.

What started as a platform supporting local artists, events, and the growing scene has evolved into a full media and event organization focused on showcasing the energy, talent, and spirit of electronic music in Kosovo and beyond.
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

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 22, color: 'var(--acid)', marginBottom: 16 }}>LOCATION</h3>
              <p style={{ color: 'var(--fg-dim)', fontSize: 13, lineHeight: 1.8 }}>Based in Prishtina, Kosovo.<br />Operating across all major Kosovo cities.</p>
            </div>
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 22, color: 'var(--acid)', marginBottom: 16 }}>EMAIL</h3>
              <p style={{ color: 'var(--fg)', fontSize: 13 }}>kosovotechno@gmail.com</p>
              <p style={{ color: 'var(--fg-dim)', fontSize: 11, marginTop: 4 }}></p>
            </div>
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 22, color: 'var(--acid)', marginBottom: 16 }}>FOLLOW</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[['Instagram', 'https://www.instagram.com/technokosovo/'], ['Facebook', 'https://facebook.com/TechnoKosovo'], ['SoundCloud', 'https://soundcloud.com/TechnoKosovo'], ['Resident Advisor', 'https://ra.co/promoters/172435']].map(([n, u]) => (
                  <a key={n} href={u} target="_blank" rel="noreferrer" style={{
                    color: 'var(--fg-dim)', fontSize: 12, textDecoration: 'none', letterSpacing: '0.08em',
                    textTransform: 'uppercase', borderBottom: '1px solid var(--border)', paddingBottom: 8, transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = 'var(--acid)'}
                    onMouseLeave={e => e.target.style.color = 'var(--fg-dim)'}
                  >{n} ↗</a>
                ))}
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 80, color: 'var(--acid)', marginBottom: 20 }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 36, marginBottom: 12 }}>MESSAGE SENT</h3>
                <p style={{ color: 'var(--fg-dim)', fontSize: 13 }}>We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-dim)', display: 'block', marginBottom: 8 }}>Name</label>
                    <input required value={form.name} onChange={e => handle('name', e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--acid)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div>
                    <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-dim)', display: 'block', marginBottom: 8 }}>Email</label>
                    <input type="email" required value={form.email} onChange={e => handle('email', e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--acid)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-dim)', display: 'block', marginBottom: 8 }}>Subject</label>
                  <select required value={form.subject} onChange={e => handle('subject', e.target.value)}
                    style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--acid)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                    <option value="">Select a subject</option>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-dim)', display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea required rows={7} value={form.message} onChange={e => handle('message', e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--acid)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <button type="submit" className="btn" style={{ padding: '16px 40px', fontSize: 12, alignSelf: 'flex-start' }}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
