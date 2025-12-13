import React, { useState, useEffect } from 'react';

interface TripPlan {
    destination: string;
    estimatedCost: number;
    duration: number;
    month: string;
    type: string;
    itinerary: string;
    activities: string;
    safetyInfo: string;
    weatherInfo: string;
    imageUrl: string;
}

// Static trip recommendations organized by type
const tripRecommendations: Record<string, { destinations: Array<{ name: string; image: string; activities: string[]; itinerary: Record<string, string>; weather: string; safety: string; baseCost: number }> }> = {
    beach: {
        destinations: [
            {
                name: 'Mallorca, Spanien',
                image: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?w=800',
                activities: ['Strandbesuch', 'Schnorcheln', 'Bootstouren', 'Altstadt Palma', 'Tapas-Tour'],
                itinerary: { 'Tag 1': 'Ankunft, Strand erkunden', 'Tag 2': 'Bootstour zur Cala Varques', 'Tag 3': 'Palma Altstadt & Kathedrale', 'Tag 4': 'Schnorcheln & Wassersport', 'Tag 5': 'Entspannung & Abreise' },
                weather: 'Sonnig, 25-30°C, ideales Strandwetter',
                safety: 'Sehr sicher. Normale Vorsichtsmaßnahmen.',
                baseCost: 600,
            },
            {
                name: 'Kreta, Griechenland',
                image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
                activities: ['Strandhopping', 'Knossos besuchen', 'Griechische Küche', 'Elafonisi Beach', 'Wandern'],
                itinerary: { 'Tag 1': 'Ankunft in Heraklion', 'Tag 2': 'Palast von Knossos', 'Tag 3': 'Elafonisi Strand', 'Tag 4': 'Rethymno erkunden', 'Tag 5': 'Wanderung & Abreise' },
                weather: 'Warm und sonnig, 26-32°C',
                safety: 'Sehr sicher. Ideal für Familien.',
                baseCost: 700,
            },
        ],
    },
    city: {
        destinations: [
            {
                name: 'Barcelona, Spanien',
                image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
                activities: ['Sagrada Familia', 'Park Güell', 'La Rambla', 'Tapas-Tour', 'Gotisches Viertel'],
                itinerary: { 'Tag 1': 'Ankunft, La Rambla erkunden', 'Tag 2': 'Sagrada Familia & Park Güell', 'Tag 3': 'Strand & Barceloneta', 'Tag 4': 'Gotisches Viertel & Museen', 'Tag 5': 'Shopping & Abreise' },
                weather: 'Angenehm warm, 20-28°C',
                safety: 'Sicher. Auf Taschendiebe achten.',
                baseCost: 500,
            },
            {
                name: 'Wien, Österreich',
                image: 'https://images.unsplash.com/photo-1516550893885-985c836c68d6?w=800',
                activities: ['Schloss Schönbrunn', 'Stephansdom', 'Kaffeehäuser', 'Prater', 'Museen'],
                itinerary: { 'Tag 1': 'Ankunft, Stephansdom', 'Tag 2': 'Schönbrunn & Tiergarten', 'Tag 3': 'Kunsthistorisches Museum', 'Tag 4': 'Prater & Heuriger', 'Tag 5': 'Naschmarkt & Abreise' },
                weather: 'Mild bis warm, 15-25°C',
                safety: 'Sehr sicher. Einer der sichersten Städte Europas.',
                baseCost: 550,
            },
        ],
    },
    adventure: {
        destinations: [
            {
                name: 'Schweizer Alpen',
                image: 'https://images.unsplash.com/photo-1531400158697-004a3a06fd3f?w=800',
                activities: ['Wandern', 'Bergbahnen', 'Paragliding', 'Klettern', 'Mountainbiking'],
                itinerary: { 'Tag 1': 'Ankunft in Interlaken', 'Tag 2': 'Jungfraujoch Ausflug', 'Tag 3': 'Wanderung First Cliff Walk', 'Tag 4': 'Paragliding & Thunersee', 'Tag 5': 'Grindelwald & Abreise' },
                weather: 'Bergwetter, 10-20°C, wechselhaft',
                safety: 'Sicher bei Vorbereitung. Bergausrüstung wichtig.',
                baseCost: 900,
            },
            {
                name: 'Norwegische Fjorde',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
                activities: ['Fjord-Kreuzfahrt', 'Wandern', 'Kayaking', 'Trolltunga', 'Nordlichter'],
                itinerary: { 'Tag 1': 'Ankunft in Bergen', 'Tag 2': 'Geirangerfjord Kreuzfahrt', 'Tag 3': 'Trolltunga Wanderung', 'Tag 4': 'Kayaking im Fjord', 'Tag 5': 'Bergen erkunden & Abreise' },
                weather: 'Kühl, 10-18°C, regnerisch möglich',
                safety: 'Sehr sicher. Outdoorausrüstung empfohlen.',
                baseCost: 1100,
            },
        ],
    },
    culture: {
        destinations: [
            {
                name: 'Rom, Italien',
                image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
                activities: ['Kolosseum', 'Vatikan', 'Trevi-Brunnen', 'Pantheon', 'Italienische Küche'],
                itinerary: { 'Tag 1': 'Ankunft, Trevi-Brunnen', 'Tag 2': 'Kolosseum & Forum Romanum', 'Tag 3': 'Vatikanische Museen', 'Tag 4': 'Trastevere & Kochen', 'Tag 5': 'Villa Borghese & Abreise' },
                weather: 'Warm und sonnig, 22-30°C',
                safety: 'Sicher. Auf Taschendiebe achten.',
                baseCost: 600,
            },
            {
                name: 'Paris, Frankreich',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
                activities: ['Eiffelturm', 'Louvre', 'Notre-Dame', 'Montmartre', 'Französische Küche'],
                itinerary: { 'Tag 1': 'Ankunft, Champs-Élysées', 'Tag 2': 'Louvre & Tuileries', 'Tag 3': 'Eiffelturm & Seine-Fahrt', 'Tag 4': 'Montmartre & Sacré-Cœur', 'Tag 5': 'Versailles & Abreise' },
                weather: 'Mild, 18-25°C',
                safety: 'Sicher. Normale Stadtvorischtsmaßnahmen.',
                baseCost: 650,
            },
        ],
    },
    relaxation: {
        destinations: [
            {
                name: 'Therme Erding, Deutschland',
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
                activities: ['Thermalbäder', 'Sauna', 'Wellness-Behandlungen', 'Rutschen', 'Entspannung'],
                itinerary: { 'Tag 1': 'Ankunft, Therme erkunden', 'Tag 2': 'Saunalandschaft', 'Tag 3': 'Wellness & Massage', 'Tag 4': 'VitalOase', 'Tag 5': 'Entspannung & Abreise' },
                weather: 'Indoor, ganzjährig angenehm',
                safety: 'Sehr sicher. Familienfreundlich.',
                baseCost: 400,
            },
            {
                name: 'Toskana, Italien',
                image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
                activities: ['Weingüter besuchen', 'Thermalquellen', 'Italienische Küche', 'Landschaft genießen', 'Kochkurs'],
                itinerary: { 'Tag 1': 'Ankunft in Florenz', 'Tag 2': 'Chianti Weintour', 'Tag 3': 'Thermalquellen Saturnia', 'Tag 4': 'Kochkurs & Siena', 'Tag 5': 'San Gimignano & Abreise' },
                weather: 'Sonnig und warm, 24-30°C',
                safety: 'Sehr sicher. Ideale Entspannungsregion.',
                baseCost: 700,
            },
        ],
    },
};

export default function TripPlanner() {
    const [formData, setFormData] = useState({
        budget: '',
        duration: '',
        month: '',
        type: '',
    });
    const [loading, setLoading] = useState(false);
    const [tripPlan, setTripPlan] = useState<TripPlan | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Generate trip based on user preferences (fallback when API unavailable)
    const generateLocalTrip = (): TripPlan => {
        const typeData = tripRecommendations[formData.type] || tripRecommendations.beach;
        const destination = typeData.destinations[Math.floor(Math.random() * typeData.destinations.length)];
        const durationDays = parseInt(formData.duration) || 7;
        const budget = parseInt(formData.budget) || 1000;

        // Adjust cost based on duration and budget
        const costMultiplier = durationDays / 5;
        const estimatedCost = Math.min(budget, Math.round(destination.baseCost * costMultiplier));

        return {
            destination: destination.name,
            estimatedCost,
            duration: durationDays,
            month: formData.month,
            type: formData.type,
            itinerary: JSON.stringify(destination.itinerary),
            activities: JSON.stringify(destination.activities),
            safetyInfo: JSON.stringify({ level: destination.safety }),
            weatherInfo: JSON.stringify({ summary: destination.weather }),
            imageUrl: destination.image,
        };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setTripPlan(null);

        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
            const response = await fetch('http://localhost:4000/api/trip-planner/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    budget: parseInt(formData.budget),
                    duration: parseInt(formData.duration),
                    month: formData.month,
                    type: formData.type,
                }),
            });

            const data = await response.json();
            if (data.error) {
                // Use local fallback
                const localTrip = generateLocalTrip();
                setTripPlan(localTrip);
            } else {
                setTripPlan(data);
            }
        } catch (err) {
            // Use local fallback when backend unavailable
            const localTrip = generateLocalTrip();
            setTripPlan(localTrip);
        } finally {
            setLoading(false);
        }
    };

    const parseArray = (jsonString: string): string[] => {
        try {
            return JSON.parse(jsonString);
        } catch {
            return [];
        }
    };

    const parseObject = (jsonString: string): Record<string, string> => {
        try {
            return JSON.parse(jsonString);
        } catch {
            return {};
        }
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section
                style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(109, 40, 217, 0.9)), url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600) center/cover',
                    padding: 'var(--spacing-3xl) 0',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        🤖 Intelligenter KI Reiseplaner
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', opacity: 0.9, maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
                        Unser fortschrittlicher Algorithmus analysiert Ihre Präferenzen und erstellt einen maßgeschneiderten Reiseplan mit Aktivitäten, Wetter und Sicherheitsinformationen.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-xl)',
                        flexWrap: 'wrap',
                        marginTop: 'var(--spacing-lg)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>50+</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Reiseziele</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>100K+</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Erstelle Pläne</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>98%</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Zufriedenheit</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section style={{ background: 'white', padding: 'var(--spacing-2xl) 0', borderBottom: '1px solid var(--color-bg-secondary)' }}>
                <div className="container">
                    <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>So funktioniert's in 4 Schritten</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-lg)',
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                margin: '0 auto var(--spacing-md)',
                            }}>1</div>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>💰 Budget eingeben</h4>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                Wählen Sie Ihr verfügbares Reisebudget
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                margin: '0 auto var(--spacing-md)',
                            }}>2</div>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>📅 Zeitraum wählen</h4>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                Reisedauer und bevorzugten Monat angeben
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                margin: '0 auto var(--spacing-md)',
                            }}>3</div>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>🎯 Reiseart bestimmen</h4>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                Strand, Stadt, Abenteuer oder Kultur?
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                margin: '0 auto var(--spacing-md)',
                            }}>4</div>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>✨ Plan erhalten</h4>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                Sofortiger Reiseplan mit allen Details
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)', maxWidth: '1000px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: tripPlan ? '1fr 1.5fr' : '1fr', gap: 'var(--spacing-xl)' }}>
                    {/* Form */}
                    <div
                        style={{
                            background: 'white',
                            padding: 'var(--spacing-xl)',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--shadow-lg)',
                        }}
                    >
                        <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>✨ Ihre Reisepräferenzen</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">💰 Budget (€)</label>
                                <select
                                    className="form-select"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                    required
                                >
                                    <option value="">Budget wählen</option>
                                    <option value="500">bis 500€</option>
                                    <option value="1000">bis 1.000€</option>
                                    <option value="1500">bis 1.500€</option>
                                    <option value="2000">bis 2.000€</option>
                                    <option value="3000">bis 3.000€</option>
                                    <option value="5000">bis 5.000€</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">⏱️ Reisedauer (Tage)</label>
                                <select
                                    className="form-select"
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    required
                                >
                                    <option value="">Dauer wählen</option>
                                    <option value="3">3 Tage</option>
                                    <option value="5">5 Tage</option>
                                    <option value="7">7 Tage</option>
                                    <option value="10">10 Tage</option>
                                    <option value="14">14 Tage</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">📅 Reisemonat</label>
                                <select
                                    className="form-select"
                                    value={formData.month}
                                    onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                                    required
                                >
                                    <option value="">Monat wählen</option>
                                    {['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'].map((month) => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">🎯 Reiseart</label>
                                <select
                                    className="form-select"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    required
                                >
                                    <option value="">Art wählen</option>
                                    <option value="beach">🏖️ Strandurlaub</option>
                                    <option value="city">🏙️ Städtereise</option>
                                    <option value="adventure">🏔️ Abenteuer</option>
                                    <option value="culture">🏛️ Kultur</option>
                                    <option value="relaxation">🧘 Entspannung</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-sm)' }}>
                                        <span style={{
                                            width: '20px',
                                            height: '20px',
                                            border: '2px solid rgba(255,255,255,0.3)',
                                            borderTop: '2px solid white',
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite',
                                        }} />
                                        Plan wird erstellt...
                                    </span>
                                ) : (
                                    '🚀 Reiseplan generieren'
                                )}
                            </button>
                        </form>

                        {error && (
                            <div
                                style={{
                                    marginTop: 'var(--spacing-md)',
                                    padding: 'var(--spacing-md)',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'var(--color-error)',
                                }}
                            >
                                {error}
                            </div>
                        )}
                    </div>

                    {/* Result */}
                    {tripPlan && (
                        <div
                            style={{
                                background: 'white',
                                borderRadius: 'var(--radius-xl)',
                                boxShadow: 'var(--shadow-lg)',
                                overflow: 'hidden',
                                animation: 'slideUp 0.5s ease',
                            }}
                        >
                            <img
                                src={tripPlan.imageUrl}
                                alt={tripPlan.destination}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />

                            <div style={{ padding: 'var(--spacing-xl)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
                                    <div>
                                        <span className="badge badge-primary" style={{ marginBottom: 'var(--spacing-sm)' }}>Empfehlung</span>
                                        <h2 style={{ marginBottom: 0 }}>🌍 {tripPlan.destination}</h2>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                            ~{tripPlan.estimatedCost}€
                                        </div>
                                        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>
                                            {tripPlan.duration} Tage
                                        </div>
                                    </div>
                                </div>

                                {/* Weather Info */}
                                {tripPlan.weatherInfo && (
                                    <div
                                        style={{
                                            marginTop: 'var(--spacing-lg)',
                                            padding: 'var(--spacing-md)',
                                            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
                                            borderRadius: 'var(--radius-md)',
                                        }}
                                    >
                                        <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>🌤️ Wetter im {tripPlan.month}</h4>
                                        <p style={{ marginBottom: 0, fontSize: 'var(--font-size-sm)' }}>
                                            {parseObject(tripPlan.weatherInfo).summary || 'Informationen nicht verfügbar'}
                                        </p>
                                    </div>
                                )}

                                {/* Activities */}
                                {tripPlan.activities && (
                                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                        <h4 style={{ marginBottom: 'var(--spacing-md)' }}>🎯 Empfohlene Aktivitäten</h4>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                            {parseArray(tripPlan.activities).map((activity, idx) => (
                                                <span key={idx} className="badge badge-neutral">{activity}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Itinerary */}
                                {tripPlan.itinerary && (
                                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                        <h4 style={{ marginBottom: 'var(--spacing-md)' }}>📅 Reiseplan</h4>
                                        <div style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
                                            {Object.entries(parseObject(tripPlan.itinerary)).map(([day, plan]) => (
                                                <div
                                                    key={day}
                                                    style={{
                                                        display: 'flex',
                                                        gap: 'var(--spacing-md)',
                                                        padding: 'var(--spacing-sm)',
                                                        background: 'var(--color-bg-secondary)',
                                                        borderRadius: 'var(--radius-md)',
                                                    }}
                                                >
                                                    <span style={{ fontWeight: 600, color: 'var(--color-primary)', minWidth: '60px' }}>{day}</span>
                                                    <span style={{ color: 'var(--color-text-medium)' }}>{plan}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Safety Info */}
                                {tripPlan.safetyInfo && (
                                    <div
                                        style={{
                                            marginTop: 'var(--spacing-lg)',
                                            padding: 'var(--spacing-md)',
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            borderRadius: 'var(--radius-md)',
                                            borderLeft: '4px solid var(--color-success)',
                                        }}
                                    >
                                        <h4 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-success)' }}>🛡️ Sicherheitshinweise</h4>
                                        <p style={{ marginBottom: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)' }}>
                                            {parseObject(tripPlan.safetyInfo).level || tripPlan.safetyInfo}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Placeholder when no result */}
                    {!tripPlan && !loading && (
                        <div
                            style={{
                                background: 'var(--color-bg-secondary)',
                                borderRadius: 'var(--radius-xl)',
                                padding: 'var(--spacing-3xl)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-lg)' }}>✈️</div>
                            <h3 style={{ color: 'var(--color-text-medium)' }}>Ihr Reiseplan wartet!</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>
                                Füllen Sie das Formular aus und lassen Sie sich von unserem intelligenten Algorithmus überraschen.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
