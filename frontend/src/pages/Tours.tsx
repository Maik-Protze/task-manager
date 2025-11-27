import React, { useEffect, useState } from 'react'
import { fetchJSON } from '../utils/api'
import TourCard from '../components/TourCard'

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
    destination?: {
        city: string
        country: string
    }
}

const categories = [
    { value: '', label: 'Alle Kategorien' },
    { value: 'Sommerreisen', label: 'Sommerreisen' },
    { value: 'Familienreisen', label: 'Familienreisen' },
    { value: 'Abenteuerreisen', label: 'Abenteuerreisen' },
    { value: 'Flitterwochen', label: 'Flitterwochen' },
    { value: 'Inlandsreisen', label: 'Inlandsreisen' },
    { value: 'Auslandsreisen', label: 'Auslandsreisen' },
]

export default function Tours() {
    const [tours, setTours] = useState<Tour[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [sortBy, setSortBy] = useState('')

    useEffect(() => {
        let url = '/api/tours'
        const params = new URLSearchParams()
        if (selectedCategory) params.append('category', selectedCategory)
        if (sortBy) params.append('sort', sortBy)
        if (params.toString()) url += `?${params.toString()}`

        fetchJSON(url)
            .then((data) => {
                setTours(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [selectedCategory, sortBy])

    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    color: 'white',
                    padding: 'var(--spacing-3xl) 0',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>Reiseangebote</h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'white' }}>
                        Finden Sie Ihre perfekte Reise aus über {tours.length} Angeboten
                    </p>
                </div>
            </div>

            {/* Content */}
            <section>
                <div className="container">
                    {/* Filters */}
                    <div
                        className="flex gap-md mb-2xl"
                        style={{
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-lg)',
                        }}
                    >
                        <div style={{ flex: '1 1 250px' }}>
                            <label className="form-label">Kategorie</label>
                            <select
                                className="form-select"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map((cat) => (
                                    <option key={cat.value} value={cat.value}>
                                        {cat.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ flex: '1 1 250px' }}>
                            <label className="form-label">Sortieren nach</label>
                            <select
                                className="form-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="">Empfehlung</option>
                                <option value="price_asc">Preis (Niedrig - Hoch)</option>
                                <option value="price_desc">Preis (Hoch - Niedrig)</option>
                            </select>
                        </div>
                    </div>

                    {/* Tours Grid */}
                    {loading ? (
                        <div className="text-center">
                            <p>Lade Angebote...</p>
                        </div>
                    ) : tours.length > 0 ? (
                        <div className="grid grid-3">
                            {tours.map((tour) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            <p>Keine Angebote gefunden</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
