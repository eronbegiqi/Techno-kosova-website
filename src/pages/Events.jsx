import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { events } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

const formatDate = (d) => {
  const dt = eventDate(d)
  return {
    day: dt.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: dt.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
    year: dt.getFullYear(),
  }
}

const eventDate = (date) => {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const today = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  return date
}

function EventRow({ ev }) {
  const [open, setOpen] = useState(false)
  const { day, month, year } = formatDate(ev.date)
  const hideTicketActions = ['oda-haliti-akti-i-hapjes', '24-years-of-episode'].includes(ev.id) || !ev.ticketLink

  return (
    <div className="event-row" style={{ background: 'var(--bg)' }}>
      <div className="event-summary" onClick={() => setOpen(o => !o)} style={{
        display: 'grid', gridTemplateColumns: '80px 1fr auto auto',
        gap: 24, alignItems: 'center', padding: '28px 32px',
        borderBottom: open ? '1px solid var(--border)' : 'none',
        cursor: 'pointer', transition: 'background 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--bg2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 36, lineHeight: 1, color: 'var(--acid)' }}>{day}</div>
          <div style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--fg-dim)', textTransform: 'uppercase' }}>{month} {year}</div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4, flexWrap: 'wrap' }}>
            <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 28, lineHeight: 1 }}>{ev.title}</h3>
            {ev.canceled && <span className="tag" style={{ color: '#ff4444', borderColor: '#ff4444' }}>CANCELED</span>}
            {ev.soldOut && <span className="tag" style={{ color: '#ff4444', borderColor: '#ff4444' }}>SOLD OUT</span>}
            {ev.featured && <span className="tag">FEATURED</span>}
          </div>
          <p style={{ color: 'var(--fg-dim)', fontSize: 11, letterSpacing: '0.06em' }}>{ev.venue} · {ev.time}</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
            {ev.lineup.slice(0, 4).map((n, idx) => (
              <span key={typeof n === 'string' ? n : n.name} style={{ fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {typeof n === 'string' ? n : (
                  <a href={n.link} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>{n.name}</a>
                )}{idx < Math.min(3, ev.lineup.length - 1) ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
          {/* <span style={{ color: 'var(--acid)', fontSize: 12, fontFamily: 'var(--font-b)', whiteSpace: 'nowrap' }}>{ev.price.split('/')[0].trim()}</span> */}
          <span style={{ color: 'var(--fg-dim)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{open ? '↑ Less' : '↓ More'}</span>
        </div>

        <div>
          {!hideTicketActions && (!ev.soldOut ? (
            <a href={ev.ticketLink} target="_blank" rel="noreferrer" className="btn"
              onClick={e => e.stopPropagation()} style={{ padding: '12px 24px', fontSize: 11, whiteSpace: 'nowrap' }}>
              Get Tickets
            </a>
          ) : (
            <span className="btn" style={{ background: 'transparent', color: '#ff4444', borderColor: '#ff4444', cursor: 'default', pointerEvents: 'none', padding: '12px 24px', fontSize: 11 }}>Sold Out</span>
          ))}
        </div>
      </div>

      {open && (
        <div className="event-details" style={{ padding: '32px 32px 32px 136px', background: 'var(--bg2)', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 40 }}>
          {ev.image && (
            <div style={{ gridColumn: '1 / -1', marginBottom: 24, borderRadius: 18, overflow: 'hidden' }}>
              <img src={ev.image} alt={ev.title} style={{ width: '100%', height: 420, objectFit: 'cover' }} />
            </div>
          )}
          <div>
            <p style={{ color: 'var(--fg)', fontSize: 13, lineHeight: 1.8, marginBottom: 24 }}>{ev.description}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <p style={{ fontSize: 10, color: 'var(--acid)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Venue</p>
                <p style={{ color: 'var(--fg)', fontSize: 12 }}>{ev.venue}</p>
                <p style={{ color: 'var(--fg-dim)', fontSize: 11 }}>{ev.address}</p>
              </div>
              <div>
                <p style={{ fontSize: 10, color: 'var(--acid)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Full Lineup</p>
                {ev.lineup.map((n, i) => (
                  typeof n === 'string' ? (
                    <p key={n} style={{ color: 'var(--fg)', fontSize: 12 }}>{n}</p>
                  ) : (
                    <p key={n.name} style={{ color: 'var(--fg)', fontSize: 12 }}>
                      <a href={n.link} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>{n.name}</a>
                    </p>
                  )
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 40 }}>
            <p style={{ fontSize: 10, color: 'var(--acid)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Tickets</p>
            {!hideTicketActions && !ev.soldOut && (
              <a href={ev.ticketLink} target="_blank" rel="noreferrer" className="btn" style={{ marginTop: 20, width: '100%', textAlign: 'center', display: 'block' }}>
                Buy Tickets ↗
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Events() {
  const [filter, setFilter] = useState('all')
  const now = today()
  const upcoming = events.filter(e => !e.canceled && eventDate(e.date) >= now).sort((a, b) => eventDate(a.date) - eventDate(b.date))
  const past = events.filter(e => e.canceled || eventDate(e.date) < now).sort((a, b) => eventDate(b.date) - eventDate(a.date))
  const filtered = filter === 'past' ? past : upcoming

  useEffect(() => {
    gsap.fromTo('.events-header', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.utils.toArray('.event-row').forEach(el => {
      gsap.fromTo(el, { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%' } })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [filter])

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="events-header" style={{ borderBottom: '1px solid var(--border)', padding: '64px 0 48px' }}>
        <div className="container">
          <p className="text-dim uppercase" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— What's On</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h1 style={{ fontSize: 'clamp(64px, 10vw, 140px)' }}>EVENTS<span className="text-acid">.</span></h1>
            <div style={{ display: 'flex', gap: 8 }}>
              {[['all', 'Upcoming'], ['past', 'Past']].map(([v, l]) => (
                <button key={v} onClick={() => setFilter(v)} style={{
                  background: filter === v ? 'var(--acid)' : 'transparent',
                  color: filter === v ? 'var(--bg)' : 'var(--fg-dim)',
                  border: `1px solid ${filter === v ? 'var(--acid)' : 'var(--border)'}`,
                  fontFamily: 'var(--font-b)', fontSize: 10, letterSpacing: '0.12em',
                  textTransform: 'uppercase', padding: '8px 20px', transition: 'all 0.2s',
                }}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        {filtered.length === 0 && (
          <p style={{ color: 'var(--fg-dim)', fontSize: 14 }}>No events in this category yet.</p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)' }}>
          {filtered.map(ev => <EventRow key={ev.id} ev={ev} />)}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', padding: '48px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
          {[
            ['Door Policy', 'All events operate strict door policies. Valid ID required. We reserve the right of admission.'],
            ['Ticket Refunds', 'Tickets are non-refundable unless an event is cancelled. Exchanges permitted up to 48h before.'],
            ['Accessibility', 'Please contact us for accessibility requirements. We aim to make all events as accessible as possible.'],
            ['Safety', 'We operate a zero-tolerance policy on harassment and discrimination. Report issues to our crew on site.'],
          ].map(([t, b]) => (
            <div key={t}>
              <h4 style={{ fontFamily: 'var(--font-d)', fontSize: 20, marginBottom: 8, color: 'var(--acid)' }}>{t}</h4>
              <p style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.7 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
