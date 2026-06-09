import { useState, useEffect } from 'react'
import { gsap } from 'gsap'

const subjects = ['General Inquiry', 'Artist Booking', 'Press & Media', 'Partnership', 'Volunteer', 'Technical Issue']

const inputStyle = {
  width: '100%', background: 'var(--bg2)', border: '1px solid var(--border)',
  color: 'var(--fg)', fontFamily: 'var(--font-b)', fontSize: 13, padding: '14px 16px',
  outline: 'none', transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    gsap.fromTo('.contact-hero', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
  }, [])

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

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="contact-hero" style={{ padding: '64px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="text-dim uppercase" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Get In Touch</p>
          <h1 style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}>CONTACT<span className="text-acid">.</span></h1>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 22, color: 'var(--acid)', marginBottom: 16 }}>LOCATION</h3>
              <p style={{ color: 'var(--fg-dim)', fontSize: 13, lineHeight: 1.8 }}>Based in Prishtina, Kosovo.<br />Operating across all major Kosovo and Albania cities.</p>
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
