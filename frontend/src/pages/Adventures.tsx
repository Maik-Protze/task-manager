import React, { useState, useEffect } from 'react';

interface Adventure {
    id: number;
    name: string;
    location: string;
    country: string;
    difficulty: string;
    elevation: number;
    duration: string;
    bestSeason: string;
    equipment: string;
    tips: string;
    description: string;
    imageUrl: string;
    price?: number;
}

interface BookingForm {
    adventureId: number | null;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    participants: number;
    startDate: string;
    experience: string;
}

// Static mountain data with real Unsplash images
const staticAdventures: Adventure[] = [
    {
        id: 1,
        name: 'Mont Blanc Besteigung',
        location: 'Chamonix',
        country: 'Frankreich',
        difficulty: 'Challenging',
        elevation: 4808,
        duration: '5-7 Tage',
        bestSeason: 'Juni - September',
        equipment: JSON.stringify(['Steigeisen', 'Eispickel', 'Seil', 'Helm', 'Gurt', 'Bergschuhe', 'Daunenjacke', 'Handschuhe']),
        tips: 'Akklimatisierung ist essentiell. Mindestens 2 Tage in Chamonix verbringen bevor die Tour beginnt. Bergführer wird empfohlen.',
        description: 'Der Mont Blanc ist mit 4.808 Metern der höchste Berg der Alpen und Westeuropas. Diese anspruchsvolle Tour führt Sie über den Normalweg (Goûter-Route) zum Gipfel. Atemberaubende Ausblicke auf die gesamte Alpenkette erwarten Sie.',
        imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
        price: 1299,
    },
    {
        id: 2,
        name: 'Zugspitze Wanderung',
        location: 'Garmisch-Partenkirchen',
        country: 'Deutschland',
        difficulty: 'Moderate',
        elevation: 2962,
        duration: '2 Tage',
        bestSeason: 'Mai - Oktober',
        equipment: JSON.stringify(['Wanderschuhe', 'Regenjacke', 'Sonnenschutz', 'Erste-Hilfe-Set', 'Wanderstöcke', 'Proviant']),
        tips: 'Die Höllental-Route ist landschaftlich besonders reizvoll, aber anspruchsvoll. Alternativ bietet sich die Reintal-Route für Einsteiger an.',
        description: 'Die Zugspitze ist Deutschlands höchster Berg. Die Wanderung führt durch malerische Täler, vorbei an kristallklaren Bergseen und bietet spektakuläre Ausblicke auf die bayerischen und österreichischen Alpen.',
        imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
        price: 449,
    },
    {
        id: 3,
        name: 'Matterhorn Expedition',
        location: 'Zermatt',
        country: 'Schweiz',
        difficulty: 'Expert',
        elevation: 4478,
        duration: '4-5 Tage',
        bestSeason: 'Juli - September',
        equipment: JSON.stringify(['Steigeisen', 'Eispickel', 'Kletterausrüstung', 'Seil', 'Helm', 'Gurt', 'Hochgebirgsschuhe', 'Biwaksack']),
        tips: 'Vorherige Erfahrung mit Hochtouren und Klettern (III. Grad) erforderlich. Ein zertifizierter Bergführer ist Pflicht für diese Route.',
        description: 'Das Matterhorn ist einer der bekanntesten und markantesten Berge der Welt. Die Besteigung über den Hörnligrat ist ein unvergessliches Erlebnis für erfahrene Alpinisten. Technisch anspruchsvoll mit exponierten Passagen.',
        imageUrl: 'https://images.unsplash.com/photo-1531400158697-004a3a06fd3f?w=800&h=600&fit=crop',
        price: 2499,
    },
];

export default function Adventures() {
    const [adventures, setAdventures] = useState<Adventure[]>(staticAdventures);
    const [loading, setLoading] = useState(false);
    const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);
    const [difficultyFilter, setDifficultyFilter] = useState('');
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [bookingForm, setBookingForm] = useState<BookingForm>({
        adventureId: null,
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        participants: 1,
        startDate: '',
        experience: 'Anfänger',
    });
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        filterAdventures();
    }, [difficultyFilter]);

    const filterAdventures = () => {
        let filtered = [...staticAdventures];
        if (difficultyFilter) {
            filtered = filtered.filter(adv => adv.difficulty === difficultyFilter);
        }
        setAdventures(filtered);
    };

    const openBookingModal = (adventure: Adventure) => {
        setBookingForm({ ...bookingForm, adventureId: adventure.id });
        setShowBookingModal(true);
        setSelectedAdventure(adventure);
    };

    const handleBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        setBookingSuccess(true);
        setTimeout(() => {
            setShowBookingModal(false);
            setBookingSuccess(false);
            setBookingForm({
                adventureId: null,
                customerName: '',
                customerEmail: '',
                customerPhone: '',
                participants: 1,
                startDate: '',
                experience: 'Anfänger',
            });
        }, 2000);
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy':
                return { bg: '#10B981', label: 'Einfach' };
            case 'Moderate':
                return { bg: '#F59E0B', label: 'Moderat' };
            case 'Challenging':
                return { bg: '#F97316', label: 'Anspruchsvoll' };
            case 'Expert':
                return { bg: '#EF4444', label: 'Experte' };
            default:
                return { bg: '#64748B', label: difficulty };
        }
    };

    const parseEquipment = (equipment: string): string[] => {
        try {
            return JSON.parse(equipment);
        } catch {
            return [];
        }
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section
                style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9)), url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600) center/cover',
                    padding: 'var(--spacing-3xl) 0',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        ⛰️ Abenteuer & Bergsteigen
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', opacity: 0.9, maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
                        Entdecken Sie atemberaubende Berge und Wanderrouten weltweit - von entspannten Küstenwanderungen bis zu anspruchsvollen Hochgebirgstouren.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-xl)',
                        flexWrap: 'wrap',
                        marginTop: 'var(--spacing-lg)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>8.848m</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Höchster Gipfel</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>25+</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Routen</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>15</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Länder</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>100%</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Sicherheit</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Difficulty Legend Section */}
            <section style={{ background: 'white', padding: 'var(--spacing-2xl) 0', borderBottom: '1px solid var(--color-bg-secondary)' }}>
                <div className="container">
                    <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Schwierigkeitsgrade erklärt</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: 'var(--spacing-md)',
                    }}>
                        <div style={{
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-lg)',
                            borderLeft: '4px solid #10B981',
                            background: 'rgba(16, 185, 129, 0.05)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                                <span style={{ fontSize: '1.5rem' }}>🚶</span>
                                <strong style={{ color: '#10B981' }}>Einfach</strong>
                            </div>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                Gut markierte Wege, moderate Steigungen. Für Anfänger geeignet. Normale Fitness ausreichend.
                            </p>
                        </div>
                        <div style={{
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-lg)',
                            borderLeft: '4px solid #F59E0B',
                            background: 'rgba(245, 158, 11, 0.05)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                                <span style={{ fontSize: '1.5rem' }}>🥾</span>
                                <strong style={{ color: '#F59E0B' }}>Moderat</strong>
                            </div>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                Längere Touren, teilweise steile Passagen. Trittsicherheit und gute Kondition erforderlich.
                            </p>
                        </div>
                        <div style={{
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-lg)',
                            borderLeft: '4px solid #F97316',
                            background: 'rgba(249, 115, 22, 0.05)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                                <span style={{ fontSize: '1.5rem' }}>🧗</span>
                                <strong style={{ color: '#F97316' }}>Anspruchsvoll</strong>
                            </div>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                Alpine Erfahrung nötig. Ausgesetzte Stellen, Höhenanpassung. Sehr gute Fitness erforderlich.
                            </p>
                        </div>
                        <div style={{
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-lg)',
                            borderLeft: '4px solid #EF4444',
                            background: 'rgba(239, 68, 68, 0.05)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                                <span style={{ fontSize: '1.5rem' }}>⛏️</span>
                                <strong style={{ color: '#EF4444' }}>Experte</strong>
                            </div>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                Nur für erfahrene Bergsteiger. Technisches Klettern, Seilsicherung, Bergführer empfohlen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
                {/* Difficulty Filter */}
                <div
                    style={{
                        display: 'flex',
                        gap: 'var(--spacing-sm)',
                        marginBottom: 'var(--spacing-xl)',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {[
                        { value: '', label: 'Alle', icon: '🌄' },
                        { value: 'Easy', label: 'Einfach', icon: '🚶' },
                        { value: 'Moderate', label: 'Moderat', icon: '🥾' },
                        { value: 'Challenging', label: 'Anspruchsvoll', icon: '🧗' },
                        { value: 'Expert', label: 'Experte', icon: '⛏️' },
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setDifficultyFilter(tab.value)}
                            style={{
                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                border: difficultyFilter === tab.value ? '2px solid var(--color-primary)' : '2px solid transparent',
                                borderRadius: 'var(--radius-full)',
                                background: difficultyFilter === tab.value ? 'var(--color-primary)' : 'var(--color-bg-secondary)',
                                color: difficultyFilter === tab.value ? 'white' : 'var(--color-text-dark)',
                                cursor: 'pointer',
                                fontWeight: 500,
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Adventures Grid */}
                {loading ? (
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            border: '4px solid var(--color-bg-secondary)',
                            borderTop: '4px solid var(--color-primary)',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto',
                        }} />
                    </div>
                ) : (
                    <div className="grid grid-3">
                        {adventures.map((adventure, index) => (
                            <div
                                key={adventure.id}
                                className="card"
                                style={{
                                    cursor: 'pointer',
                                    animationDelay: `${index * 0.1}s`,
                                }}
                                onClick={() => setSelectedAdventure(adventure)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={adventure.imageUrl}
                                        alt={adventure.name}
                                        className="card-image"
                                        style={{ height: '200px' }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 'var(--spacing-sm)',
                                            right: 'var(--spacing-sm)',
                                            background: getDifficultyColor(adventure.difficulty).bg,
                                            color: 'white',
                                            padding: 'var(--spacing-xs) var(--spacing-md)',
                                            borderRadius: 'var(--radius-full)',
                                            fontWeight: 600,
                                            fontSize: 'var(--font-size-xs)',
                                        }}
                                    >
                                        {getDifficultyColor(adventure.difficulty).label}
                                    </div>
                                    {adventure.elevation && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: 'var(--spacing-sm)',
                                                left: 'var(--spacing-sm)',
                                                background: 'rgba(0,0,0,0.7)',
                                                color: 'white',
                                                padding: 'var(--spacing-xs) var(--spacing-md)',
                                                borderRadius: 'var(--radius-md)',
                                                fontWeight: 600,
                                                fontSize: 'var(--font-size-sm)',
                                            }}
                                        >
                                            📍 {adventure.elevation.toLocaleString()}m
                                        </div>
                                    )}
                                </div>

                                <div className="card-content">
                                    <h3 className="card-title">{adventure.name}</h3>
                                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                                        📍 {adventure.location}, {adventure.country}
                                    </p>

                                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginBottom: 'var(--spacing-md)' }}>
                                        <span className="badge badge-neutral">⏱️ {adventure.duration}</span>
                                        <span className="badge badge-neutral">🗓️ {adventure.bestSeason.split(' - ')[0]}</span>
                                    </div>

                                    <p className="card-description" style={{ marginBottom: 'var(--spacing-md)' }}>
                                        {adventure.description.substring(0, 100)}...
                                    </p>

                                    {/* Price and Booking */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderTop: '1px solid var(--color-bg-secondary)',
                                        paddingTop: 'var(--spacing-md)',
                                    }}>
                                        <div>
                                            <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                                {adventure.price}€
                                            </div>
                                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
                                                pro Person
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openBookingModal(adventure);
                                            }}
                                        >
                                            🎿 Jetzt buchen
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Detail Modal */}
            {selectedAdventure && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                    }}
                    onClick={() => setSelectedAdventure(null)}
                >
                    <div
                        style={{
                            background: 'white',
                            borderRadius: 'var(--radius-xl)',
                            maxWidth: '700px',
                            width: '90%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            animation: 'slideUp 0.3s ease',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ position: 'relative' }}>
                            <img
                                src={selectedAdventure.imageUrl}
                                alt={selectedAdventure.name}
                                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                            />
                            <button
                                onClick={() => setSelectedAdventure(null)}
                                style={{
                                    position: 'absolute',
                                    top: 'var(--spacing-md)',
                                    right: 'var(--spacing-md)',
                                    background: 'rgba(0,0,0,0.5)',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: 'white',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        <div style={{ padding: 'var(--spacing-xl)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
                                <div>
                                    <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>{selectedAdventure.name}</h2>
                                    <p style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                                        📍 {selectedAdventure.location}, {selectedAdventure.country}
                                    </p>
                                </div>
                                <span
                                    style={{
                                        background: getDifficultyColor(selectedAdventure.difficulty).bg,
                                        color: 'white',
                                        padding: 'var(--spacing-sm) var(--spacing-lg)',
                                        borderRadius: 'var(--radius-full)',
                                        fontWeight: 600,
                                    }}
                                >
                                    {getDifficultyColor(selectedAdventure.difficulty).label}
                                </span>
                            </div>

                            {/* Stats Grid */}
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                                    gap: 'var(--spacing-md)',
                                    marginTop: 'var(--spacing-lg)',
                                    marginBottom: 'var(--spacing-lg)',
                                }}
                            >
                                {[
                                    { icon: '📍', label: 'Höhe', value: `${selectedAdventure.elevation?.toLocaleString() || 'N/A'}m` },
                                    { icon: '⏱️', label: 'Dauer', value: selectedAdventure.duration },
                                    { icon: '🗓️', label: 'Beste Zeit', value: selectedAdventure.bestSeason },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        style={{
                                            background: 'var(--color-bg-secondary)',
                                            padding: 'var(--spacing-md)',
                                            borderRadius: 'var(--radius-md)',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <div style={{ fontSize: '1.5rem' }}>{stat.icon}</div>
                                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>{stat.label}</div>
                                        <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>{stat.value}</div>
                                    </div>
                                ))}
                            </div>

                            <p style={{ color: 'var(--color-text-medium)' }}>{selectedAdventure.description}</p>

                            <h4 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>🎒 Empfohlene Ausrüstung</h4>
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                {parseEquipment(selectedAdventure.equipment).map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="badge badge-neutral"
                                        style={{ fontSize: 'var(--font-size-sm)' }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {selectedAdventure.tips && (
                                <>
                                    <h4 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>💡 Tipps</h4>
                                    <div
                                        style={{
                                            background: 'rgba(245, 158, 11, 0.1)',
                                            padding: 'var(--spacing-md)',
                                            borderRadius: 'var(--radius-md)',
                                            borderLeft: '4px solid var(--color-warning)',
                                        }}
                                    >
                                        <p style={{ marginBottom: 0, color: 'var(--color-text-medium)' }}>{selectedAdventure.tips}</p>
                                    </div>
                                </>
                            )}

                            {/* Booking Section in Detail Modal */}
                            <div style={{
                                marginTop: 'var(--spacing-xl)',
                                padding: 'var(--spacing-lg)',
                                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 'var(--spacing-md)',
                            }}>
                                <div>
                                    <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                        ab {selectedAdventure.price}€ <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 400 }}>pro Person</span>
                                    </div>
                                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)' }}>
                                        inkl. Bergführer, Ausrüstung & Unterkunft
                                    </div>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setSelectedAdventure(null);
                                        openBookingModal(selectedAdventure);
                                    }}
                                >
                                    🎿 Expedition buchen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Booking Modal */}
            {showBookingModal && selectedAdventure && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1001,
                        animation: 'fadeIn 0.3s ease',
                    }}
                    onClick={() => setShowBookingModal(false)}
                >
                    <div
                        style={{
                            background: 'white',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--spacing-xl)',
                            maxWidth: '500px',
                            width: '90%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            animation: 'slideUp 0.3s ease',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {bookingSuccess ? (
                            <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                                <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>🏔️</div>
                                <h3 style={{ color: 'var(--color-success)' }}>Buchung erfolgreich!</h3>
                                <p>Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden.</p>
                            </div>
                        ) : (
                            <>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                                    <h3 style={{ marginBottom: 0 }}>🎿 {selectedAdventure.name} buchen</h3>
                                    <button
                                        onClick={() => setShowBookingModal(false)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            fontSize: '1.5rem',
                                            cursor: 'pointer',
                                            color: 'var(--color-text-light)',
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div style={{
                                    background: 'var(--color-bg-secondary)',
                                    padding: 'var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-lg)',
                                }}>
                                    <p style={{ marginBottom: 0 }}>
                                        <strong>{selectedAdventure.price}€</strong> pro Person • {selectedAdventure.duration} • {selectedAdventure.difficulty}
                                    </p>
                                </div>

                                <form onSubmit={handleBooking}>
                                    <div className="form-group">
                                        <label className="form-label">Name *</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={bookingForm.customerName}
                                            onChange={(e) => setBookingForm({ ...bookingForm, customerName: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">E-Mail *</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            value={bookingForm.customerEmail}
                                            onChange={(e) => setBookingForm({ ...bookingForm, customerEmail: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Telefon *</label>
                                        <input
                                            type="tel"
                                            className="form-input"
                                            value={bookingForm.customerPhone}
                                            onChange={(e) => setBookingForm({ ...bookingForm, customerPhone: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                                        <div className="form-group">
                                            <label className="form-label">Startdatum *</label>
                                            <input
                                                type="date"
                                                className="form-input"
                                                value={bookingForm.startDate}
                                                onChange={(e) => setBookingForm({ ...bookingForm, startDate: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Teilnehmer</label>
                                            <select
                                                className="form-select"
                                                value={bookingForm.participants}
                                                onChange={(e) => setBookingForm({ ...bookingForm, participants: parseInt(e.target.value) })}
                                            >
                                                {[1, 2, 3, 4, 5, 6].map(n => (
                                                    <option key={n} value={n}>{n} Person{n > 1 ? 'en' : ''}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Erfahrungslevel</label>
                                        <select
                                            className="form-select"
                                            value={bookingForm.experience}
                                            onChange={(e) => setBookingForm({ ...bookingForm, experience: e.target.value })}
                                        >
                                            <option value="Anfänger">Anfänger</option>
                                            <option value="Fortgeschritten">Fortgeschritten</option>
                                            <option value="Experte">Experte</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                        Buchung anfragen
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
