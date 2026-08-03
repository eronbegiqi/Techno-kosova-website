import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectData = {
  'unum-festival-coverage': {
    title: 'UNUM Festival Coverage',
    type: 'Festival Documentation',
    year: '2025',
    location: 'Albania',
    intro: 'A dedicated showcase of our authentic coverage from UNUM Festival — combining atmosphere, energy, and cinematic storytelling from the ground.',
    videos: [
      { title: 'Anitë b2b Gemza Pine Stage @ Unum Festival 2026', videoId: '3ictNKMdpIU' },
      { title: 'Altin Boshnjaku - UNUM Festival 2026 Day 1', videoId: 'TVh0G3IhaPk' },
      { title: 'Altin Boshnjaku @ Pine Stage', videoId: 'Kk6BQxwmi1o' },
      { title: 'Anitë b2b Gemza @ Unum Festival', videoId: 'P8ZdUYUa70g' },
      { title: 'Anitë B2B Gemza UNUM Festival 2026 Pine Stage', videoId: 'AKvjt8c2-k8' },
      { title: 'Anitë B2B Gemza UNUM Festival 2026 Pine Stage', videoId: 'a9PHbvfxoKM' },
      { title: 'Anitë B2B Gemza UNUM Festival 2026 Pine Stage', videoId: 'lFAyzb67Zcg' },
      { title: 'Altin boshnjkau Pine Stage 2026', videoId: 'UZIK7ZSMVQg' },
      { title: 'Anitë B2B Gemza @ UNUM Festival 2026 11 AM Pine Stage', videoId: '7u1Y6y3NFdg' },
      { title: 'Anitë x Gemza @ UNUM Festival Pine Stage 2026', videoId: 'e92j2K54vNU' },
      { title: 'Anitë @ UNUM Festival Pine Stage 2026', videoId: 'DGaoevwSV6o' },
      { title: 'Anitë x Gemza @ UNUM Festival Pine Stage 2026', videoId: '2FjMfM9pXok' },
      { title: 'Anitë x Gemza @ UNUM Festival Pine Stage 2026', videoId: 'A3jXO86nz4E' },
      { title: 'Anitë x Gemza @ UNUM Festival Pine Stage 2026', videoId: '2E8CFTmlh1M' },
      { title: 'Anitë x Gemza @ UNUM Festival Pine Stage 2026', videoId: '59fEeCdZ18U' },
      { title: 'Likatek Vinyl-only Secret Stage @ Unum Festival', videoId: 'D-sPMgISajI' },
      { title: 'Anitë B2B Gemza UNUM Festival 2026 Pine Stage', videoId: 'zgkmmEQ3G_M' },
      { title: 'Altin Boshnjaku @ Unum Festival', videoId: 'rusAx8npwL4' },
      { title: 'Altin Boshnjaku @ Pine Stage 2026', videoId: 'P9Aat9DRib8' },
    ],
  },
  'mihai-popoviciu-in-kosovo': {
    title: 'Mihai Popoviciu In Kosovo',
    type: 'Nightlife Media',
    year: '2024',
    location: 'Prishtina',
    intro: 'A closer look at club nights, backstage moments, and atmospheric content built for both social promotion and partner presentations.',
    videos: [
      { title: 'MiM @ .form 08 May 2k26', videoId: '_CzRFS19U_U' },
      { title: 'MiM @ .form 08 May AMC HALL', videoId: 't4FfUmpzQz0' },
      { title: 'MiM @ .form | Closing Set After Mihai Popoviciu', videoId: 'LszkT5lMauc' },
      { title: 'Mihai Popoviciu @ .form | Live in Prishtina', videoId: 'mFd1CamZPgg' },
      { title: 'BAZEL @ .form | Opening Set for Mihai Popoviciu', videoId: 'YtVCugMhLmE' },
      { title: 'BAZEL @ .form | Opening Set for Mihai Popoviciu', videoId: 'EiDl4XykwZg' },
      { title: 'La Baresha closing her set', videoId: 'BfRv6JfPJ78' },
      { title: 'LA BARESHA @ .form | Opening Set for Mihai Popoviciu', videoId: 'qJmHTF88998' },
    ],
  },
  'afterhours-club-features': {
    title: 'Mihai Popoviciu In Kosovo',
    type: 'Nightlife Media',
    year: '2024',
    location: 'Prishtina',
    intro: 'A closer look at club nights, backstage moments, and atmospheric content built for both social promotion and partner presentations.',
    videos: [
      { title: 'MiM @ .form 08 May 2k26', videoId: '_CzRFS19U_U' },
      { title: 'MiM @ .form 08 May AMC HALL', videoId: 't4FfUmpzQz0' },
      { title: 'MiM @ .form | Closing Set After Mihai Popoviciu', videoId: 'LszkT5lMauc' },
      { title: 'Mihai Popoviciu @ .form | Live in Prishtina', videoId: 'mFd1CamZPgg' },
      { title: 'BAZEL @ .form | Opening Set for Mihai Popoviciu', videoId: 'YtVCugMhLmE' },
      { title: 'BAZEL @ .form | Opening Set for Mihai Popoviciu', videoId: 'EiDl4XykwZg' },
      { title: 'La Baresha closing her set', videoId: 'BfRv6JfPJ78' },
      { title: 'LA BARESHA @ .form | Opening Set for Mihai Popoviciu', videoId: 'qJmHTF88998' },
    ],
  },
  'cultural-event-storytelling': {
    title: 'Cultural Event Storytelling',
    type: 'Multimedia Coverage',
    year: '2024',
    location: 'Kosovo',
    intro: 'A mix of photography, short-form video, and polished recap content designed to preserve the mood and impact of cultural events.',
    videos: [
      { title: 'Cultural Event Recap', videoId: 'qfQb4D0cdgo' },
      { title: 'Event Moments', videoId: 'Md_Kh2-eJeI' },
    ],
  },
  'balkan-event-night': {
    title: 'Balkan Event Night',
    type: 'Festival Coverage',
    year: '2026',
    location: 'Prishtina',
    intro: 'An electrifying capture of Balkan Event Night (25 July 2026) at E.DH.E — showcasing raw DJ performances, crowd energy, and the urban nightlife atmosphere of Prishtina. This collection includes short-form highlights and a full recap, perfect for promoters, press, and social channels.',
    videos: [
      { title: 'Balkan Event Night – Full Recap', videoId: '9SEDoD27mu0' },
      { title: 'Balkan Event Night – Clip 1', videoId: 'loBF3wToApU' },
      { title: 'Balkan Event Night – Clip 2', videoId: 'O_w27vDTjzo' },
      { title: 'Balkan Event Night – Clip 3', videoId: 'E_OzSZPjp90' },
      { title: 'Balkan Event Night – Clip 4', videoId: '9_Ui0bpVNdI' },
      { title: 'Balkan Event Night – Clip 5', videoId: 'wJ6j3aGzyPk' },
      { title: 'Balkan Event Night – Clip 6', videoId: 'kkLfAyba2R4' },
      { title: 'Balkan Event Night – Clip 7', videoId: 'uqwzlYEiB8g' },
      { title: 'Balkan Event Night – Clip 8', videoId: '3UB-lP2mE1o' },
      { title: 'Balkan Event Night – Clip 9', videoId: '_6Mn8xSFonQ' },
      { title: 'Balkan Event Night – Clip 10', videoId: 'SbUOd7AM1yE' },
      { title: 'Balkan Event Night – Clip 11', videoId: 'xPY9vyuhvi8' },
      { title: 'Balkan Event Night – Clip 12', videoId: 'jPTbN9Qlnzs' },
      { title: 'Balkan Event Night – Clip 13', videoId: 'SrvxDuwETBw' },
      { title: 'Balkan Event Night – Clip 14', videoId: 'mjXq29t4gyk' },
    ],
  },
}

export default function PortfolioProject() {
  const { slug } = useParams()
  const project = projectData[slug] || projectData['unum-festival-coverage']

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
  }, [slug])

  return (
    <div>
      <section className="section" style={{ paddingTop: 128, paddingBottom: 64 }}>
        <div className="container">
          <Link to="/portfolio" className="btn btn-ghost reveal-up" style={{ marginBottom: 24, display: 'inline-block' }}>
            ← Back to Portfolio
          </Link>

          <div className="card reveal-up" style={{ background: 'var(--bg2)', padding: 32, border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
              <span className="tag">{project.type}</span>
              <span style={{ fontFamily: 'var(--font-b)', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {project.year} • {project.location}
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(44px, 7vw, 82px)', marginBottom: 16 }}>{project.title}</h1>
            <p style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.8, maxWidth: 760 }}>{project.intro}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {project.videos.map((video, index) => (
              <div key={video.title} className="card reveal-up" style={{ background: 'var(--bg2)', overflow: 'hidden' }}>
                <div className="video-placeholder" style={{ minHeight: 240, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,0.04)', color: 'var(--fg-dim)', padding: 20 }}>
                  {video.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100%', minHeight: 240, border: 'none' }}
                    />
                  ) : (
                    <div style={{ textAlign: 'center', maxWidth: 420 }}>
                      <div style={{ fontFamily: 'var(--font-d)', fontSize: 28, marginBottom: 12 }}>Video Placeholder</div>
                      <p style={{ color: 'var(--fg-dim)', fontSize: 13, lineHeight: 1.7 }}>
                        Add a YouTube video ID here to display the official Balkan Event Night recap.
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontSize: 28 }}>{video.title}</h3>
                    <span style={{ fontFamily: 'var(--font-d)', color: 'var(--acid)', fontSize: 20 }}>0{index + 1}</span>
                  </div>
                  <p style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.7 }}>
                    Selected footage from our media coverage, ready to be shared with organizers, partners, and press.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
