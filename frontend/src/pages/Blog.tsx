import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchJSON } from '../utils/api'

type BlogPost = {
    id: number
    title: string
    excerpt?: string
    content: string
    imageUrl?: string
    author: string
    category: string
    publishedAt: string
}

export default function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('')

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        let url = '/api/blog'
        if (selectedCategory) url += `?category=${selectedCategory}`

        fetchJSON(url)
            .then((data) => {
                setPosts(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [selectedCategory])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    return (
        <div>
            {/* Hero */}
            <div
                style={{
                    background: 'linear-gradient(rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8)), url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1600&h=600&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: 'var(--spacing-3xl) 0',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        📰 Reiseblog & Tipps
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                        Inspirierende Geschichten und hilfreiche Reisetipps von unseren Experten
                    </p>
                </div>
            </div>

            {/* Über uns Section */}
            <section style={{ background: 'white', padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-2xl)' }}>
                        <h2 style={{ color: 'var(--color-text-dark)', marginBottom: 'var(--spacing-md)' }}>Über uns</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-medium)' }}>
                            Wir sind ein Team aus leidenschaftlichen Reiseexperten, die es sich zur Aufgabe gemacht haben,
                            Ihnen die schönsten Orte der Welt näherzubringen. Mit authentischen Berichten und geprüften Tipps.
                        </p>
                    </div>

                    <div className="grid grid-3">
                        <div style={{ padding: 'var(--spacing-xl)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🌍</div>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Expertise</h3>
                            <p style={{ color: 'var(--color-text-medium)' }}>Jahrelange Erfahrung in der Tourismusbranche und lokale Partner in über 50 Ländern.</p>
                        </div>
                        <div style={{ padding: 'var(--spacing-xl)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>❤️</div>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Leidenschaft</h3>
                            <p style={{ color: 'var(--color-text-medium)' }}>Wir reisen selbst für unser Leben gern und teilen nur, was wir wirklich empfehlen können.</p>
                        </div>
                        <div style={{ padding: 'var(--spacing-xl)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🛡️</div>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Vertrauen</h3>
                            <p style={{ color: 'var(--color-text-medium)' }}>Unabhängige Bewertungen und ehrliche Meinungen stehen bei uns an erster Stelle.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section style={{ background: 'var(--color-primary)', padding: 'var(--spacing-2xl) 0', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>Verpassen Sie kein Abenteuer!</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)', opacity: 0.9 }}>
                        Abonnieren Sie unseren Newsletter für wöchentliche Reisetipps und exklusive Angebote.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
                        <input
                            type="email"
                            placeholder="Ihre E-Mail-Adresse"
                            style={{
                                padding: '1rem',
                                borderRadius: 'var(--radius-full)',
                                border: 'none',
                                flex: 1,
                                fontSize: '1rem'
                            }}
                        />
                        <button className="btn" style={{ background: 'var(--color-text-dark)', color: 'white', border: 'none' }}>
                            Anmelden
                        </button>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section style={{ padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    {/* Category Filter */}
                    <div className="flex gap-md mb-2xl justify-center" style={{ flexWrap: 'wrap' }}>
                        <button
                            className={selectedCategory === '' ? 'btn btn-primary' : 'btn btn-secondary'}
                            onClick={() => setSelectedCategory('')}
                        >
                            Alle
                        </button>
                        <button
                            className={selectedCategory === 'Reisetipps' ? 'btn btn-primary' : 'btn btn-secondary'}
                            onClick={() => setSelectedCategory('Reisetipps')}
                        >
                            Reisetipps
                        </button>
                        <button
                            className={selectedCategory === 'Destinationen' ? 'btn btn-primary' : 'btn btn-secondary'}
                            onClick={() => setSelectedCategory('Destinationen')}
                        >
                            Destinationen
                        </button>
                        <button
                            className={selectedCategory === 'Kultur' ? 'btn btn-primary' : 'btn btn-secondary'}
                            onClick={() => setSelectedCategory('Kultur')}
                        >
                            Kultur
                        </button>
                    </div>

                    {/* Blog Posts Grid */}
                    {loading ? (
                        <div className="text-center">
                            <p>Lade Beiträge...</p>
                        </div>
                    ) : posts.length > 0 ? (
                        <div className="grid grid-2">
                            {posts.map((post) => (
                                <div key={post.id} className="card">
                                    <img
                                        src={post.imageUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'}
                                        alt={post.title}
                                        className="card-image"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'
                                        }}
                                    />
                                    <div className="card-content">
                                        <span className="badge badge-accent mb-sm">{post.category}</span>
                                        <h3 className="card-title">{post.title}</h3>
                                        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
                                            ✍️ {post.author} · 📅 {formatDate(post.publishedAt)}
                                        </p>
                                        <p className="card-description">
                                            {post.excerpt || post.content.substring(0, 150) + '...'}
                                        </p>
                                        <Link to={`/blog/${post.id}`} className="btn btn-primary btn-sm">
                                            Weiterlesen
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            <p>Keine Beiträge gefunden</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
