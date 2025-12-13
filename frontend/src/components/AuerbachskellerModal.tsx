import React, { useState } from 'react';
import Button from './Button';

interface AuerbachskellerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuerbachskellerModal: React.FC<AuerbachskellerModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'exterior' | 'interior' | 'restaurant' | 'prices'>('overview');

    if (!isOpen) return null;

    const images = {
        exterior: [
            '/germany/leipzig/auerbachs-keller-eingang1.jpg',
            'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop'
        ],
        interior: [
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1574263350337-347434774677?w=800&h=600&fit=crop'
        ],
        restaurant: [
            '/germany/leipzig/auerbachs-keller.jpg',
            'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop'
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Auerbachs Keller Leipzig</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr', gap: '2rem', alignItems: 'start' }}>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Auerbachs Keller ist Leipzigs berühmteste historische Gaststätte und wurde durch Goethes
                                    "Faust" weltbekannt. Seit 1525 werden hier Gäste bewirtet - eine über 500-jährige Tradition
                                    der sächsischen Gastlichkeit im Herzen der Leipziger Altstadt.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h4>📍 Standort</h4>
                                        <p>Grimmaische Straße 2-4<br />04109 Leipzig (Mädler-Passage)</p>
                                    </div>
                                    <div>
                                        <h4>🕒 Öffnungszeiten</h4>
                                        <p>Täglich 11:30 - 24:00 Uhr<br />Küche bis 22:30 Uhr</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>🎯 Highlights</h4>
                                    <ul style={{ columns: 2, columnGap: '2rem' }}>
                                        <li>Historische Fasskeller seit 1525</li>
                                        <li>Goethes Faust-Szene</li>
                                        <li>Sächsische Küche & Weine</li>
                                        <li>Mephisto & Faust Skulpturen</li>
                                        <li>Große Weinstube</li>
                                        <li>Historische Führungen</li>
                                    </ul>
                                </div>
                            </div>
                            <img
                                src="/germany/leipzig/auerbachskeller.jpg"
                                alt="Auerbachs Keller"
                                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1551632436-cbfa8dd35adfa?w=300&h=400&fit=crop";
                                }}
                            />
                        </div>
                    </div>
                );

            case 'exterior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Eingang in der Mädler-Passage</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.exterior.map((img, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <img
                                        src={img}
                                        alt={`Auerbachs Keller Außen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1551632436000 + index * 1000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>🏛️ Historische Details</h4>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Der berühmte Eingang in der Mädler-Passage zeigt die Skulpturengruppe "Faust und
                                Mephistopheles" von Mathieu Molitor. Die bronzenen Figuren erinnern an Goethes
                                berühmte Szene, die hier im Keller spielt. Die elegante Jugendstil-Passage
                                wurde 1914 eröffnet und beherbergt den weltbekannten Eingang.
                            </p>
                        </div>
                    </div>
                );

            case 'interior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Historische Kellergewölbe</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.interior.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        alt={`Auerbachs Keller Innen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1574263350000 + index * 1500}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4>🍷 Historischer Weinkeller</h4>
                                <p>Die atmosphärischen Gewölbe aus dem 16. Jahrhundert mit originalen Wandmalereien aus der Faust-Sage.</p>
                            </div>
                            <div>
                                <h4>🎭 Große Zecherstube</h4>
                                <p>Der Hauptsaal mit seiner beeindruckenden Deckenmalerei und den historischen Holztischen.</p>
                            </div>
                        </div>
                    </div>
                );

            case 'restaurant':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Gastronomie & Küche</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.restaurant.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        alt={`Auerbachs Keller Restaurant ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1555396221000 + index * 2000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>🍽️ Kulinarische Spezialitäten</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                                <div>
                                    <ul>
                                        <li><strong>Sächsische Küche:</strong> Sauerbraten, Rouladen</li>
                                        <li><strong>Leipziger Spezialitäten:</strong> Leipziger Allerlei</li>
                                        <li><strong>Wildgerichte:</strong> Saisonal wechselnd</li>
                                        <li><strong>Fischgerichte:</strong> Forelle, Zander</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><strong>Hauseigene Weine:</strong> Sächsische Tropfen</li>
                                        <li><strong>Craft Beer:</strong> Lokale Brauereien</li>
                                        <li><strong>Desserts:</strong> Quarkkäulchen, Stollen</li>
                                        <li><strong>Goethe-Menü:</strong> Historische Rezepte</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'prices':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>💰 Preise & Reservierung</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '2px solid #e2e8f0' }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🍽️ Hauptgerichte</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Sächsischer Sauerbraten</span>
                                        <strong>18,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Leipziger Allerlei</span>
                                        <strong>16,90 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Wildschweingulasch</span>
                                        <strong>21,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Forelle "Müllerin Art"</span>
                                        <strong>19,80 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Vegetarische Rouladen</span>
                                        <strong>15,50 €</strong>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#fef3c7', padding: '1.5rem', borderRadius: '8px', border: '2px solid #f59e0b' }}>
                                <h4 style={{ color: '#d97706', marginBottom: '1rem' }}>🍷 Getränke & Weine</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Sächsischer Wein (0,2l)</span>
                                        <strong>6,90 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Leipziger Gose (0,33l)</span>
                                        <strong>4,20 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Feuerzangenbowle</span>
                                        <strong>8,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Hausbier (0,5l)</span>
                                        <strong>4,80 €</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ecfdf5', padding: '1.5rem', borderRadius: '8px', border: '2px solid #10b981', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1rem' }}>🎭 Goethe-Menü & Events</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>Goethe-3-Gänge-Menü:</strong></div>
                                    <div>39,50 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Faust-Führung mit Menü:</strong></div>
                                    <div>49,90 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Kellerführung:</strong></div>
                                    <div>12,00 € pro Person</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>Reservierung empfohlen:</strong> Tel: 0341 216100 oder online</p>
                            <p><strong>Öffnungszeiten:</strong> Täglich 11:30-24:00 Uhr (Küche bis 22:30)</p>
                            <p><strong>Besonderheit:</strong> Keine Reservierung für Einzelpersonen erforderlich</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                maxWidth: '95vw',
                maxHeight: '95vh',
                width: window.innerWidth > 1024 ? '1000px' : '100%',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem',
                    borderBottom: '1px solid #e5e7eb',
                    background: 'linear-gradient(135deg, #8b5a2b 0%, #d2691e 100%)',
                    color: 'white'
                }}>
                    <h2 style={{ margin: 0, color: 'white' }}>🍷 Auerbachs Keller Leipzig</h2>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.5rem',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        ×
                    </button>
                </div>

                {/* Navigation Tabs */}
                <div style={{
                    display: 'flex',
                    borderBottom: '1px solid #e5e7eb',
                    background: '#f9fafb'
                }}>
                    {[
                        { key: 'overview', label: '📋 Übersicht' },
                        { key: 'exterior', label: '🏛️ Eingang' },
                        { key: 'interior', label: '🍷 Keller' },
                        { key: 'restaurant', label: '🍽️ Restaurant' },
                        { key: 'prices', label: '💰 Preise' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as 'overview' | 'exterior' | 'interior' | 'restaurant' | 'prices')}
                            style={{
                                flex: 1,
                                padding: '1rem',
                                border: 'none',
                                background: activeTab === tab.key ? 'white' : 'transparent',
                                color: activeTab === tab.key ? '#0ea5e9' : '#6b7280',
                                fontWeight: activeTab === tab.key ? 'bold' : 'normal',
                                cursor: 'pointer',
                                borderBottom: activeTab === tab.key ? '2px solid #0ea5e9' : '2px solid transparent'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div style={{
                    flex: 1,
                    padding: '2rem',
                    overflow: 'auto'
                }}>
                    {renderContent()}
                </div>

                {/* Footer */}
                <div style={{
                    padding: '1rem 1.5rem',
                    borderTop: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                        📍 Grimmaische Straße 2-4, 04109 Leipzig (Mädler-Passage)
                    </div>
                    <Button onClick={onClose}>Schließen</Button>
                </div>
            </div>
        </div>
    );
};

export default AuerbachskellerModal;