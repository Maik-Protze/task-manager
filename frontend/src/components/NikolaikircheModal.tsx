import React, { useState } from 'react';
import Button from './Button';

interface NikolaikircheModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NikolaikircheModal: React.FC<NikolaikircheModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'exterior' | 'interior' | 'revolution' | 'prices'>('overview');

    if (!isOpen) return null;

    const images = {
        exterior: [
            '/germany/leipzig/nikolaikirche-aussen.jpg',
            '/germany/leipzig/nikolaikirche-turm.jpg'
        ],
        interior: [
            '/germany/leipzig/nikolaikirche-innenansicht.jpg',
            '/germany/leipzig/nikolaikirche-innen.jpg',
            '/germany/leipzig/nikolaikirche-saeulen.jpg'
        ],
        revolution: [
            '/germany/leipzig/nikolaikirche-friedensgebet.jpg',
            '/germany/leipzig/nikolaikirche-1989.jpg'
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Nikolaikirche Leipzig</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr', gap: '2rem', alignItems: 'start' }}>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Die Nikolaikirche ist die älteste und größte Kirche Leipzigs und wurde weltberühmt als 
                                    Ausgangspunkt der Friedlichen Revolution von 1989. Die Montagsdemonstrationen begannen hier 
                                    und führten zum Fall der Berliner Mauer und zur Deutschen Wiedervereinigung.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h4>📍 Standort</h4>
                                        <p>Nikolaikirchhof 3<br/>04109 Leipzig</p>
                                    </div>
                                    <div>
                                        <h4>🕒 Öffnungszeiten</h4>
                                        <p>Täglich 10:00 - 18:00 Uhr<br/>Sonn-/Feiertags ab 11:30 Uhr</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>🎯 Highlights</h4>
                                    <ul style={{ columns: 2, columnGap: '2rem' }}>
                                        <li>Geburtsort der Friedlichen Revolution 1989</li>
                                        <li>Einzigartige Palmenkapitelle im Innenraum</li>
                                        <li>Romanischer Ursprung (12. Jahrhundert)</li>
                                        <li>Klassizistische Umgestaltung</li>
                                        <li>Montagsgebete seit 1982</li>
                                        <li>Friedenssäule am Nikolaikirchhof</li>
                                    </ul>
                                </div>
                            </div>
                            <img 
                                src="/germany/leipzig/nikolaikirche.jpg" 
                                alt="Nikolaikirche Leipzig" 
                                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1566139971864-3b2139bb95d4?w=300&h=400&fit=crop";
                                }}
                            />
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
                                        alt={`Nikolaikirche Außen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1566139971864 + index * 1000}?w=400&h=300&fit=crop`;
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
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏰</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Romanischer Ursprung</h4>
                                <p>Gegründet um 1165, älteste Kirche Leipzigs mit romanischem Grundriss</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Klassizistische Fassade</h4>
                                <p>Umgestaltung 1784-1797 durch Johann Carl Friedrich Dauthe</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕊️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Friedenssäule</h4>
                                <p>Denkmal für die Friedliche Revolution vor der Kirche seit 1999</p>
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
                                    <h5>⛪ Kirchturm</h5>
                                    <p>75 Meter hoher Turm mit barocker Haube und Wetterfahne</p>
                                </div>
                                <div>
                                    <h5>🏛️ Portikus</h5>
                                    <p>Klassizistischer Säulenportikus mit dorischen Säulen</p>
                                </div>
                                <div>
                                    <h5>🧱 Bauweise</h5>
                                    <p>Romanischer Kern mit klassizistischer Verkleidung</p>
                                </div>
                                <div>
                                    <h5>🪟 Fenster</h5>
                                    <p>Große Rundbogenfenster im klassizistischen Stil</p>
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
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            {images.interior.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Nikolaikirche Innen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1580289830000 + index * 1500}?w=400&h=300&fit=crop`;
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
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🌴</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Palmenkapitelle</h4>
                                <p>Einzigartige Palmen- und Papyruskapitelle verleihen dem Innenraum einen orientalischen Charakter und symbolisieren das himmlische Jerusalem.</p>
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
                                <p>Klassizistischer Altar mit Gemälde "Christus segnet die Kinder" von Adam Friedrich Oeser aus dem Jahr 1797.</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🎹</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Ladegast-Orgel</h4>
                                <p>Romantische Orgel von Friedrich Ladegast aus 1862 mit 83 Registern und über 6.800 Pfeifen.</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>💒</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Kassettendecke</h4>
                                <p>Prachtvolle Kassettendecke im klassizistischen Stil mit floralen Ornamenten und Goldverzierungen.</p>
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
                                        <li><strong>Kanzelaltar:</strong> Klassizistische Kanzel-Altar-Kombination</li>
                                        <li><strong>Emporen:</strong> Dreiseitige Emporen für 1.900 Besucher</li>
                                        <li><strong>Wandgemälde:</strong> Bibelhische Szenen von Friedrich Oeser</li>
                                        <li><strong>Taufbecken:</strong> Klassizistisches Taufbecken aus Marmor</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul style={{ color: '#92400E' }}>
                                        <li><strong>Kronleuchter:</strong> Kristallkronleuchter aus der Barockzeit</li>
                                        <li><strong>Gestühl:</strong> Originalgestühl aus der Zeit um 1800</li>
                                        <li><strong>Epitaphien:</strong> Grabdenkmäler bedeutender Leipziger</li>
                                        <li><strong>Fenster:</strong> Klarglasfenster für optimale Lichtführung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'revolution':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            🕊️ Friedliche Revolution 1989
                        </h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            {images.revolution.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Nikolaikirche Revolution ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1581579298000 + index * 2000}?w=400&h=300&fit=crop`;
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
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕯️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Montagsgebete</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Seit 1982</p>
                                <p>Friedensgebete jeden Montag um 17:00 Uhr als Keimzelle der Bürgerbewegung</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✊</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>9. Oktober 1989</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>70.000 Menschen</p>
                                <p>Entscheidende Montagsdemonstration, die den Wendepunkt der DDR-Geschichte markierte</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕊️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Gewaltlosigkeit</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Friedlich</p>
                                <p>Motto "Keine Gewalt" führte zur ersten erfolgreichen gewaltlosen Revolution in Deutschland</p>
                            </div>
                        </div>

                        <div style={{ 
                            background: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)',
                            padding: '2rem',
                            borderRadius: '15px',
                            marginBottom: '2rem'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1.5rem', textAlign: 'center' }}>
                                📅 Chronologie der Ereignisse
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
                                    textAlign: 'left'
                                }}>
                                    <h5 style={{ color: '#DC2626', marginBottom: '1rem' }}>🕯️ 1982-1988</h5>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Beginn der Friedensgebete in der Nikolaikirche. Pfarrer Christian Führer 
                                        etabliert regelmäßige Montagsgebete für Frieden und Gerechtigkeit.
                                    </p>
                                </div>

                                <div style={{
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '10px',
                                    textAlign: 'left'
                                }}>
                                    <h5 style={{ color: '#059669', marginBottom: '1rem' }}>📈 September 1989</h5>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Teilnehmerzahlen steigen dramatisch an. Aus 1.000 Teilnehmern werden 
                                        wöchentlich mehr, die Kirche platzt aus allen Nähten.
                                    </p>
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
                                🏆 Historische Bedeutung
                            </h4>
                            <div style={{ fontSize: '1rem', color: '#92400E' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🌍 Weltgeschichte:</strong> Ausgangspunkt der Friedlichen Revolution, die zur Deutschen Einheit führte
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🕊️ Gewaltlosigkeit:</strong> Vorbild für friedliche Revolutionen weltweit
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>⛪ Kirche als Freiraum:</strong> Schutzraum für Andersdenkende in der DDR
                                </div>
                                <div>
                                    <strong>🎖️ Auszeichnungen:</strong> UNESCO-Gedenkstätte für Weltfrieden (geplant)
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
                                        <strong>2,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Ermäßigt*</span>
                                        <strong>1,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Schüler/Studenten</span>
                                        <strong>1,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Familienkarte (2+3)</span>
                                        <strong>5,00 €</strong>
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
                                        <strong>5,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Gruppe (bis 25 Pers.)</span>
                                        <strong>75,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Schulklassen</span>
                                        <strong>40,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Revolution-Spezialführung</span>
                                        <strong>100,00 €</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ECFDF5', padding: '2rem', borderRadius: '12px', border: '2px solid #10B981', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1.5rem' }}>🕊️ Friedensgebete & Veranstaltungen</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>Montagsgebete:</strong></div>
                                    <div>Jeden Montag 17:00 Uhr - Eintritt frei</div>
                                </div>
                                <div>
                                    <div><strong>Gottesdienste:</strong></div>
                                    <div>Sonntag 09:30 Uhr - Eintritt frei</div>
                                </div>
                                <div>
                                    <div><strong>Orgelkonzerte:</strong></div>
                                    <div>5,00 - 15,00 €</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#F3E8FF', padding: '2rem', borderRadius: '12px', border: '2px solid #8B5CF6', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#6D28D9', marginBottom: '1.5rem' }}>⭐ Besondere Angebote</h4>
                            <div style={{ fontSize: '1rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🏛️ Geschichte-Paket:</strong> Nikolaikirche + Zeitgeschichtliches Forum = 8€ (statt 12€)
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>👨‍👩‍👧‍👦 Leipzig Card:</strong> 50% Rabatt auf Eintritt und Führungen
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🕊️ Revolution-Tour:</strong> Nikolaikirche + Runde Ecke + Stasi-Museum = 15€
                                </div>
                                <div>
                                    <strong>📱 Audio-Guide:</strong> Kostenlos in 6 Sprachen verfügbar
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>*Ermäßigung gilt für:</strong> Senioren ab 65, Schwerbehinderte, Arbeitslose (mit Nachweis)</p>
                            <p><strong>Öffnungszeiten:</strong> Täglich 10:00-18:00 Uhr | Sonn-/Feiertags ab 11:30 Uhr</p>
                            <p><strong>Führungen:</strong> Mo-Sa 14:00 & 15:30 Uhr, So 14:00 Uhr (Anmeldung empfohlen)</p>
                            <p><strong>Hinweis:</strong> Während Gottesdiensten und Friedensgebeten keine Besichtigung möglich</p>
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
                    background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
                    color: 'white'
                }}>
                    <h2 style={{ margin: 0, color: 'white' }}>🕊️ Nikolaikirche Leipzig</h2>
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
                        { key: 'revolution', label: '🕊️ Revolution' },
                        { key: 'prices', label: '💰 Preise' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as 'overview' | 'exterior' | 'interior' | 'revolution' | 'prices')}
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
                        📍 Nikolaikirchhof 3, 04109 Leipzig • 🕊️ Geburtsort der Friedlichen Revolution 1989
                    </div>
                    <Button onClick={onClose}>Schließen</Button>
                </div>
            </div>
        </div>
    );
};

export default NikolaikircheModal;