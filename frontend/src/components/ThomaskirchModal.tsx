import React, { useState } from 'react';
import Button from './Button';

interface ThomaskirchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ThomaskirchModal: React.FC<ThomaskirchModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'exterior' | 'interior' | 'music' | 'prices'>('overview');

    if (!isOpen) return null;

    const images = {
        exterior: [
            '/germany/leipzig/thomaskirche-aussen.jpg',
            '/germany/leipzig/thomaskirche-turm.jpg'
        ],
        interior: [
            '/germany/leipzig/thomaskirche-innenraum-leipzig.jpg'
        ],
        music: [
            '/germany/leipzig/thomaskirche-orgel.jpg',
            '/germany/leipzig/thomaskirche-chor.jpg'
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Thomaskirche Leipzig</h3>
                        {/* Großes Hauptbild - vollbreite Darstellung */}
                        <div style={{ marginBottom: '2rem' }}>
                            <img 
                                src="/germany/leipzig/thomaskirche.jpg" 
                                alt="Thomaskirche Leipzig" 
                                style={{ 
                                    width: '100%', 
                                    height: window.innerWidth > 768 ? '500px' : '300px', 
                                    objectFit: 'cover', 
                                    borderRadius: '12px',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=500&fit=crop";
                                }}
                            />
                        </div>
                        
                        {/* Informationsbereich */}
                        <div>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Die Thomaskirche ist eine der berühmtesten Kirchen Deutschlands und weltbekannt als 
                                Wirkungsstätte von Johann Sebastian Bach. Hier wirkte der große Komponist von 1723 bis 
                                zu seinem Tod 1750 als Thomaskantor und schuf unvergängliche Meisterwerke.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <h4>📍 Standort</h4>
                                    <p>Thomaskirchhof 18<br/>04109 Leipzig</p>
                                </div>
                                <div>
                                    <h4>🕒 Öffnungszeiten</h4>
                                    <p>Täglich 09:00 - 18:00 Uhr<br/>Sonn-/Feiertags ab 13:00 Uhr</p>
                                </div>
                            </div>
                            <div>
                                <h4>🎯 Highlights</h4>
                                <ul style={{ columns: window.innerWidth > 768 ? 2 : 1, columnGap: '2rem' }}>
                                    <li>Johann Sebastian Bach Grab</li>
                                    <li>Weltberühmter Thomanerchor</li>
                                    <li>Historische Sauer-Orgel</li>
                                    <li>Gotische Architektur (15. Jhdt.)</li>
                                    <li>Bach-Denkmal vor der Kirche</li>
                                    <li>Regelmäßige Konzerte</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            case 'exterior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            🏛️ Außenarchitektur & Geschichte
                        </h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            {images.exterior.map((img, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <img 
                                        src={img}
                                        alt={`Thomaskirche Außen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1507003211169 + index * 1000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                            gap: '2rem', 
                            marginBottom: '3rem' 
                        }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #8B5A2B, #D2691E)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏰</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Gotische Basilika</h4>
                                <p>Erbaut 1482-1496 im spätgotischen Stil mit imposantem 68m hohem Turm</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎭</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Bach-Denkmal</h4>
                                <p>Eindrucksvolles Bronzedenkmal von Carl Seffner aus dem Jahr 1908</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📿</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Reformation</h4>
                                <p>Erste evangelische Predigt 1539 durch Martin Luther höchstpersönlich</p>
                            </div>
                        </div>

                        <div style={{ 
                            background: '#f8fafc',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '1px solid #e5e7eb'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1.5rem', textAlign: 'center' }}>
                                🏗️ Architektonische Besonderheiten
                            </h4>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                                gap: '1.5rem'
                            }}>
                                <div>
                                    <h5>🔔 Glockenturm</h5>
                                    <p>68 Meter hoch mit 8 historischen Glocken, darunter die berühmte "Gloriosa"</p>
                                </div>
                                <div>
                                    <h5>🪟 Fenster</h5>
                                    <p>Prachtvolle gotische Maßwerkfenster mit modernen Glasmalereien</p>
                                </div>
                                <div>
                                    <h5>🧱 Bauweise</h5>
                                    <p>Roter Sandstein mit charakteristischen Strebepfeilern und Fialen</p>
                                </div>
                                <div>
                                    <h5>⛪ Chor</h5>
                                    <p>Dreischiffige Hallenkirche mit erhöhtem gotischen Chorraum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'interior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            ⛪ Innenraum & Ausstattung
                        </h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                            {images.interior.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Thomaskirche Innen ${index + 1}`}
                                        style={{ 
                                            width: '100%', 
                                            height: '300px', 
                                            objectFit: 'cover', 
                                            borderRadius: '12px',
                                            boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.18)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
                                        }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1580285830000 + index * 1500}?w=600&h=400&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                            gap: '2rem', 
                            marginBottom: '3rem' 
                        }}>
                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>⚰️</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Bach-Grab</h4>
                                <p>Seit 1950 ruht Johann Sebastian Bach in der Thomaskirche. Seine Grabplatte aus Bronze zeigt den Komponisten mit einer Notenrolle.</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🎨</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Hochaltar</h4>
                                <p>Neugotischer Flügelaltar von 1889 mit Darstellungen der Geburt, Kreuzigung und Auferstehung Christi.</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🕊️</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Taufstein</h4>
                                <p>Historischer Bronzetaufstein von 1614, an dem bereits Bach seine Kinder taufen ließ.</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🪟</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Glasfenster</h4>
                                <p>Moderne Chorfenster von Charles Crodel (1954) mit leuchtenden biblischen Motiven.</p>
                            </div>
                        </div>

                        <div style={{ 
                            background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '2px solid #F59E0B'
                        }}>
                            <h4 style={{ color: '#92400E', marginBottom: '1.5rem', textAlign: 'center' }}>
                                📖 Besondere Ausstattung
                            </h4>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', 
                                gap: '1.5rem',
                                fontSize: '0.95rem'
                            }}>
                                <div>
                                    <ul style={{ color: '#92400E' }}>
                                        <li><strong>Epitaph des Thomaskantors:</strong> Gedenktafel für J.S. Bach</li>
                                        <li><strong>Reformations-Altar:</strong> Erinnerung an Luthers erste Predigt</li>
                                        <li><strong>Chorgestühl:</strong> Geschnitzte Sitze für den Thomanerchor</li>
                                        <li><strong>Kanzel:</strong> Barocke Predigtkanzel von 1721</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul style={{ color: '#92400E' }}>
                                        <li><strong>Sakristei:</strong> Historischer Vorbereitungsraum</li>
                                        <li><strong>Emporen:</strong> Mehrstöckige Galerien mit 1.400 Sitzplätzen</li>
                                        <li><strong>Gewölbe:</strong> Spätgotisches Netzgewölbe im Chor</li>
                                        <li><strong>Epitaphien:</strong> Grabdenkmäler bedeutender Persönlichkeiten</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'music':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            🎵 Musik & Thomanerchor
                        </h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            {images.music.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Thomaskirche Musik ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1581579198000 + index * 2000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                            gap: '2rem', 
                            marginBottom: '3rem' 
                        }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #DC2626, #991B1B)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎼</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Johann Sebastian Bach</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1723-1750</p>
                                <p>27 Jahre Thomaskantor, komponierte hier seine berühmtesten Werke wie die Matthäus-Passion</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👦</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Thomanerchor</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Seit 1212</p>
                                <p>Weltberühmter Knabenchor mit über 800-jähriger Tradition, 90 Sänger im Alter von 9-18 Jahren</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎹</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Sauer-Orgel</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>5.811 Pfeifen</p>
                                <p>Historische Orgel von 1889, restauriert und erweitert, 88 Register auf 4 Manualen</p>
                            </div>
                        </div>

                        <div style={{ 
                            background: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)',
                            padding: '2rem',
                            borderRadius: '15px',
                            marginBottom: '2rem'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1.5rem', textAlign: 'center' }}>
                                🎭 Regelmäßige Konzerte & Aufführungen
                            </h4>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', 
                                gap: '2rem'
                            }}>
                                <div style={{
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '10px',
                                    textAlign: 'center'
                                }}>
                                    <h5 style={{ color: '#DC2626', marginBottom: '1rem' }}>🎵 Motette</h5>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Jeden Freitag um 18:00 Uhr und Samstag um 15:00 Uhr
                                        mit dem weltberühmten Thomanerchor
                                    </p>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#DC2626' }}>
                                        Eintritt frei
                                    </div>
                                </div>

                                <div style={{
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '10px',
                                    textAlign: 'center'
                                }}>
                                    <h5 style={{ color: '#059669', marginBottom: '1rem' }}>🎼 Kantaten-Gottesdienst</h5>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Sonn- und Feiertags um 09:30 Uhr
                                        mit Bach-Kantaten und Thomanerchor
                                    </p>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#059669' }}>
                                        Eintritt frei
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ 
                            background: '#FEF3C7',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '2px solid #F59E0B'
                        }}>
                            <h4 style={{ color: '#92400E', marginBottom: '1.5rem', textAlign: 'center' }}>
                                🎫 Besondere Veranstaltungen
                            </h4>
                            <div style={{ fontSize: '1rem', color: '#92400E' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🌟 Bachfest Leipzig (Juni):</strong> Internationales Festival mit über 100 Konzerten
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🎄 Weihnachtsoratorium:</strong> Traditionelle Aufführung in der Adventszeit
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>✝️ Matthäus-Passion:</strong> Karfreitag und Palmsonntag
                                </div>
                                <div>
                                    <strong>🎹 Orgelkonzerte:</strong> Regelmäßige Konzerte an der historischen Sauer-Orgel
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'prices':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem' }}>💰 Besichtigungspreise & Führungen</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1.5rem' }}>⛪ Kirchenbesichtigung</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Erwachsene</span>
                                        <strong>3,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Ermäßigt*</span>
                                        <strong>2,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Schüler/Studenten</span>
                                        <strong>1,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Familienkarte (2+3)</span>
                                        <strong>7,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Kinder unter 6</span>
                                        <strong>Frei</strong>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#FEF3C7', padding: '2rem', borderRadius: '12px', border: '2px solid #F59E0B' }}>
                                <h4 style={{ color: '#D97706', marginBottom: '1.5rem' }}>👥 Gruppenführungen</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Öffentliche Führung</span>
                                        <strong>7,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Gruppe (bis 25 Pers.)</span>
                                        <strong>120,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Schulklassen</span>
                                        <strong>60,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Bach-Spezialführung</span>
                                        <strong>150,00 €</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ECFDF5', padding: '2rem', borderRadius: '12px', border: '2px solid #10B981', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1.5rem' }}>🎵 Musik & Konzerte</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>Motette (Fr/Sa):</strong></div>
                                    <div>Eintritt frei</div>
                                </div>
                                <div>
                                    <div><strong>Kantaten-Gottesdienst:</strong></div>
                                    <div>Eintritt frei</div>
                                </div>
                                <div>
                                    <div><strong>Orgelkonzerte:</strong></div>
                                    <div>8,00 - 25,00 €</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#F3E8FF', padding: '2rem', borderRadius: '12px', border: '2px solid #8B5CF6', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#6D28D9', marginBottom: '1.5rem' }}>⭐ Besondere Angebote</h4>
                            <div style={{ fontSize: '1rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🎼 Bach-Paket:</strong> Kirche + Führung + Bach-Museum = 12€ (statt 16€)
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>👨‍👩‍👧‍👦 Leipzig Card:</strong> 50% Rabatt auf Eintritt und Führungen
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🎭 Konzert-Abonnement:</strong> 10 Konzerte für 180€ (statt 220€)
                                </div>
                                <div>
                                    <strong>📱 Audio-Guide:</strong> Kostenlos in 8 Sprachen verfügbar
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>*Ermäßigung gilt für:</strong> Senioren ab 65, Schwerbehinderte, Arbeitslose (mit Nachweis)</p>
                            <p><strong>Öffnungszeiten:</strong> Täglich 09:00-18:00 Uhr | Sonn-/Feiertags ab 13:00 Uhr</p>
                            <p><strong>Führungen:</strong> Mo-Sa 14:00 Uhr, So 14:00 & 15:30 Uhr (Anmeldung empfohlen)</p>
                            <p><strong>Hinweis:</strong> Während Gottesdiensten und Konzerten keine Besichtigung möglich</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                padding: '20px'
            }}
            onClick={onClose}
        >
            <div 
                style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    width: '90%',
                    maxWidth: '900px',
                    maxHeight: '90vh',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem',
                    borderBottom: '1px solid #e5e7eb',
                    background: 'linear-gradient(135deg, #8B5A2B 0%, #D2691E 100%)',
                    color: 'white'
                }}>
                    <h2 style={{ margin: 0, color: 'white' }}>🎵 Thomaskirche Leipzig</h2>
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
                        { key: 'exterior', label: '🏛️ Architektur' },
                        { key: 'interior', label: '⛪ Innenraum' },
                        { key: 'music', label: '🎵 Musik' },
                        { key: 'prices', label: '💰 Preise' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as 'overview' | 'exterior' | 'interior' | 'music' | 'prices')}
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
                    padding: '20px',
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
                        📍 Thomaskirchhof 18, 04109 Leipzig • 🎵 Bach-Wirkungsstätte 1723-1750
                    </div>
                    <Button onClick={onClose}>Schließen</Button>
                </div>
            </div>
        </div>
    );
};

export default ThomaskirchModal;