import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const summerCategories = [
    { title: 'Party & Spaß', emoji: '🎉', category: 'Party' },
    { title: 'Aktiv & Sport', emoji: '🏄', category: 'Sport' },
    { title: 'Natur & Entspannung', emoji: '🏔️', category: 'Natur' },
    { title: 'Luxus & Meer', emoji: '💎', category: 'Luxus' },
]

const exclusiveSummerOffers = [
    {
        id: 'summer-1',
        title: 'Ibiza Summer Vibes VIP',
        description: 'Das ultimative Party-Erlebnis: VIP-Zugang zu den besten Clubs, private Villa und Yacht-Tag.',
        price: 1499,
        imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=600&fit=crop', // Club/Party vibe
        tags: ['VIP', 'Party', 'Villa'],
        duration: '7 Tage'
    },
    {
        id: 'summer-2',
        title: 'Portugal Surf & Soul',
        description: 'Surfcamp an der Algarve: Professionelles Coaching, Yoga am Strand und gesunde Küche.',
        price: 899,
        imageUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop', // Surfer (kept as it was good)
        tags: ['Sport', 'Wellness', 'Strand'],
        duration: '10 Tage'
    },
    {
        id: 'summer-3',
        title: 'Norwegen Mitternachtssonne',
        description: 'Erleben Sie die Magie des Nordens: Wandern, Fjorde und die Sonne, die nie untergeht.',
        price: 1299,
        imageUrl: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=800&h=600&fit=crop', // Bright Fjord/Hiking
        tags: ['Natur', 'Wandern', 'Abenteuer'],
        duration: '8 Tage'
    },
    {
        id: 'summer-4',
        title: 'Yacht Week Croatia',
        description: 'Segeln Sie mit einer privaten Crew durch die Inselwelt Kroatiens. Luxus und Freiheit pur.',
        price: 1899,
        imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop', // White yachts in harbor
        tags: ['Segeln', 'Luxus', 'Inseln'],
        duration: '7 Tage'
    }
]

const summerEvents = [
    {
        title: 'Sommer Sound Festival',
        date: '15. - 18. Juli 2026',
        location: 'Barcelona, Spanien',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop' // Festival crowd
    },
    {
        title: 'Vollmond Strand Party',
        date: '12. August 2026',
        location: 'Koh Phangan, Thailand',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop' // Beach party fire
    },
    {
        title: 'Street Food Karneval',
        date: '05. - 07. Juni 2026',
        location: 'Berlin, Deutschland',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop' // Food stall
    }
]

export default function SummerPrograms() {
    return (
        <div>
            {/* Hero */}
            <div
                style={{
                    background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600&h=900&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: 'var(--spacing-4xl) 0',
                    textAlign: 'center',
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                <div className="container">
                    <span style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '1rem',
                        display: 'inline-block'
                    }}>
                        Sommer 2026 Kollektion
                    </span>
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', fontSize: '4rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        Unvergessliche Momente
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: 'white', maxWidth: '800px', margin: '0 auto', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                        Entdecken Sie unsere exklusiven Sommer-Specials, die Sie nirgendwo anders finden.
                    </p>
                </div>
            </div>

            {/* Categories */}
            <section style={{ background: 'var(--color-bg-secondary)', padding: 'var(--spacing-xl) 0' }}>
                <div className="container">
                    <div className="grid grid-4">
                        {summerCategories.map((cat) => (
                            <div
                                key={cat.title}
                                className="card"
                                style={{
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    border: 'none',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="card-content">
                                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>
                                        {cat.emoji}
                                    </div>
                                    <h3 style={{ marginBottom: 0, color: 'var(--color-text-dark)' }}>{cat.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exclusive Offers */}
            <section>
                <div className="container">
                    <h2 className="text-center mb-2xl">
                        <span style={{ color: 'var(--color-primary)' }}>Exklusive</span> Sommer-Highlights
                    </h2>

                    <div className="grid grid-2">
                        {exclusiveSummerOffers.map((offer) => (
                            <div key={offer.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={offer.imageUrl}
                                        alt={offer.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: 'rgba(255,255,255,0.9)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '4px',
                                        fontWeight: 'bold',
                                        color: 'var(--color-primary)'
                                    }}>
                                        {offer.duration}
                                    </div>
                                </div>
                                <div className="card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                        {offer.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.75rem',
                                                background: 'var(--color-bg-secondary)',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                color: 'var(--color-text-medium)'
                                            }}>
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{offer.title}</h3>
                                    <p style={{ color: 'var(--color-text-medium)', marginBottom: '1.5rem', flex: 1 }}>
                                        {offer.description}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                            {offer.price} € <span style={{ fontSize: '0.875rem', fontWeight: 'normal', color: 'var(--color-text-light)' }}>p.P.</span>
                                        </div>
                                        <Link to="/contact">
                                            <Button variant="primary">Anfragen</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Summer Events */}
            <section style={{ background: 'var(--color-neutral-cream)' }}>
                <div className="container">
                    <h2 className="text-center mb-xl">Sommer Events 2026</h2>
                    <div className="grid grid-3">
                        {summerEvents.map((event, index) => (
                            <div key={index} className="card" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
                                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1rem', height: '200px' }}>
                                    <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '0.25rem' }}>{event.date}</div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{event.title}</h3>
                                    <div style={{ color: 'var(--color-text-light)' }}>📍 {event.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Offer Banner */}
            <section
                style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    color: 'white',
                    textAlign: 'center',
                    padding: 'var(--spacing-4xl) 0'
                }}
            >
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)', fontSize: '2.5rem' }}>
                        Ihr Sommer wartet auf Sie
                    </h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xl)', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
                        Sichern Sie sich jetzt Ihren Platz für die exklusivsten Erlebnisse des Jahres. Begrenzte Verfügbarkeit!
                    </p>
                    <Link to="/contact">
                        <button className="btn btn-accent btn-lg" style={{ background: 'white', color: 'var(--color-primary)', border: 'none' }}>
                            Jetzt unverbindlich anfragen
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
