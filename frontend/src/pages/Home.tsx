import React, { useEffect, useState } from 'react'
import { fetchJSON } from '../utils/api'
import Hero from '../components/Hero'
import TourCard from '../components/TourCard'
import Button from '../components/Button'

type Tour = {
  id: number
  title: string
  description?: string
  price: number
  imageUrl?: string
  category?: string
  duration?: number
  seatsTotal?: number
  seatsBooked?: number
  featured?: boolean
  destination?: {
    city: string
    country: string
  }
}

export default function Home() {
  const [featuredTours, setFeaturedTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchJSON('/api/tours?featured=true')
      .then((tours) => {
        setFeaturedTours(tours.slice(0, 6))
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Entdecken Sie die Welt"
        subtitle="Traumhafte Reiseziele zu unschlagbaren Preisen"
        ctaText="Jetzt buchen"
        ctaLink="/tours"
        secondaryCtaText="Angebote entdecken"
        secondaryCtaLink="/tours"
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop"
      />

      {/* Features Section */}
      <section style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <h2 className="text-center mb-2xl">Warum TravelDreams?</h2>
          <div className="grid grid-3">
            <div className="text-center">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🌍</div>
              <h3>Traumhafte Reiseziele</h3>
              <p>Entdecken Sie über 100 Reiseziele auf der ganzen Welt</p>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>💰</div>
              <h3>Beste Preise</h3>
              <p>Wir garantieren Ihnen die besten Preise für Ihre Traumreise</p>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🛡️</div>
              <h3>Sichere Buchung</h3>
              <p>Buchen Sie sicher und unkompliziert online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section>
        <div className="container">
          <h2 className="text-center mb-xl">Beliebte Reisen</h2>
          <p className="text-center mb-2xl" style={{ color: 'var(--color-text-medium)', maxWidth: '600px', margin: '0 auto var(--spacing-2xl)' }}>
            Unsere Top-Angebote für unvergessliche Reiseerlebnisse
          </p>

          {loading ? (
            <div className="text-center">
              <p>Lade Angebote...</p>
            </div>
          ) : featuredTours.length > 0 ? (
            <div className="grid grid-3">
              {featuredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p>Keine Angebote verfügbar</p>
            </div>
          )}

          <div className="text-center mt-2xl">
            <Button as="a" href="/tours" variant="primary" size="lg">
              Alle Angebote ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ background: 'var(--color-neutral-cream)' }}>
        <div className="container">
          <h2 className="text-center mb-2xl">Was unsere Kunden sagen</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-content">
                <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)' }}>
                  "Fantastische Reise nach Santorini! Alles perfekt organisiert. Wir kommen wieder!"
                </p>
                <div className="flex gap-md items-center">
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                  <div>
                    <strong>Maria Schmidt</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Berlin</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)' }}>
                  "Die Familienreise nach München war ein voller Erfolg. Sehr empfehlenswert!"
                </p>
                <div className="flex gap-md items-center">
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-secondary)' }}></div>
                  <div>
                    <strong>Thomas Müller</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Hamburg</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)' }}>
                  "Istanbul war atemberaubend! Danke für die tolle Beratung und Organisation."
                </p>
                <div className="flex gap-md items-center">
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-accent)' }}></div>
                  <div>
                    <strong>Sarah Weber</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>München</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
