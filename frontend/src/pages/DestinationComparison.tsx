import React, { useState, useEffect } from 'react';

interface DestinationData {
    id: number;
    country: string;
    avgDailyCost: number;
    safetyLevel: string;
    bestMonths: string;
    activities: string;
    transport: string;
    hotelPriceRange: string;
    touristLevel: string;
    pros: string;
    cons: string;
    imageUrl: string;
}

// Static destination data for comparison
const staticDestinations: DestinationData[] = [
    { id: 1, country: 'Spanien', avgDailyCost: 80, safetyLevel: 'safe', bestMonths: JSON.stringify(['März', 'April', 'Mai', 'September', 'Oktober']), activities: JSON.stringify(['Strände', 'Kultur', 'Nachtleben', 'Wandern', 'Gastronomie']), transport: 'Ausgezeichnet', hotelPriceRange: '60-150€', touristLevel: 'Hoch', pros: JSON.stringify(['Gutes Wetter', 'Strände', 'Tapas-Kultur', 'Erschwinglich']), cons: JSON.stringify(['Überfüllt im Sommer', 'Hitze im August']), imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600' },
    { id: 2, country: 'Italien', avgDailyCost: 100, safetyLevel: 'safe', bestMonths: JSON.stringify(['April', 'Mai', 'September', 'Oktober']), activities: JSON.stringify(['Kunst', 'Geschichte', 'Kulinarik', 'Mode', 'Romantik']), transport: 'Gut', hotelPriceRange: '80-200€', touristLevel: 'Sehr hoch', pros: JSON.stringify(['Weltklasse-Küche', 'Kunst & Geschichte', 'Mode']), cons: JSON.stringify(['Teuer in Hauptsaison', 'Überlaufen']), imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600' },
    { id: 3, country: 'Japan', avgDailyCost: 120, safetyLevel: 'safe', bestMonths: JSON.stringify(['März', 'April', 'Oktober', 'November']), activities: JSON.stringify(['Tempel', 'Technologie', 'Kulinarik', 'Onsen', 'Anime']), transport: 'Exzellent', hotelPriceRange: '80-250€', touristLevel: 'Mittel', pros: JSON.stringify(['Extrem sicher', 'Pünktlich', 'Einzigartige Kultur']), cons: JSON.stringify(['Sprachbarriere', 'Teuer']), imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600' },
    { id: 4, country: 'Thailand', avgDailyCost: 45, safetyLevel: 'moderate', bestMonths: JSON.stringify(['November', 'Dezember', 'Januar', 'Februar']), activities: JSON.stringify(['Strände', 'Tempel', 'Street Food', 'Tauchen', 'Wellness']), transport: 'Gut', hotelPriceRange: '20-100€', touristLevel: 'Sehr hoch', pros: JSON.stringify(['Sehr günstig', 'Tolle Strände', 'Freundliche Menschen']), cons: JSON.stringify(['Monsun im Sommer', 'Massentourismus']), imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600' },
    { id: 5, country: 'Portugal', avgDailyCost: 70, safetyLevel: 'safe', bestMonths: JSON.stringify(['März', 'April', 'Mai', 'September', 'Oktober']), activities: JSON.stringify(['Strände', 'Wein', 'Geschichte', 'Surfen', 'Wandern']), transport: 'Gut', hotelPriceRange: '50-120€', touristLevel: 'Mittel', pros: JSON.stringify(['Erschwinglich', 'Tolle Küste', 'Freundlich']), cons: JSON.stringify(['Heiß im Sommer', 'Begrenzte Infrastruktur außerhalb Städte']), imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600' },
    { id: 6, country: 'Griechenland', avgDailyCost: 75, safetyLevel: 'safe', bestMonths: JSON.stringify(['Mai', 'Juni', 'September', 'Oktober']), activities: JSON.stringify(['Inseln', 'Geschichte', 'Strände', 'Kulinarik', 'Segeln']), transport: 'Gut', hotelPriceRange: '50-150€', touristLevel: 'Hoch', pros: JSON.stringify(['Schöne Inseln', 'Reiche Geschichte', 'Gastfreundlich']), cons: JSON.stringify(['Fähren überfüllt', 'Heiß im August']), imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600' },
    { id: 7, country: 'Marokko', avgDailyCost: 50, safetyLevel: 'moderate', bestMonths: JSON.stringify(['März', 'April', 'Mai', 'Oktober', 'November']), activities: JSON.stringify(['Märkte', 'Wüste', 'Architektur', 'Kulinarik', 'Kultur']), transport: 'Moderat', hotelPriceRange: '30-100€', touristLevel: 'Mittel', pros: JSON.stringify(['Günstig', 'Exotisch', 'Tolle Riads']), cons: JSON.stringify(['Aggressive Händler', 'Kulturelle Anpassung nötig']), imageUrl: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600' },
    { id: 8, country: 'Costa Rica', avgDailyCost: 85, safetyLevel: 'safe', bestMonths: JSON.stringify(['Dezember', 'Januar', 'Februar', 'März', 'April']), activities: JSON.stringify(['Natur', 'Abenteuer', 'Wildtiere', 'Surfen', 'Vulkane']), transport: 'Moderat', hotelPriceRange: '60-180€', touristLevel: 'Mittel', pros: JSON.stringify(['Unglaubliche Natur', 'Sicher', 'Umweltbewusst']), cons: JSON.stringify(['Teurer als Nachbarn', 'Regenzeit']), imageUrl: 'https://images.unsplash.com/photo-1518722902757-9e5f3d31cc7d?w=600' },
    { id: 9, country: 'Australien', avgDailyCost: 130, safetyLevel: 'safe', bestMonths: JSON.stringify(['September', 'Oktober', 'November', 'März', 'April']), activities: JSON.stringify(['Natur', 'Strände', 'Tierbeobachtung', 'Roadtrips', 'Tauchen']), transport: 'Gut', hotelPriceRange: '100-250€', touristLevel: 'Mittel', pros: JSON.stringify(['Einzigartige Tierwelt', 'Sicher', 'Abenteuer']), cons: JSON.stringify(['Sehr teuer', 'Lange Anreise', 'Große Entfernungen']), imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600' },
    { id: 10, country: 'Mexiko', avgDailyCost: 55, safetyLevel: 'moderate', bestMonths: JSON.stringify(['November', 'Dezember', 'März', 'April']), activities: JSON.stringify(['Strände', 'Maya-Ruinen', 'Kulinarik', 'Kultur', 'Tauchen']), transport: 'Gut', hotelPriceRange: '40-120€', touristLevel: 'Hoch', pros: JSON.stringify(['Erschwinglich', 'Reiche Kultur', 'Tolle Strände']), cons: JSON.stringify(['Sicherheit variiert', 'Touristische Fallen']), imageUrl: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600' },
    { id: 11, country: 'Frankreich', avgDailyCost: 110, safetyLevel: 'safe', bestMonths: JSON.stringify(['Mai', 'Juni', 'September', 'Oktober']), activities: JSON.stringify(['Kunst', 'Wein', 'Kulinarik', 'Geschichte', 'Mode']), transport: 'Exzellent', hotelPriceRange: '90-200€', touristLevel: 'Sehr hoch', pros: JSON.stringify(['Weltklasse Kultur', 'TGV Netzwerk', 'Vielfalt']), cons: JSON.stringify(['Teuer', 'Sprachbarriere außerhalb Paris']), imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600' },
    { id: 12, country: 'Vietnam', avgDailyCost: 35, safetyLevel: 'moderate', bestMonths: JSON.stringify(['Februar', 'März', 'April', 'Oktober', 'November']), activities: JSON.stringify(['Street Food', 'Geschichte', 'Strände', 'Motorradtouren', 'Natur']), transport: 'Moderat', hotelPriceRange: '15-60€', touristLevel: 'Mittel', pros: JSON.stringify(['Sehr günstig', 'Tolle Küche', 'Abenteuerlich']), cons: JSON.stringify(['Verkehrschaos', 'Sprachbarriere']), imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600' },
    { id: 13, country: 'Kroatien', avgDailyCost: 85, safetyLevel: 'safe', bestMonths: JSON.stringify(['Mai', 'Juni', 'September']), activities: JSON.stringify(['Küste', 'Geschichte', 'Segeln', 'Game of Thrones', 'Wein']), transport: 'Gut', hotelPriceRange: '60-150€', touristLevel: 'Hoch', pros: JSON.stringify(['Wunderschöne Küste', 'Sicher', 'EU-Mitglied']), cons: JSON.stringify(['Juli/August überfüllt', 'Teurer geworden']), imageUrl: 'https://images.unsplash.com/photo-1555093719-97aff96e47c4?w=600' },
    { id: 14, country: 'Peru', avgDailyCost: 50, safetyLevel: 'moderate', bestMonths: JSON.stringify(['Mai', 'Juni', 'Juli', 'August', 'September']), activities: JSON.stringify(['Machu Picchu', 'Inka Trail', 'Kulinarik', 'Amazonas', 'Kultur']), transport: 'Moderat', hotelPriceRange: '30-100€', touristLevel: 'Mittel', pros: JSON.stringify(['Machu Picchu', 'Erschwinglich', 'Reiche Geschichte']), cons: JSON.stringify(['Höhenkrankheit', 'Infrastruktur']), imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600' },
    { id: 15, country: 'Neuseeland', avgDailyCost: 120, safetyLevel: 'safe', bestMonths: JSON.stringify(['Dezember', 'Januar', 'Februar', 'März']), activities: JSON.stringify(['Natur', 'Abenteuer', 'Wandern', 'Herr der Ringe', 'Wein']), transport: 'Gut', hotelPriceRange: '80-200€', touristLevel: 'Niedrig', pros: JSON.stringify(['Atemberaubende Landschaft', 'Abenteuer', 'Sicher']), cons: JSON.stringify(['Sehr teuer', 'Isoliert', 'Lange Anreise']), imageUrl: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600' },
];

export default function DestinationComparison() {
    const [destinations, setDestinations] = useState<DestinationData[]>(staticDestinations);
    const [loading, setLoading] = useState(false);
    const [country1, setCountry1] = useState('');
    const [country2, setCountry2] = useState('');
    const [comparison, setComparison] = useState<{ country1: DestinationData; country2: DestinationData } | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCompare = () => {
        if (!country1 || !country2) return;

        const dest1 = staticDestinations.find(d => d.country === country1);
        const dest2 = staticDestinations.find(d => d.country === country2);

        if (dest1 && dest2) {
            setComparison({ country1: dest1, country2: dest2 });
        }
    };

    const parseArray = (jsonString: string): string[] => {
        try {
            return JSON.parse(jsonString);
        } catch {
            return [];
        }
    };

    const getSafetyColor = (level: string) => {
        switch (level) {
            case 'safe': return '#10B981';
            case 'moderate': return '#F59E0B';
            case 'dangerous': return '#EF4444';
            default: return '#64748B';
        }
    };

    const ComparisonBar = ({ label, value1, value2, max, unit = '' }: { label: string; value1: number; value2: number; max: number; unit?: string }) => (
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-xs)' }}>
                <span style={{ fontWeight: 600 }}>{label}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', alignItems: 'center' }}>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{value1}{unit}</span>
                    <div
                        style={{
                            height: '12px',
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-full)',
                            overflow: 'hidden',
                            marginTop: 'var(--spacing-xs)',
                        }}
                    >
                        <div
                            style={{
                                height: '100%',
                                width: `${(value1 / max) * 100}%`,
                                background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                                borderRadius: 'var(--radius-full)',
                                marginLeft: 'auto',
                                animation: 'growLeft 0.8s ease-out',
                            }}
                        />
                    </div>
                </div>
                <div>
                    <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>{value2}{unit}</span>
                    <div
                        style={{
                            height: '12px',
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-full)',
                            overflow: 'hidden',
                            marginTop: 'var(--spacing-xs)',
                        }}
                    >
                        <div
                            style={{
                                height: '100%',
                                width: `${(value2 / max) * 100}%`,
                                background: 'linear-gradient(90deg, var(--color-accent), #F97316)',
                                borderRadius: 'var(--radius-full)',
                                animation: 'growRight 0.8s ease-out',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section
                style={{
                    background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.9), rgba(234, 88, 12, 0.9)), url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600) center/cover',
                    padding: 'var(--spacing-3xl) 0',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        ⚖️ Reiseziel Vergleich
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Vergleichen Sie zwei Reiseziele und finden Sie heraus, welches am besten zu Ihnen passt!
                    </p>
                </div>
            </section>

            <section className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
                {/* Country Selection */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto 1fr',
                        gap: 'var(--spacing-lg)',
                        alignItems: 'end',
                        marginBottom: 'var(--spacing-2xl)',
                        maxWidth: '800px',
                        margin: '0 auto var(--spacing-2xl)',
                    }}
                >
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">🌍 Land 1</label>
                        <select
                            className="form-select"
                            value={country1}
                            onChange={(e) => setCountry1(e.target.value)}
                            style={{
                                borderColor: 'var(--color-primary)',
                                borderWidth: '2px',
                            }}
                        >
                            <option value="">Land wählen</option>
                            {destinations.map((d) => (
                                <option key={d.id} value={d.country} disabled={d.country === country2}>
                                    {d.country}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '2rem' }}>⚡</span>
                        <button
                            className="btn btn-primary"
                            onClick={handleCompare}
                            disabled={!country1 || !country2}
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            Vergleichen
                        </button>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">🌍 Land 2</label>
                        <select
                            className="form-select"
                            value={country2}
                            onChange={(e) => setCountry2(e.target.value)}
                            style={{
                                borderColor: 'var(--color-accent)',
                                borderWidth: '2px',
                            }}
                        >
                            <option value="">Land wählen</option>
                            {destinations.map((d) => (
                                <option key={d.id} value={d.country} disabled={d.country === country1}>
                                    {d.country}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Comparison Results */}
                {comparison && (
                    <div style={{ animation: 'slideUp 0.5s ease' }}>
                        {/* Header Cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)' }}>
                            {[comparison.country1, comparison.country2].map((dest, idx) => (
                                <div
                                    key={dest.id}
                                    style={{
                                        background: 'white',
                                        borderRadius: 'var(--radius-xl)',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow-lg)',
                                        border: `3px solid ${idx === 0 ? 'var(--color-primary)' : 'var(--color-accent)'}`,
                                    }}
                                >
                                    <img
                                        src={dest.imageUrl}
                                        alt={dest.country}
                                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                                    />
                                    <div style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                                        <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>{dest.country}</h2>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)' }}>
                                            <span className="badge badge-primary">💰 ~{dest.avgDailyCost}€/Tag</span>
                                            <span
                                                className="badge"
                                                style={{ background: getSafetyColor(dest.safetyLevel), color: 'white' }}
                                            >
                                                {dest.safetyLevel === 'safe' ? '✅ Sicher' : dest.safetyLevel === 'moderate' ? '⚠️ Moderat' : '🚨 Gefährlich'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Comparison Bars */}
                        <div
                            style={{
                                background: 'white',
                                padding: 'var(--spacing-xl)',
                                borderRadius: 'var(--radius-xl)',
                                boxShadow: 'var(--shadow-lg)',
                                marginBottom: 'var(--spacing-xl)',
                            }}
                        >
                            <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>📊 Direkter Vergleich</h3>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                                <div style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 600 }}>{comparison.country1.country}</div>
                                <div style={{ textAlign: 'center', color: 'var(--color-accent)', fontWeight: 600 }}>{comparison.country2.country}</div>
                            </div>

                            <ComparisonBar
                                label="💰 Tageskosten"
                                value1={comparison.country1.avgDailyCost}
                                value2={comparison.country2.avgDailyCost}
                                max={200}
                                unit="€"
                            />

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <div style={{ fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>🏨 Hotelpreise</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                                    <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                        {comparison.country1.hotelPriceRange}
                                    </div>
                                    <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                        {comparison.country2.hotelPriceRange}
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <div style={{ fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>👥 Tourismus-Level</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                                    <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                        {comparison.country1.touristLevel}
                                    </div>
                                    <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                        {comparison.country2.touristLevel}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pros and Cons */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                            {[comparison.country1, comparison.country2].map((dest, idx) => (
                                <div
                                    key={dest.id}
                                    style={{
                                        background: 'white',
                                        padding: 'var(--spacing-xl)',
                                        borderRadius: 'var(--radius-xl)',
                                        boxShadow: 'var(--shadow-lg)',
                                    }}
                                >
                                    <h4 style={{ marginBottom: 'var(--spacing-lg)', color: idx === 0 ? 'var(--color-primary)' : 'var(--color-accent)' }}>
                                        {dest.country}
                                    </h4>

                                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                        <h5 style={{ color: 'var(--color-success)', marginBottom: 'var(--spacing-sm)' }}>✅ Vorteile</h5>
                                        <ul style={{ paddingLeft: 'var(--spacing-lg)', margin: 0 }}>
                                            {parseArray(dest.pros).map((pro, i) => (
                                                <li key={i} style={{ color: 'var(--color-text-medium)', marginBottom: 'var(--spacing-xs)' }}>{pro}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h5 style={{ color: 'var(--color-error)', marginBottom: 'var(--spacing-sm)' }}>❌ Nachteile</h5>
                                        <ul style={{ paddingLeft: 'var(--spacing-lg)', margin: 0 }}>
                                            {parseArray(dest.cons).map((con, i) => (
                                                <li key={i} style={{ color: 'var(--color-text-medium)', marginBottom: 'var(--spacing-xs)' }}>{con}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                        <h5 style={{ marginBottom: 'var(--spacing-sm)' }}>🎯 Aktivitäten</h5>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                                            {parseArray(dest.activities).map((activity, i) => (
                                                <span key={i} className="badge badge-neutral" style={{ fontSize: 'var(--font-size-xs)' }}>
                                                    {activity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                        <h5 style={{ marginBottom: 'var(--spacing-sm)' }}>📅 Beste Reisezeit</h5>
                                        <p style={{ color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                            {parseArray(dest.bestMonths).join(', ')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Placeholder when no comparison */}
                {!comparison && !loading && (
                    <div
                        style={{
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--spacing-3xl)',
                            textAlign: 'center',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-lg)' }}>🌍 vs 🌍</div>
                        <h3 style={{ color: 'var(--color-text-medium)' }}>Wählen Sie zwei Länder zum Vergleichen</h3>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Unsere detaillierten Vergleiche helfen Ihnen bei der Entscheidung für Ihr nächstes Reiseziel.
                        </p>
                    </div>
                )}
            </section>

            <style>{`
        @keyframes growLeft {
          from { width: 0; }
        }
        @keyframes growRight {
          from { width: 0; }
        }
      `}</style>
        </div>
    );
}
