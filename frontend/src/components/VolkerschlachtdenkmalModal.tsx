import React, { useState } from 'react';
import Button from './Button';

interface VolkerschlachtdenkmalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const VolkerschlachtdenkmalModal: React.FC<VolkerschlachtdenkmalModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'exterior' | 'interior' | 'museum' | 'prices'>('overview');

    if (!isOpen) return null;

    const images = {
        exterior: [
            '/germany/leipzig/voelkerschlachtdenkmal-aussen.jpg',
            '/germany/leipzig/leipzig-panorama.jpg'
        ],
        interior: [
            '/germany/leipzig/voelkerschlacht-innenraum.jpg',
            '/germany/leipzig/leipzig-panorama.jpg'
        ],
        museum: [
            '/germany/leipzig/leipzig-museum.jpg',
            '/germany/leipzig/voelkerschlachtdenkmal-aussen.jpg'
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Das Völkerschlachtdenkmal Leipzig</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr', gap: '2rem', alignItems: 'start' }}>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Das Völkerschlachtdenkmal ist eines der bekanntesten Wahrzeichen Leipzigs und erinnert an die 
                                    Völkerschlacht bei Leipzig von 1813. Mit einer Höhe von 91 Metern ist es eines der größten 
                                    Denkmäler Europas und bietet eine atemberaubende Aussicht über Leipzig.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h4>📍 Standort</h4>
                                        <p>Straße des 18. Oktober 100<br/>04299 Leipzig</p>
                                    </div>
                                    <div>
                                        <h4>🕒 Öffnungszeiten</h4>
                                        <p>Täglich 10:00 - 18:00 Uhr<br/>(April - Oktober bis 20:00)</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>🎯 Highlights</h4>
                                    <ul style={{ columns: 2, columnGap: '2rem' }}>
                                        <li>91m hohe Aussichtsplattform</li>
                                        <li>Interaktives Museum</li>
                                        <li>360° Panorama über Leipzig</li>
                                        <li>Historische Krypta</li>
                                        <li>Multimedia-Präsentationen</li>
                                        <li>Thematische Führungen</li>
                                    </ul>
                                </div>
                            </div>
                            <img 
                                src="/germany/leipzig/volkerschlacht-banner03.jpg" 
                                alt="Völkerschlachtdenkmal" 
                                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=300&h=400&fit=crop";
                                }}
                            />
                        </div>
                    </div>
                );

            case 'exterior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Außenansicht des Denkmals</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.exterior.map((img, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <img 
                                        src={img}
                                        alt={`Völkerschlachtdenkmal Außen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1567696911980 + index}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>🏛️ Architektonische Details</h4>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Das monumentale Bauwerk wurde zwischen 1898 und 1913 errichtet und zeigt eine 
                                beeindruckende Mischung aus neoromanischen und deutschen Jugendstil-Elementen. 
                                Die massive Struktur aus Porphyr und Granit symbolisiert die Stärke und 
                                Einheit der Völker gegen Napoleon.
                            </p>
                        </div>
                    </div>
                );

            case 'interior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Innenräume des Denkmals</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.interior.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Völkerschlachtdenkmal Innen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            // Fallback zu Unsplash wenn lokales Bild nicht existiert
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1580285830000 + index * 1000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4>🏰 Ruhmeshalle</h4>
                                <p>Die beeindruckende Krypta mit den vier Totenwächtern und der ewigen Flamme.</p>
                            </div>
                            <div>
                                <h4>🎭 Kuppelhalle</h4>
                                <p>Die monumentale Kuppel mit Darstellungen der Erzengel Michael.</p>
                            </div>
                        </div>
                    </div>
                );

            case 'museum':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Museum zur Völkerschlacht</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.museum.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Museum Völkerschlacht ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1581579198000 + index * 2000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>🎨 Ausstellungsbereiche</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                                <div>
                                    <ul>
                                        <li><strong>Historischer Rundgang:</strong> Die Schlacht von 1813</li>
                                        <li><strong>Interaktive Medien:</strong> 3D-Rekonstruktionen</li>
                                        <li><strong>Originalexponate:</strong> Waffen und Uniformen</li>
                                        <li><strong>Diorama:</strong> Schlachtverlauf im Detail</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><strong>Multimedia-Show:</strong> "Die Entscheidung 1813"</li>
                                        <li><strong>Audioguide:</strong> In 8 Sprachen verfügbar</li>
                                        <li><strong>Kinderbereich:</strong> Geschichte spielerisch erleben</li>
                                        <li><strong>Sonderausstellungen:</strong> Wechselnde Themen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'prices':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>💰 Eintrittspreise & Tickets</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '2px solid #e2e8f0' }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🎫 Standardtickets</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Erwachsene</span>
                                        <strong>10,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Ermäßigt*</span>
                                        <strong>8,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Kinder (6-16 Jahre)</span>
                                        <strong>6,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Familienkarte (2+3)</span>
                                        <strong>25,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Kinder unter 6</span>
                                        <strong>Frei</strong>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#fef3c7', padding: '1.5rem', borderRadius: '8px', border: '2px solid #f59e0b' }}>
                                <h4 style={{ color: '#d97706', marginBottom: '1rem' }}>👑 Premium-Erlebnis</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Aussichtsplattform</span>
                                        <strong>+3,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Audioguide</span>
                                        <strong>+4,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Kombi-Ticket</span>
                                        <strong>15,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>VIP-Führung (Gruppe)</span>
                                        <strong>120,00 €</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ecfdf5', padding: '1.5rem', borderRadius: '8px', border: '2px solid #10b981', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1rem' }}>🎟️ Gruppentarife (ab 10 Personen)</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>Erwachsene:</strong></div>
                                    <div>8,50 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Schüler/Studenten:</strong></div>
                                    <div>5,00 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Schulklassen:</strong></div>
                                    <div>4,00 € pro Schüler</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>*Ermäßigung gilt für:</strong> Studenten, Senioren ab 65, Schwerbehinderte, Arbeitslose (mit Nachweis)</p>
                            <p><strong>Öffnungszeiten:</strong> Täglich 10:00-18:00 Uhr (April-Oktober bis 20:00 Uhr)</p>
                            <p><strong>Letzter Einlass:</strong> 30 Minuten vor Schließung</p>
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
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white'
                }}>
                    <h2 style={{ margin: 0, color: 'white' }}>🏛️ Völkerschlachtdenkmal Leipzig</h2>
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
                        { key: 'exterior', label: '🏛️ Außen' },
                        { key: 'interior', label: '🎭 Innen' },
                        { key: 'museum', label: '🎨 Museum' },
                        { key: 'prices', label: '💰 Preise' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as 'overview' | 'exterior' | 'interior' | 'museum' | 'prices')}
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
                        📍 Straße des 18. Oktober 100, 04299 Leipzig
                    </div>
                    <Button onClick={onClose}>Schließen</Button>
                </div>
            </div>
        </div>
    );
};

export default VolkerschlachtdenkmalModal;