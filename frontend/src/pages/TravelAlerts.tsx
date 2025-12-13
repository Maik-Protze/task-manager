import React, { useState, useEffect } from 'react';

interface TravelAlert {
    id: number;
    country: string;
    safetyLevel: string;
    riskScore: number;
    description: string;
    warnings: string;
    lastUpdated: string;
    imageUrl: string;
}

// Static countries with safety data
const staticAlerts: TravelAlert[] = [
    { id: 1, country: 'USA', safetyLevel: 'safe', riskScore: 2, description: 'Die Vereinigten Staaten sind ein sicheres Reiseziel mit moderner Infrastruktur.', warnings: JSON.stringify(['Gesundheitsversicherung prüfen', 'ESTA-Genehmigung erforderlich']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600' },
    { id: 2, country: 'Spanien', safetyLevel: 'safe', riskScore: 1, description: 'Spanien ist eines der sichersten und beliebtesten Reiseziele Europas.', warnings: JSON.stringify(['Auf Taschendiebe in Touristengebieten achten', 'Sonnenschutz wichtig']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600' },
    { id: 3, country: 'Deutschland', safetyLevel: 'safe', riskScore: 1, description: 'Deutschland ist ein sehr sicheres Land mit ausgezeichneter medizinischer Versorgung.', warnings: JSON.stringify(['Keine besonderen Sicherheitshinweise']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600' },
    { id: 4, country: 'Frankreich', safetyLevel: 'safe', riskScore: 2, description: 'Frankreich ist ein beliebtes und sicheres Reiseziel mit reicher Kultur.', warnings: JSON.stringify(['Demonstrationen meiden', 'In Großstädten auf Wertsachen achten']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600' },
    { id: 5, country: 'Italien', safetyLevel: 'safe', riskScore: 2, description: 'Italien bietet Kultur, Geschichte und Kulinarik in sicherer Umgebung.', warnings: JSON.stringify(['Taschendiebstahl in Touristengebieten', 'Vor Hitzewellen schützen']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600' },
    { id: 6, country: 'Japan', safetyLevel: 'safe', riskScore: 1, description: 'Japan gilt als eines der sichersten Länder der Welt.', warnings: JSON.stringify(['Erdbebensicherheit beachten', 'Kulturelle Gepflogenheiten respektieren']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600' },
    { id: 7, country: 'Griechenland', safetyLevel: 'safe', riskScore: 2, description: 'Griechenland ist ein sicheres Reiseziel mit wunderschönen Inseln.', warnings: JSON.stringify(['Waldbrände im Sommer möglich', 'Viel trinken bei Hitze']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600' },
    { id: 8, country: 'Österreich', safetyLevel: 'safe', riskScore: 1, description: 'Österreich ist ein hochsicheres Land mit alpiner Schönheit.', warnings: JSON.stringify(['Bergsicherheit bei Wanderungen beachten']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1516550893885-985c836c68d6?w=600' },
    { id: 9, country: 'Schweiz', safetyLevel: 'safe', riskScore: 1, description: 'Die Schweiz zählt zu den sichersten Ländern weltweit.', warnings: JSON.stringify(['Hohe Lebenshaltungskosten', 'Bergausrüstung für Touren']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1531400158697-004a3a06fd3f?w=600' },
    { id: 10, country: 'Niederlande', safetyLevel: 'safe', riskScore: 1, description: 'Die Niederlande sind ein sehr sicheres und fahrradfreundliches Land.', warnings: JSON.stringify(['Auf Radfahrer im Straßenverkehr achten']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1512470876765-2d4a8f9d2d77?w=600' },
    { id: 11, country: 'Ägypten', safetyLevel: 'moderate', riskScore: 5, description: 'Ägypten bietet faszinierende Antike, jedoch mit erhöhten Sicherheitshinweisen.', warnings: JSON.stringify(['Terrorbedrohung beachten', 'Sinai-Halbinsel meiden', 'Nur organisierte Touren buchen']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600' },
    { id: 12, country: 'Türkei', safetyLevel: 'moderate', riskScore: 4, description: 'Die Türkei ist ein beliebtes Reiseziel mit regionalen Unterschieden.', warnings: JSON.stringify(['Grenzgebiete meiden', 'Demonstrationen vermeiden', 'Politische Äußerungen unterlassen']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600' },
    { id: 13, country: 'Marokko', safetyLevel: 'moderate', riskScore: 4, description: 'Marokko bietet exotische Erlebnisse mit einigen Vorsichtsmaßnahmen.', warnings: JSON.stringify(['In Medinas auf Wertsachen achten', 'Nicht allein nachts unterwegs', 'Feilschen üblich']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600' },
    { id: 14, country: 'Mexiko', safetyLevel: 'moderate', riskScore: 5, description: 'Mexiko hat sichere Touristengebiete, aber regionale Unterschiede.', warnings: JSON.stringify(['Nur in Touristenzonen bleiben', 'Grenzgebiete meiden', 'Nachtfahrten vermeiden']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600' },
    { id: 15, country: 'Brasilien', safetyLevel: 'moderate', riskScore: 5, description: 'Brasilien ist ein wundervolles Land mit erhöhten Sicherheitsanforderungen.', warnings: JSON.stringify(['Favelas meiden', 'Keine Wertsachen offen tragen', 'Taxis über Apps bestellen']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600' },
    { id: 16, country: 'Indien', safetyLevel: 'moderate', riskScore: 4, description: 'Indien bietet unglaubliche Erfahrungen mit kultureller Anpassung.', warnings: JSON.stringify(['Hygiene beachten', 'Nur in Gruppen reisen empfohlen', 'Abgelegene Gebiete meiden']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600' },
    { id: 17, country: 'Syrien', safetyLevel: 'moderate', riskScore: 4, description: 'Die Sicherheitslage in Syrien hat sich in einigen Regionen stabilisiert, bleibt jedoch komplex.', warnings: JSON.stringify(['Reisewarnung für bestimmte Gebiete', 'Konsularische Hilfe eingeschränkt', 'Vor Reiseantritt genau informieren']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1579031838403-51c890db4fa3?w=600' },
    { id: 18, country: 'Afghanistan', safetyLevel: 'dangerous', riskScore: 10, description: 'Von Reisen nach Afghanistan wird dringend abgeraten.', warnings: JSON.stringify(['Terrorbedrohung', 'Keine Infrastruktur', 'Entführungsgefahr']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600' },
    { id: 19, country: 'Venezuela', safetyLevel: 'dangerous', riskScore: 8, description: 'Venezuela hat eine kritische Sicherheitslage.', warnings: JSON.stringify(['Hohe Kriminalitätsrate', 'Wirtschaftskrise', 'Medikamentenengpässe']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1580206826212-35aa9019c4c6?w=600' },
    { id: 20, country: 'Nordkorea', safetyLevel: 'dangerous', riskScore: 9, description: 'Reisen nach Nordkorea sind nur sehr eingeschränkt möglich.', warnings: JSON.stringify(['Strenge Überwachung', 'Keine Bewegungsfreiheit', 'Willkürliche Verhaftungen möglich']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1553167408-d0dbe8a197c3?w=600' },
    { id: 21, country: 'Australien', safetyLevel: 'safe', riskScore: 1, description: 'Australien ist ein sicheres und beliebtes Reiseziel.', warnings: JSON.stringify(['Giftige Tiere beachten', 'Sonnenschutz essentiell', 'Strenge Quarantäneregeln']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600' },
    { id: 22, country: 'Kanada', safetyLevel: 'safe', riskScore: 1, description: 'Kanada ist eines der sichersten Länder der Welt.', warnings: JSON.stringify(['Extreme Kälte im Winter', 'Bären in Wildnisgebieten']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600' },
    { id: 23, country: 'Thailand', safetyLevel: 'moderate', riskScore: 3, description: 'Thailand ist ein beliebtes Reiseziel mit wenigen Sicherheitsbedenken.', warnings: JSON.stringify(['Politische Demonstrationen meiden', 'Grenzgebiete vorsichtig bereisen']), lastUpdated: '2024-12-01', imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600' },
];

export default function TravelAlerts() {
    const [alerts, setAlerts] = useState<TravelAlert[]>(staticAlerts);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState<string>('');
    const [selectedAlert, setSelectedAlert] = useState<TravelAlert | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        filterAlerts();
    }, [filter, searchTerm]);

    const filterAlerts = () => {
        let filtered = [...staticAlerts];
        if (filter) {
            filtered = filtered.filter(alert => alert.safetyLevel === filter);
        }
        if (searchTerm) {
            filtered = filtered.filter(alert =>
                alert.country.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setAlerts(filtered);
    };

    const getSafetyColor = (level: string) => {
        switch (level) {
            case 'safe':
                return { bg: 'rgba(16, 185, 129, 0.1)', border: '#10B981', text: '#059669' };
            case 'moderate':
                return { bg: 'rgba(245, 158, 11, 0.1)', border: '#F59E0B', text: '#D97706' };
            case 'dangerous':
                return { bg: 'rgba(239, 68, 68, 0.1)', border: '#EF4444', text: '#DC2626' };
            default:
                return { bg: 'rgba(100, 116, 139, 0.1)', border: '#64748B', text: '#475569' };
        }
    };

    const getSafetyLabel = (level: string) => {
        switch (level) {
            case 'safe':
                return '✅ Sicher';
            case 'moderate':
                return '⚠️ Mittleres Risiko';
            case 'dangerous':
                return '🚨 Gefährlich';
            default:
                return '❓ Unbekannt';
        }
    };

    const parseWarnings = (warnings: string): string[] => {
        try {
            return JSON.parse(warnings);
        } catch {
            return [];
        }
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section
                style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(220, 38, 38, 0.9)), url(https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=1600) center/cover',
                    padding: 'var(--spacing-3xl) 0',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        ⚠️ Reise-Warnungen & Sicherheitsinformationen
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', opacity: 0.9, maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
                        Planen Sie Ihre Reise sicher - aktuelle Länder-Risikobewertungen, Warnungen und wichtige Hinweise des Auswärtigen Amtes.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-xl)',
                        flexWrap: 'wrap',
                        marginTop: 'var(--spacing-lg)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>195+</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Länder bewertet</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>24h</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Aktualisierung</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>10</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Risiko-Stufen</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Tips Section */}
            <section style={{ background: 'white', padding: 'var(--spacing-2xl) 0', borderBottom: '1px solid var(--color-bg-secondary)' }}>
                <div className="container">
                    <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>🛡️ Allgemeine Sicherheitstipps für Reisende</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'var(--spacing-md)',
                    }}>
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-bg-secondary)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                                <span style={{ fontSize: '1.5rem' }}>📋</span>
                                <strong>Vor der Reise</strong>
                            </div>
                            <ul style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0, paddingLeft: 'var(--spacing-lg)' }}>
                                <li>Reisedokumente kopieren und digital sichern</li>
                                <li>Auslandskrankenversicherung abschließen</li>
                                <li>Botschaftskontakte notieren</li>
                                <li>Impfstatus prüfen</li>
                            </ul>
                        </div>
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-bg-secondary)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                                <span style={{ fontSize: '1.5rem' }}>💰</span>
                                <strong>Wertsachen schützen</strong>
                            </div>
                            <ul style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0, paddingLeft: 'var(--spacing-lg)' }}>
                                <li>Geld auf mehrere Stellen verteilen</li>
                                <li>Diebstahlsichere Taschen nutzen</li>
                                <li>Keine Wertsachen offen tragen</li>
                                <li>Hotelsafe verwenden</li>
                            </ul>
                        </div>
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-bg-secondary)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                                <span style={{ fontSize: '1.5rem' }}>📱</span>
                                <strong>Im Notfall</strong>
                            </div>
                            <ul style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0, paddingLeft: 'var(--spacing-lg)' }}>
                                <li>EU-Notruf: 112 (weltweit gültig)</li>
                                <li>Krisenvorsorgeliste ausfüllen (ELEFAND)</li>
                                <li>Familienangehörige informiert halten</li>
                                <li>Lokale Gesetze respektieren</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
                {/* Search Input */}
                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto var(--spacing-xl)',
                }}>
                    <div style={{ position: 'relative' }}>
                        <span style={{
                            position: 'absolute',
                            left: 'var(--spacing-md)',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontSize: '1.2rem',
                        }}>🔍</span>
                        <input
                            type="text"
                            placeholder="Land suchen (z.B. USA, Spanien, Japan...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-md) var(--spacing-md) var(--spacing-md) 50px',
                                fontSize: 'var(--font-size-md)',
                                border: '2px solid var(--color-bg-secondary)',
                                borderRadius: 'var(--radius-full)',
                                outline: 'none',
                                transition: 'border-color 0.3s ease',
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-bg-secondary)'}
                        />
                    </div>
                </div>

                {/* Filter Tabs */}
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
                        { value: '', label: 'Alle Länder', icon: '🌍' },
                        { value: 'safe', label: 'Sicher', icon: '✅' },
                        { value: 'moderate', label: 'Mittleres Risiko', icon: '⚠️' },
                        { value: 'dangerous', label: 'Gefährlich', icon: '🚨' },
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setFilter(tab.value)}
                            style={{
                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                border: filter === tab.value ? '2px solid var(--color-primary)' : '2px solid transparent',
                                borderRadius: 'var(--radius-full)',
                                background: filter === tab.value ? 'var(--color-primary)' : 'var(--color-bg-secondary)',
                                color: filter === tab.value ? 'white' : 'var(--color-text-dark)',
                                cursor: 'pointer',
                                fontWeight: 500,
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Legend */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-xl)',
                        marginBottom: 'var(--spacing-xl)',
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        { color: '#10B981', label: 'Sicher (1-3)' },
                        { color: '#F59E0B', label: 'Mittleres Risiko (4-6)' },
                        { color: '#EF4444', label: 'Gefährlich (7-10)' },
                    ].map((item) => (
                        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: item.color,
                                }}
                            />
                            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)' }}>{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Alerts Grid */}
                {loading ? (
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
                        <div className="loading-spinner" style={{
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
                        {alerts.map((alert) => {
                            const colors = getSafetyColor(alert.safetyLevel);
                            const warnings = parseWarnings(alert.warnings);

                            return (
                                <div
                                    key={alert.id}
                                    onClick={() => setSelectedAlert(alert)}
                                    style={{
                                        background: 'white',
                                        borderRadius: 'var(--radius-xl)',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow-md)',
                                        border: `3px solid ${colors.border}`,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        animation: alert.safetyLevel === 'dangerous' ? 'pulse 2s infinite' : 'none',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                    }}
                                >
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={alert.imageUrl}
                                            alt={alert.country}
                                            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&auto=format&fit=crop';
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 'var(--spacing-sm)',
                                                right: 'var(--spacing-sm)',
                                                background: colors.bg,
                                                color: colors.text,
                                                padding: 'var(--spacing-xs) var(--spacing-md)',
                                                borderRadius: 'var(--radius-full)',
                                                fontWeight: 600,
                                                fontSize: 'var(--font-size-sm)',
                                                border: `2px solid ${colors.border}`,
                                            }}
                                        >
                                            Risiko: {alert.riskScore}/10
                                        </div>
                                    </div>

                                    <div style={{ padding: 'var(--spacing-lg)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                                            <h3 style={{ marginBottom: 0 }}>{alert.country}</h3>
                                        </div>

                                        <div
                                            style={{
                                                display: 'inline-block',
                                                background: colors.bg,
                                                color: colors.text,
                                                padding: 'var(--spacing-xs) var(--spacing-md)',
                                                borderRadius: 'var(--radius-full)',
                                                fontWeight: 600,
                                                fontSize: 'var(--font-size-sm)',
                                                marginBottom: 'var(--spacing-md)',
                                            }}
                                        >
                                            {getSafetyLabel(alert.safetyLevel)}
                                        </div>

                                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 'var(--spacing-md)' }}>
                                            {alert.description.substring(0, 100)}...
                                        </p>

                                        {warnings.length > 0 && (
                                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
                                                {warnings.slice(0, 2).map((warning, idx) => (
                                                    <div key={idx}>• {warning}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* Detail Modal */}
            {selectedAlert && (
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
                    onClick={() => setSelectedAlert(null)}
                >
                    <div
                        style={{
                            background: 'white',
                            borderRadius: 'var(--radius-xl)',
                            maxWidth: '600px',
                            width: '90%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            animation: 'slideUp 0.3s ease',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedAlert.imageUrl}
                            alt={selectedAlert.country}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&auto=format&fit=crop';
                            }}
                        />
                        <div style={{ padding: 'var(--spacing-xl)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>{selectedAlert.country}</h2>
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            background: getSafetyColor(selectedAlert.safetyLevel).bg,
                                            color: getSafetyColor(selectedAlert.safetyLevel).text,
                                            padding: 'var(--spacing-xs) var(--spacing-md)',
                                            borderRadius: 'var(--radius-full)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {getSafetyLabel(selectedAlert.safetyLevel)} - Risiko {selectedAlert.riskScore}/10
                                    </span>
                                </div>
                                <button
                                    onClick={() => setSelectedAlert(null)}
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

                            <p style={{ marginTop: 'var(--spacing-lg)', color: 'var(--color-text-medium)' }}>
                                {selectedAlert.description}
                            </p>

                            <h4 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>Aktuelle Warnungen:</h4>
                            <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
                                {parseWarnings(selectedAlert.warnings).map((warning, idx) => (
                                    <li key={idx} style={{ color: 'var(--color-text-medium)', marginBottom: 'var(--spacing-sm)' }}>
                                        {warning}
                                    </li>
                                ))}
                            </ul>

                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', marginTop: 'var(--spacing-lg)' }}>
                                Zuletzt aktualisiert: {new Date(selectedAlert.lastUpdated).toLocaleDateString('de-DE')}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: var(--shadow-md); }
          50% { transform: scale(1.01); box-shadow: 0 0 20px rgba(239, 68, 68, 0.4); }
        }
      `}</style>
        </div>
    );
}
