import { useEffect, useRef, useState } from 'react'
import cover from './assets/cover.jpeg'
import founder from './assets/founder.jpeg'
import gallery1 from './assets/gallery-1.jpeg'
import gallery2 from './assets/gallery-2.jpeg'
import gallery3 from './assets/gallery-3.jpeg'
import gallery4 from './assets/gallery-4.jpeg'
import gallery5 from './assets/gallery-5.jpeg'
import gallery6 from './assets/gallery-6.jpeg'

const GALLERY = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

const INSTAGRAM_URL =
  'https://www.instagram.com/cafe_elbay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
const WHATSAPP_NUMBER = '21653114143'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

function Ornament() {
  // Signature motif: a brass filigree lantern arch, echoing the copper lanterns
  // that appear on every stand photo. Used as a quiet section divider.
  return (
    <svg
      className="ornament"
      viewBox="0 0 200 40"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path
        d="M0 20 H70 M130 20 H200"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M85 6 C 90 6 92 12 92 20 C 92 28 90 34 85 34 M115 6 C110 6 108 12 108 20 C108 28 110 34 115 34"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="100" cy="20" r="6" fill="currentColor" opacity="0.9" />
      <circle cx="100" cy="20" r="2" fill="var(--ink)" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
      />
      <path
        fill="currentColor"
        d="M12.02 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.68.44 3.25 1.2 4.62L2.5 21.5l4.98-1.18a9.46 9.46 0 0 0 4.54 1.16h.01c5.25 0 9.5-4.25 9.5-9.5s-4.26-9.48-9.51-9.48Zm0 17.28h-.01a7.7 7.7 0 0 1-3.93-1.08l-.28-.17-2.95.7.7-2.87-.18-.29a7.72 7.72 0 0 1-1.18-4.09c0-4.27 3.48-7.75 7.76-7.75 4.28 0 7.75 3.48 7.75 7.75 0 4.28-3.48 7.8-7.68 7.8Z"
      />
    </svg>
  )
}

function Lights() {
  // Ambient scattered "fairy light" dots, referencing the curtain-light
  // backdrop the stand is always photographed against.
  const dots = Array.from({ length: 26 })
  return (
    <div className="lights" aria-hidden="true">
      {dots.map((_, i) => (
        <span
          key={i}
          className="light-dot"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 7) * 0.4}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function App() {
  const [slide, setSlide] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % GALLERY.length)
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page">
      {/* HERO */}
      <header className="hero" style={{ backgroundImage: `url(${cover})` }}>
        <div className="hero-overlay" />
        <Lights />
        <div className="hero-content">
          <p className="eyebrow">Stand de café oriental &middot; Événements de luxe</p>
          <h1 className="brand-title">
            <span className="brand-fr">Café Elbey</span>
            <span className="brand-divider">•</span>
            <span className="brand-ar">مقهى الباي</span>
          </h1>
          <p className="hero-tagline">
            L'art du café arabe, servi avec éclat, pour vos mariages, fiançailles
            et soirées de Ramadan.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={scrollToContact}>
              Réserver le stand
            </button>
            <a
              className="btn btn-ghost"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span />
        </div>
      </header>

      {/* FOUNDER */}
      <section className="section founder">
        <div className="founder-grid">
          <div className="founder-photo-wrap">
            <img src={founder} alt="Ahmed Kahloun, créateur de Café Elbey" className="founder-photo" />
            <div className="founder-frame" aria-hidden="true" />
          </div>
          <div className="founder-text">
            <p className="eyebrow">Le créateur</p>
            <h2 className="section-title">Ahmed Kahloun</h2>
            <p>
              Passionné par les rituels du café arabe depuis toujours, Ahmed
              Kahloun a imaginé Café Elbey comme un hommage vivant à la
              tradition orientale : cuivre, or, braises et cardamome, réunis
              dans un stand habillé de lumière.
            </p>
            <p>
              Présent sur les mariages, fiançailles, soirées privées et
              événements de Ramadan à travers la Tunisie, il orchestre chaque
              service avec la précision d'un maître torréfacteur et l'élégance
              d'un maître de cérémonie.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-wrap"><Ornament /></div>

      {/* GALLERY */}
      <section className="section gallery-section">
        <p className="eyebrow center">L'ambiance</p>
        <h2 className="section-title center">Chaque soirée, une scène</h2>
        <div className="slideshow">
          {GALLERY.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Café Elbey — moment ${i + 1}`}
              className={`slide ${i === slide ? 'is-active' : ''}`}
            />
          ))}
          <div className="slide-vignette" />
          <div className="slide-dots">
            {GALLERY.map((_, i) => (
              <span key={i} className={`dot ${i === slide ? 'is-active' : ''}`} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider-wrap"><Ornament /></div>

      {/* SERVICES */}
      <section className="section services">
        <p className="eyebrow center">Le service</p>
        <h2 className="section-title center">Une cérémonie, pas un buffet</h2>
        <div className="service-grid">
          <article className="service-card">
            <h3>Café turc &amp; arabe</h3>
            <p>
              Préparé au sable chaud, servi dans des cafetières en cuivre
              martelé, accompagné de loukoums et de pâtisseries orientales.
            </p>
          </article>
          <article className="service-card">
            <h3>Stand sur-mesure</h3>
            <p>
              Un kiosque en bois habillé de rideaux lumineux, adaptable à
              l'intérieur comme en plein air, jour ou nuit.
            </p>
          </article>
          <article className="service-card">
            <h3>Service en tenue</h3>
            <p>
              Un maître de café en costume noir et or, présent du premier au
              dernier invité, pour une expérience impeccable.
            </p>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <p className="eyebrow center">Réservation</p>
        <h2 className="section-title center">Invitez Café Elbey à votre événement</h2>
        <p className="contact-lead">
          Mariages, fiançailles, soirées de Ramadan ou réceptions privées —
          écrivez-nous pour composer votre stand.
        </p>
        <div className="contact-links">
          <a className="contact-pill" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <span className="pill-icon"><WhatsAppIcon /></span>
            +216 53 114 143
          </a>
          <a className="contact-pill" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <span className="pill-icon"><InstagramIcon /></span>
            @cafe_elbay
          </a>
        </div>
      </section>

      <footer className="footer">
        <span className="brand-fr small">Café Elbey</span>
        <span className="brand-divider">•</span>
        <span className="brand-ar small">مقهى الباي</span>
        <p className="footer-note">© {new Date().getFullYear()} — Tous droits réservés</p>
      </footer>
    </div>
  )
} 