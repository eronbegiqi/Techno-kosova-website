import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { gsap } from 'gsap'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Artists from './pages/Artists.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Donate from './pages/Donate.jsx'
import Portfolio from './pages/Portfolio.jsx'
import PortfolioProject from './pages/PortfolioProject.jsx'

export default function App() {
  const location = useLocation()
  const pageRef = useRef(null)

  // Custom cursor
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      gsap.set(dot, { x: mx, y: my })
    }
    const loop = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      gsap.set(ring, { x: rx, y: ry })
      raf = requestAnimationFrame(loop)
    }
    const onEnter = (e) => {
      if (e.target.closest('a, button')) ring.classList.add('hovering')
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button')) ring.classList.remove('hovering')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Page transition
  useEffect(() => {
    window.scrollTo(0, 0)
    if (pageRef.current) {
      gsap.fromTo(pageRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
    }
  }, [location.pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Custom cursor */}
      <div id="cursor-dot" className="cursor-dot" />
      <div id="cursor-ring" className="cursor-ring" />

      <Nav />
      <div ref={pageRef} id="page-root" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioProject />} />
          <Route path="/contact" element={<Navigate to="/about" replace />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
