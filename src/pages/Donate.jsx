import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Donate() {

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
          <div className="reveal-donate">
            <a href="https://www.ko-fi.com/TechnoKosovo" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: 13, padding: '18px 48px', textDecoration: 'none', display: 'inline-block' }}>
              Subscribe as Supporter →
            </a>
            <p style={{ color: 'var(--fg-faint)', fontSize: 11, marginTop: 16 }}>Payments with Visa, Paypal and Mastercard</p>
          </div>
        </div>
      </section>
    </div>
  )
}
