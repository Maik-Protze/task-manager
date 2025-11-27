import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchJSON } from '../utils/api'
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
  included?: string
  destination?: {
    city: string
    country: string
  }
}

export default function TourDetails() {
  const { id } = useParams()
  const [tour, setTour] = useState<Tour | null>(null)
  const [loading, setLoading] = useState(true)
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    seats: 1,
  })
  const [bookingSubmitted, setBookingSubmitted] = useState(false)

  useEffect(() => {
    if (id) {
      fetchJSON(`/api/tours/${id}`)
        .then((data) => {
          setTour(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setLoading(false)
        })
    }
  }, [id])

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!id) return

    try {
      const response = await fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tourId: parseInt(id),
          ...bookingForm,
        }),
      })

      if (!response.ok) throw new Error('Booking failed')

      setBookingSubmitted(true)
      setBookingForm({ name: '', email: '', seats: 1 })
    } catch (err) {
      console.error(err)
      alert('Buchung fehlgeschlagen. Bitte versuchen Sie es später erneut.')
    }
  }

  if (loading) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="text-center">
          <p>Lade Tour-Details...</p>
        </div>
      </div>
    )
  }

  if (!tour) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="text-center">
          <h2>Tour nicht gefunden</h2>
          <Link to="/tours" className="btn btn-primary mt-lg">
            Zurück zu Reiseangeboten
          </Link>
        </div>
      </div>
    )
  }

  const availableSeats = tour.seatsTotal && tour.seatsBooked
    ? tour.seatsTotal - tour.seatsBooked
    : null

  let includedServices: string[] = []
  try {
    if (tour.included) {
      includedServices = JSON.parse(tour.included)
    }
  } catch (e) {
    console.error('Failed to parse included services', e)
  }

  return (
    <div>
      {/* Hero with Image */}
      <div
        style={{
          height: '500px',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${tour.imageUrl || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'end',
          color: 'white',
        }}
      >
        <div className="container" style={{ paddingBottom: 'var(--spacing-2xl)' }}>
          {tour.category && (
            <span className="badge badge-accent mb-md" style={{ fontSize: 'var(--font-size-sm)' }}>
              {tour.category}
            </span>
          )}
          <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
            {tour.title}
          </h1>
          {tour.destination && (
            <p style={{ fontSize: 'var(--font-size-xl)', color: 'white' }}>
              📍 {tour.destination.city}, {tour.destination.country}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <section>
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)', alignItems: 'start' }}>
            {/* Main Content */}
            <div>
              <Link to="/tours" className="btn btn-secondary btn-sm mb-xl">
                ← Zurück zu Reiseangeboten
              </Link>

              <h2>Über diese Reise</h2>
              <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1.8, marginBottom: 'var(--spacing-2xl)' }}>
                {tour.description || 'Erleben Sie eine unvergessliche Reise an diesem wunderbaren Reiseziel.'}
              </p>

              <div className="flex gap-lg mb-2xl" style={{ flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Dauer</div>
                  <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600 }}>
                    ⏱️ {tour.duration || 7} Tage
                  </div>
                </div>
                {availableSeats !== null && (
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Verfügbarkeit</div>
                    <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600 }}>
                      {availableSeats > 0
                        ? `✅ ${availableSeats} Plätze frei`
                        : '❌ Ausgebucht'}
                    </div>
                  </div>
                )}
              </div>

              {includedServices.length > 0 && (
                <>
                  <h3>Inkludierte Leistungen</h3>
                  <ul style={{ marginBottom: 'var(--spacing-2xl)', paddingLeft: 'var(--spacing-xl)' }}>
                    {includedServices.map((service, index) => (
                      <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                        ✓ {service}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Booking Card */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div className="card" style={{ boxShadow: 'var(--shadow-xl)' }}>
                <div className="card-content">
                  <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                      Preis pro Person
                    </div>
                    <div className="card-price" style={{ fontSize: 'var(--font-size-4xl)' }}>
                      €{tour.price}
                    </div>
                  </div>

                  {bookingSubmitted ? (
                    <div
                      style={{
                        padding: 'var(--spacing-md)',
                        background: '#D1FAE5',
                        color: '#065F46',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: 'var(--spacing-lg)',
                      }}
                    >
                      ✅ Buchungsanfrage erfolgreich gesendet!
                    </div>
                  ) : (
                    <form onSubmit={handleBookingSubmit}>
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">E-Mail</label>
                        <input
                          type="email"
                          className="form-input"
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Anzahl Personen</label>
                        <input
                          type="number"
                          className="form-input"
                          value={bookingForm.seats}
                          onChange={(e) => setBookingForm({ ...bookingForm, seats: parseInt(e.target.value) })}
                          min="1"
                          max={availableSeats || 10}
                          required
                        />
                      </div>

                      <div
                        style={{
                          padding: 'var(--spacing-md)',
                          background: 'var(--color-bg-secondary)',
                          borderRadius: 'var(--radius-md)',
                          marginBottom: 'var(--spacing-lg)',
                        }}
                      >
                        <div className="flex justify-between mb-sm">
                          <span>Preis pro Person:</span>
                          <strong>€{tour.price}</strong>
                        </div>
                        <div className="flex justify-between mb-sm">
                          <span>Anzahl Personen:</span>
                          <strong>{bookingForm.seats}</strong>
                        </div>
                        <div
                          className="flex justify-between"
                          style={{
                            paddingTop: 'var(--spacing-sm)',
                            borderTop: '1px solid #E2E8F0',
                            fontSize: 'var(--font-size-xl)',
                          }}
                        >
                          <strong>Gesamt:</strong>
                          <strong style={{ color: 'var(--color-primary)' }}>
                            €{tour.price * bookingForm.seats}
                          </strong>
                        </div>
                      </div>

                      <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }}>
                        Jetzt buchen
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
