import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

import TourDetails from './pages/TourDetails'
import Tours from './pages/Tours'
import SummerPrograms from './pages/SummerPrograms'
import SummerTourDetails from './pages/SummerTourDetails'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Impressum from './pages/Impressum'
import Presentation2 from './presentation/Presentation2'
import TravelDreamsPresentation from './presentation/TravelDreamsPresentation'

// New TravelDreams Extension Pages
import CarRental from './pages/CarRental'
import TravelQuiz from './pages/TravelQuiz'
import TravelAlerts from './pages/TravelAlerts'
import Adventures from './pages/Adventures'
import TripPlanner from './pages/TripPlanner'
import DestinationComparison from './pages/DestinationComparison'

import './index.css'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header
          style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.95), rgba(6, 182, 212, 0.95))',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 'calc(var(--header-height) + 10px)',
                padding: 'var(--spacing-sm) 0',
              }}
            >
              <Link
                to="/"
                style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span style={{ fontSize: '2rem' }}>✈️</span>
                <span>TravelDreams</span>
              </Link>

              {/* Desktop Navigation */}
              <nav
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-md)',
                  alignItems: 'center',
                }}
                className="desktop-nav"
              >
                <Link
                  to="/"
                  className="nav-link-modern"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    color: 'white',
                    fontWeight: 500,
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>🏠</span>
                  <span>Startseite</span>
                </Link>
                <Link
                  to="/tours"
                  className="nav-link-modern"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    color: 'white',
                    fontWeight: 500,
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>🗺️</span>
                  <span>Reiseangebote</span>
                </Link>
                <Link
                  to="/summer-programs"
                  className="nav-link-modern"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    color: 'white',
                    fontWeight: 500,
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>☀️</span>
                  <span>Sommer</span>
                </Link>

                <Link
                  to="/blog"
                  className="nav-link-modern"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    color: 'white',
                    fontWeight: 500,
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>📰</span>
                  <span>Blog</span>
                </Link>

                {/* Dropdown Mehr */}
                <div className="nav-dropdown" style={{ position: 'relative' }}>
                  <button
                    className="nav-link-modern"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.25rem',
                      color: 'white',
                      fontWeight: 500,
                      borderRadius: 'var(--radius-lg)',
                      transition: 'all 0.3s ease',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontSize: '1.25rem' }}>🌟</span>
                    <span>Mehr ▾</span>
                  </button>
                  <div className="dropdown-menu" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)',
                    padding: 'var(--spacing-sm)',
                    minWidth: '200px',
                    zIndex: 1001,
                    display: 'none',
                  }}>
                    <Link to="/car-rental" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-dark)', borderRadius: 'var(--radius-md)' }}>
                      🚗 Autovermietung
                    </Link>
                    <Link to="/adventures" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-dark)', borderRadius: 'var(--radius-md)' }}>
                      ⛰️ Abenteuer
                    </Link>
                    <Link to="/trip-planner" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-dark)', borderRadius: 'var(--radius-md)' }}>
                      🤖 KI Reiseplaner
                    </Link>
                    <Link to="/travel-quiz" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-dark)', borderRadius: 'var(--radius-md)' }}>
                      🧠 Reise-Quiz
                    </Link>
                    <Link to="/travel-alerts" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-dark)', borderRadius: 'var(--radius-md)' }}>
                      ⚠️ Reise-Warnungen
                    </Link>
                    <Link to="/compare" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', color: 'var(--color-text-dark)', borderRadius: 'var(--radius-md)' }}>
                      ⚖️ Vergleich
                    </Link>
                  </div>
                </div>

                <Link
                  to="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'white',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>📞</span>
                  <span>Kontakt</span>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: 'none',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  fontSize: 'var(--font-size-2xl)',
                  cursor: 'pointer',
                  color: 'white',
                  padding: 'var(--spacing-sm)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav
                className="mobile-nav"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-sm)',
                  paddingBottom: 'var(--spacing-lg)',
                }}
              >
                <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>🏠</span> Startseite
                </Link>
                <Link to="/tours" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>🗺️</span> Reiseangebote
                </Link>
                <Link to="/summer-programs" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>☀️</span> Sommerprogramme
                </Link>
                <Link to="/car-rental" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>🚗</span> Autovermietung
                </Link>
                <Link to="/adventures" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>⛰️</span> Abenteuer
                </Link>
                <Link to="/trip-planner" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>🤖</span> KI Reiseplaner
                </Link>
                <Link to="/travel-quiz" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>🧠</span> Reise-Quiz
                </Link>
                <Link to="/travel-alerts" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>⚠️</span> Reise-Warnungen
                </Link>
                <Link to="/compare" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>⚖️</span> Vergleich
                </Link>
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>📰</span> Blog
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500 }}>
                  <span>📞</span> Kontakt
                </Link>
              </nav>
            )}
          </div>

          <style>{`
            .nav-link-modern:hover {
              background: rgba(255, 255, 255, 0.15);
              transform: translateY(-2px);
            }
          `}</style>
        </header>

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/summer-programs" element={<SummerPrograms />} />
            <Route path="/summer-programs/:tourId" element={<SummerTourDetails />} />
            {/* New TravelDreams Extension Routes */}
            <Route path="/car-rental" element={<CarRental />} />
            <Route path="/travel-quiz" element={<TravelQuiz />} />
            <Route path="/travel-alerts" element={<TravelAlerts />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/compare" element={<DestinationComparison />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/presentation" element={<TravelDreamsPresentation />} />
            <Route path="/presentation2" element={<Presentation2 />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer
          style={{
            background: 'var(--color-text-dark)',
            color: 'white',
            padding: 'var(--spacing-2xl) 0',
            marginTop: 'var(--spacing-3xl)',
          }}
        >
          <div className="container">
            <div className="grid grid-3" style={{ marginBottom: 'var(--spacing-xl)' }}>
              <div>
                <h4 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>TravelDreams</h4>
                <p style={{ color: '#94A3B8' }}>
                  Ihre Traumreise beginnt hier. Entdecken Sie die Welt mit uns.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>Rechtliches</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                  <Link to="/privacy" style={{ color: '#94A3B8' }}>Datenschutz</Link>
                  <Link to="/terms" style={{ color: '#94A3B8' }}>AGB</Link>
                  <Link to="/impressum" style={{ color: '#94A3B8' }}>Impressum</Link>
                  <Link to="/presentation" style={{ color: '#94A3B8' }}>Präsentation</Link>
                  <Link to="/presentation2" style={{ color: '#94A3B8' }}>Präsentation2</Link>
                </div>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>Kontakt</h4>
                <p style={{ color: '#94A3B8' }}>
                  📧 info@traveldreams.de<br />
                  📞 +49 123 456 7890<br />
                  📍 Musterstraße 123, Berlin
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'center', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid #334155', color: '#64748b' }}>
              © 2025 TravelDreams. Alle Rechte vorbehalten.
            </div>
          </div>
        </footer>

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-btn {
              display: block !important;
            }
          }
          @media (min-width: 769px) {
            .mobile-nav {
              display: none !important;
            }
          }
          .nav-dropdown:hover .dropdown-menu {
            display: block !important;
          }
          .dropdown-item:hover {
            background: var(--color-bg-secondary);
          }
        `}</style>
      </div>
    </BrowserRouter>
  )
}
