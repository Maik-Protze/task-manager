import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchJSON } from '../utils/api'
import Button from '../components/Button'

type Destination = {
  id: number
  country: string
  city: string
  description?: string
  tours?: Array<{ id: number; title: string; price: number }>
}

type Mood = 'All' | 'Romantik' | 'Stadtleben' | 'Kultur' | 'Abenteuer' | 'Luxus'

const moodMapping: { [key: string]: Mood[] } = {
  'Paris': ['Romantik', 'Kultur', 'Stadtleben'],
  'Santorini': ['Romantik', 'Luxus'],
  'Malediven': ['Romantik', 'Luxus', 'Abenteuer'], // Abenteuer (Diving)
  'Malé': ['Romantik', 'Luxus', 'Abenteuer'],
  'Rom': ['Kultur', 'Romantik', 'Stadtleben'],
  'Berlin': ['Stadtleben', 'Kultur'],
  'London': ['Stadtleben', 'Kultur'],
  'New York': ['Stadtleben', 'Luxus'],
  'Dubai': ['Luxus', 'Stadtleben', 'Abenteuer'],
  'Barcelona': ['Kultur', 'Stadtleben', 'Abenteuer'],
  'Istanbul': ['Kultur', 'Stadtleben'],
  'Prag': ['Kultur', 'Romantik'],
  'Amsterdam': ['Stadtleben', 'Kultur'],
  'München': ['Kultur', 'Stadtleben'],
}

export default function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [activeMood, setActiveMood] = useState<Mood>('All')

  useEffect(() => {
    fetchJSON('/api/destinations')
      .then((d) => {
        setDestinations(d)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const getDestinationImage = (city: string) => {
    const images: { [key: string]: string } = {
      // Deutsche Städte - lokale Bilder
      'Berlin': '/germany/berlin.jpg',
      'Leipzig': '/germany/leipzig.jpg',
      'München': 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=800&h=600&fit=crop',
      
      // Syrische Städte - lokale Bilder
      'Damascus': '/syria/damascus.jpg',
      'Damaskus': '/syria/damascus.jpg',
      'Aleppo': '/syria/aleppo.jpg',
      'Haleb': '/syria/aleppo.jpg',
      
      // Internationale Destinationen - Unsplash
      'Paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop&v=2',
      'Barcelona': 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&h=600&fit=crop',
      'Istanbul': 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop',
      'Santorini': 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
      'Dubai': 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop',
      'Malé': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
      'Rom': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
      'Amsterdam': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop',
      'Prag': 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=600&fit=crop',
      'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
    }
    return images[city] || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop'
  }

  const getMinPrice = (tours: Destination['tours']) => {
    if (!tours || tours.length === 0) return null
    return Math.min(...tours.map(t => t.price))
  }

  const filteredDestinations = activeMood === 'All'
    ? destinations
    : destinations.filter(d => moodMapping[d.city]?.includes(activeMood))

  // Featured destinations (Top 3 from filtered list)
  const featured = filteredDestinations.slice(0, 3)
  const rest = filteredDestinations.slice(3)

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: 'var(--spacing-4xl) 0',
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Wohin soll die Reise gehen?
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'white', maxWidth: '700px', margin: '0 auto', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Finden Sie die perfekte Destination für Ihre Stimmung.
          </p>
        </div>
      </div>

      {/* Mood Filter */}
      <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-bg-secondary)', position: 'sticky', top: '70px', zIndex: 10, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {(['All', 'Romantik', 'Stadtleben', 'Kultur', 'Abenteuer', 'Luxus'] as Mood[]).map((mood) => (
              <button
                key={mood}
                onClick={() => setActiveMood(mood)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  background: activeMood === mood ? 'var(--color-primary)' : 'white',
                  color: activeMood === mood ? 'white' : 'var(--color-text-dark)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  transform: activeMood === mood ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {mood === 'All' ? 'Alle Ziele' : mood}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading ? (
            <div className="text-center"><p>Lade Destinationen...</p></div>
          ) : filteredDestinations.length > 0 ? (
            <>
              {/* Featured Section */}
              {activeMood === 'All' && (
                <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
                  <h2 className="mb-xl text-center">Beliebte Highlights</h2>
                  <div className="grid grid-3">
                    {featured.map((dest) => {
                      const minPrice = getMinPrice(dest.tours)
                      return (
                        <div key={dest.id} className="card" style={{ position: 'relative', overflow: 'hidden', height: '400px', border: 'none' }}>
                          <img
                            src={getDestinationImage(dest.city)}
                            alt={dest.city}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop'
                            }}
                          />
                          <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                            padding: '2rem',
                            color: 'white'
                          }}>
                            <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '0.5rem' }}>{dest.city}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                              <div>
                                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>{dest.country}</span>
                                <div style={{ marginTop: '0.5rem' }}>
                                  {moodMapping[dest.city]?.map(m => (
                                    <span key={m} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', marginRight: '4px' }}>
                                      {m}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div style={{ textAlign: 'right' }}>
                                {minPrice && (
                                  <div style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>ab <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{minPrice} €</span></div>
                                )}
                                <Link to="/tours" state={{ destination: dest.id }}>
                                  <Button variant="accent" size="sm">Entdecken</Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Remaining Grid */}
              <h2 className="mb-xl text-center">{activeMood === 'All' ? 'Weitere Entdeckungen' : `Beste Ziele für ${activeMood}`}</h2>
              <div className="grid grid-4">
                {(activeMood === 'All' ? rest : filteredDestinations).map((dest) => {
                  const minPrice = getMinPrice(dest.tours)
                  return (
                    <div key={dest.id} className="card">
                      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                        <img
                          src={getDestinationImage(dest.city)}
                          alt={dest.city}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {minPrice && (
                          <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                          }}>
                            ab {minPrice} €
                          </div>
                        )}
                      </div>
                      <div className="card-content">
                        <h3 className="card-title" style={{ fontSize: '1.25rem' }}>{dest.city}</h3>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '1rem' }}>{dest.country}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '1rem' }}>
                          {moodMapping[dest.city]?.slice(0, 2).map(m => (
                            <span key={m} style={{ fontSize: '0.7rem', background: 'var(--color-bg-secondary)', padding: '2px 6px', borderRadius: '4px', color: 'var(--color-text-medium)' }}>
                              {m}
                            </span>
                          ))}
                        </div>
                        <Link to="/tours" state={{ destination: dest.id }} style={{ width: '100%' }}>
                          <Button variant="secondary" size="sm" style={{ width: '100%' }}>Angebote ({dest.tours?.length || 0})</Button>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-3xl">
              <h3>Keine Destinationen für diesen Filter gefunden.</h3>
              <button onClick={() => setActiveMood('All')} className="btn btn-link">Alle anzeigen</button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
