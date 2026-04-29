import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  { id: 'friend', label: 'Friend', amount: '€5/mo', desc: 'Early access to event announcements and our monthly newsletter.' },
  { id: 'supporter', label: 'Supporter', amount: '€15/mo', desc: 'All above plus a 20% ticket discount and your name in our event programmes.' },
  { id: 'patron', label: 'Patron', amount: '€40/mo', desc: 'All above plus guest list access to 2 events per month and invitation to private listening sessions.' },
  { id: 'collective', label: 'Collective', amount: '€100/mo', desc: 'Full partner access — co-produced events, credits, private bookings, and direct artist access.' },
]

export default function Donate() {
  const [selected, setSelected] = useState('supporter')
  const [custom, setCustom] = useState('')

  useEffect(() => {
    gsap.fromTo('.donate-hero', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
    gsap.utils.toArray('.reveal-donate').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' } })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="donate-hero" style={{ padding: '64px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="text-dim uppercase" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Support</p>
          <h1 style={{ fontSize: 'clamp(60px, 10vw, 130px)', marginBottom: 32 }}>SUPPORT<br /><span className="text-acid">THE SCENE</span></h1>
          <p style={{ color: 'var(--fg-dim)', fontSize: 14, maxWidth: 600, lineHeight: 1.9 }}>
            Techno Kosovo is run by volunteers and funded entirely by the community. Every donation goes directly
            towards keeping events accessible, paying artists fairly, maintaining our media platform, and
            growing the scene across Kosovo.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="reveal-donate" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 48 }}>CHOOSE YOUR<br /><span className="text-acid">LEVEL</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'var(--border)', marginBottom: 48 }}>
            {tiers.map(t => (
              <div key={t.id} className="reveal-donate" onClick={() => setSelected(t.id)} style={{
                background: selected === t.id ? 'var(--acid-dim)' : 'var(--bg)',
                border: `2px solid ${selected === t.id ? 'var(--acid)' : 'transparent'}`,
                padding: 32, cursor: 'pointer', transition: 'all 0.2s', position: 'relative',
              }}>
                {selected === t.id && <div style={{ position: 'absolute', top: 16, right: 16, width: 10, height: 10, background: 'var(--acid)', borderRadius: '50%' }} />}
                <div style={{ fontFamily: 'var(--font-d)', fontSize: 36, marginBottom: 4 }}>{t.label}</div>
                <div style={{ color: 'var(--acid)', fontFamily: 'var(--font-d)', fontSize: 22, marginBottom: 16 }}>{t.amount}</div>
                <p style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-donate" style={{ border: '1px solid var(--border)', padding: 40, marginBottom: 40 }}>
            <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 28, marginBottom: 16 }}>ONE-OFF DONATION</h3>
            <p style={{ color: 'var(--fg-dim)', fontSize: 12, marginBottom: 24 }}>Prefer to donate once? Enter any amount below.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              {['€5', '€10', '€25', '€50', '€100'].map(a => (
                <button key={a} onClick={() => setCustom(a.slice(1))} style={{
                  background: custom === a.slice(1) ? 'var(--acid)' : 'transparent',
                  color: custom === a.slice(1) ? 'var(--bg)' : 'var(--fg)',
                  border: `1px solid ${custom === a.slice(1) ? 'var(--acid)' : 'var(--border)'}`,
                  fontFamily: 'var(--font-b)', fontSize: 13, padding: '10px 20px', transition: 'all 0.2s',
                }}>{a}</button>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', padding: '0 16px', height: 44 }}>
                <span style={{ color: 'var(--fg-dim)', marginRight: 4 }}>€</span>
                <input type="number" placeholder="Other" value={custom}
                  onChange={e => setCustom(e.target.value)}
                  style={{ background: 'none', border: 'none', color: 'var(--fg)', fontFamily: 'var(--font-b)', fontSize: 13, width: 80, outline: 'none' }} />
              </div>
            </div>
          </div>

          <div className="reveal-donate">
            <button className="btn" style={{ fontSize: 13, padding: '18px 48px' }}>
              {custom ? `Donate €${custom}` : `Subscribe as ${tiers.find(t => t.id === selected)?.label}`} →
            </button>
            <p style={{ color: 'var(--fg-faint)', fontSize: 11, marginTop: 16 }}>Payments via Stripe. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
