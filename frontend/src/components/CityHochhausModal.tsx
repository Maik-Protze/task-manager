import React, { useState } from 'react';
import Button from './Button';

interface CityHochhausModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CityHochhausModal: React.FC<CityHochhausModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'exterior' | 'interior' | 'panorama' | 'info' | 'preise'>('overview');

    if (!isOpen) return null;

    const images = {
        exterior: [
            '/germany/leipzig/uni-rieser.jpg'
        ],
        interior: [
            '/germany/leipzig/restaurant-uni-riese.jpg'
        ],
        panorama: [
            '/germany/leipzig/leipzig-panorama.jpg',
            '/germany/leipzig/city-hochhaus-aussicht.jpg',
            '/germany/leipzig/uni-riese-stadtbild.jpg'
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Das City-Hochhaus Leipzig (Uni-Riese)</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr', gap: '2rem', alignItems: 'start' }}>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Das City-Hochhaus, liebevoll "Uni-Riese" genannt, ist mit 142 Metern das höchste Gebäude
                                    Leipzigs und ein markantes Wahrzeichen der Stadt. Von 1968 bis 1972 erbaut, beherbergt es
                                    heute die Universität Leipzig und bietet eine atemberaubende Aussicht über Leipzig.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h4>📍 Standort</h4>
                                        <p>Augustusplatz 9<br />04109 Leipzig</p>
                                    </div>
                                    <div>
                                        <h4>🕒 Öffnungszeiten</h4>
                                        <p>Mo-Fr: 06:00 - 22:00 Uhr<br />Sa-So: 08:00 - 20:00 Uhr</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>🎯 Highlights</h4>
                                    <ul style={{ columns: 2, columnGap: '2rem' }}>
                                        <li>142m hohe Aussichtsplattform</li>
                                        <li>Panorama-Restaurant (29. Stock)</li>
                                        <li>360° Stadtblick über Leipzig</li>
                                        <li>Universität Leipzig</li>
                                        <li>DDR-Architektur-Ikone</li>
                                        <li>Augustusplatz-Lage</li>
                                    </ul>
                                </div>
                            </div>
                            <img
                                src="/germany/leipzig/uni-riese-stadtbild.jpg"
                                alt="City-Hochhaus Leipzig"
                                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop";
                                }}
                            />
                        </div>
                    </div>
                );

            case 'exterior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🏢 Außenansicht & Architektur</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            {images.exterior.map((img, index) => (
                                <div key={index} style={{ position: 'relative', maxWidth: '400px', width: '100%' }}>
                                    <img
                                        src={img}
                                        alt={`City-Hochhaus Außen ${index + 1}`}
                                        style={{ width: '100%', height: '500px', objectFit: 'contain', borderRadius: '8px', backgroundColor: '#f8f9fa' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1449824913935 + index * 1000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>🏗️ Architektonische Besonderheiten</h4>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Das City-Hochhaus ist ein herausragendes Beispiel der DDR-Architektur der späten 1960er Jahre.
                                Mit seiner charakteristischen Fassade und der imposanten Höhe prägt es seit über 50 Jahren
                                die Skyline Leipzigs.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                                <div>
                                    <ul>
                                        <li><strong>Baujahr:</strong> 1968-1972</li>
                                        <li><strong>Architekt:</strong> Hermann Henselmann</li>
                                        <li><strong>Stil:</strong> DDR-Moderne</li>
                                        <li><strong>Besonderheit:</strong> Höchstes Hochhaus Ostdeutschlands</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><strong>Material:</strong> Stahlbeton</li>
                                        <li><strong>Fassade:</strong> Aluminiumverkleidung</li>
                                        <li><strong>Fenster:</strong> 2.800 Einzelfenster</li>
                                        <li><strong>Aufzüge:</strong> 8 Hochgeschwindigkeitsaufzüge</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'interior':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🏢 Innenbereich & Ausstattung</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.interior.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        alt={`City-Hochhaus Innen ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1590650619471 + index * 2000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                            gap: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🎓 Universität Leipzig</h4>
                                <ul style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    <li>Moderne Hörsäle (bis 400 Plätze)</li>
                                    <li>Seminarräume & Gruppenarbeitsplätze</li>
                                    <li>Universitätsverwaltung</li>
                                    <li>Professorenbüros</li>
                                    <li>Studierendensekretariat</li>
                                    <li>Bibliothek & Lernbereiche</li>
                                </ul>
                            </div>
                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🍽️ Panorama Restaurant</h4>
                                <ul style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    <li>29. Stockwerk - 120m Höhe</li>
                                    <li>360° Rundumblick über Leipzig</li>
                                    <li>Gehobene deutsche Küche</li>
                                    <li>Internationale Spezialitäten</li>
                                    <li>Eventlocation für Feiern</li>
                                    <li>Reservierung empfohlen</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{
                            background: '#f8fafc',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid #e5e7eb'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1rem' }}>ℹ️ Besucherinfo</h4>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                Das City-Hochhaus ist als Universitätsgebäude grundsätzlich öffentlich zugänglich.
                                Das Panorama-Restaurant im 29. Stock bietet die beste Aussichtsmöglichkeit für Touristen.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '1rem' }}>
                                <div>
                                    <strong>🕒 Öffnungszeiten Restaurant:</strong><br />
                                    Mo-Sa: 11:30-22:00 Uhr<br />
                                    So: 11:30-21:00 Uhr
                                </div>
                                <div>
                                    <strong>📞 Reservierung:</strong><br />
                                    Tel: +49 341 710-0<br />
                                    restaurant@city-hochhaus.de
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'panorama':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            🌆 Panorama-Aussichten
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.panorama.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        alt={`City-Hochhaus Panorama ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1590650619471 + index * 3000}?w=400&h=300&fit=crop`;
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
                                background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧭</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Norden</h4>
                                <p>Leipziger Messe, Flughafen Leipzig/Halle, Neue Messe, Porsche-Werk</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌅</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Osten</h4>
                                <p>Völkerschlachtdenkmal, Cospudener See, Südfriedhof, Monument der Schlacht</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #DC2626, #991B1B)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌳</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Süden</h4>
                                <p>Clara-Zetkin-Park, Auwald, Cospudener See, Kulkwitzer See</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #B45309, #92400E)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Westen</h4>
                                <p>Innenstadt, Thomaskirche, Gewandhaus, Altes Rathaus, Nikolaikirche</p>
                            </div>
                        </div>
                        <div style={{
                            background: '#f8fafc',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '1px solid #e5e7eb'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1.5rem', textAlign: 'center' }}>
                                🌟 Besondere Aussichtspunkte
                            </h4>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                                gap: '1.5rem'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🍽️</div>
                                    <h5>Panorama Restaurant (29. Stock)</h5>
                                    <p>Rundumblick bei Speis und Trank</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📐</div>
                                    <h5>Aussichtsterrasse (31. Stock)</h5>
                                    <p>Höchste öffentlich zugängliche Ebene</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'info':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>ℹ️ Besucherinformationen</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '2px solid #e2e8f0' }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🕒 Öffnungszeiten</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>Universitätsbereiche:</strong>
                                    </div>
                                    <div style={{ marginBottom: '1rem', color: '#6b7280' }}>
                                        Mo-Fr: 06:00-22:00 Uhr<br />
                                        Sa-So: 08:00-20:00 Uhr
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>Restaurant (29. Stock):</strong>
                                    </div>
                                    <div style={{ color: '#6b7280' }}>
                                        Mo-So: 11:00-23:00 Uhr<br />
                                        (bei gutem Wetter)
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#fef3c7', padding: '1.5rem', borderRadius: '8px', border: '2px solid #f59e0b' }}>
                                <h4 style={{ color: '#d97706', marginBottom: '1rem' }}>🎫 Zugang & Preise</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>Universitätsbereiche:</strong>
                                    </div>
                                    <div style={{ marginBottom: '1rem', color: '#92400e' }}>
                                        Kostenfrei für Studierende<br />
                                        Besucher nach Anmeldung
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>Restaurant:</strong>
                                    </div>
                                    <div style={{ color: '#92400e' }}>
                                        Reservierung empfohlen<br />
                                        Tel: 0341 97-30000
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ecfdf5', padding: '1.5rem', borderRadius: '8px', border: '2px solid #10b981', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1rem' }}>🚇 Anfahrt & Parken</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>Straßenbahn:</strong></div>
                                    <div>Linien 4, 7, 12, 15<br />Haltestelle Augustusplatz</div>
                                </div>
                                <div>
                                    <div><strong>S-Bahn:</strong></div>
                                    <div>S1, S2, S3, S4, S5<br />Leipzig Hauptbahnhof (5 Min. Fußweg)</div>
                                </div>
                                <div>
                                    <div><strong>Parken:</strong></div>
                                    <div>Tiefgarage Augustusplatz<br />Parkhaus Hauptbahnhof</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>Hinweis:</strong> Das City-Hochhaus ist ein aktives Universitätsgebäude. Bitte respektieren Sie den Lehrbetrieb.</p>
                            <p><strong>Barrierefreiheit:</strong> Aufzüge und behindertengerechte Zugänge vorhanden</p>
                            <p><strong>Sicherheit:</strong> Ausweispflicht für Nicht-Universitätsangehörige</p>
                        </div>
                    </div>
                );

            case 'preise':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem' }}>💰 Eintrittspreise & Informationen</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1.5rem' }}>🎓 Universitätsbereiche</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Studenten (mit Ausweis)</span>
                                        <strong>Kostenfrei</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Universitätsmitarbeiter</span>
                                        <strong>Kostenfrei</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Besucher/Führungen</span>
                                        <strong>5,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Gruppen ab 10 Personen</span>
                                        <strong>3,00 €</strong>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#FEF3C7', padding: '2rem', borderRadius: '12px', border: '2px solid #F59E0B' }}>
                                <h4 style={{ color: '#D97706', marginBottom: '1.5rem' }}>🍽️ Panorama Restaurant</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Nur Getränke</span>
                                        <strong>Kostenfrei</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Mittagsmenü</span>
                                        <strong>12,50 - 18,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>À la Carte Hauptgericht</span>
                                        <strong>15,00 - 28,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Tischreservierung</span>
                                        <strong>Empfohlen</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ECFDF5', padding: '2rem', borderRadius: '12px', border: '2px solid #10B981', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1.5rem' }}>🕒 Öffnungszeiten & Führungen</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>Universitätsbereiche:</strong></div>
                                    <div>Mo-Fr: 06:00-22:00<br />Sa-So: 08:00-20:00</div>
                                </div>
                                <div>
                                    <div><strong>Panorama Restaurant:</strong></div>
                                    <div>Mo-Sa: 11:30-22:00<br />So: 11:30-21:00</div>
                                </div>
                                <div>
                                    <div><strong>Öffentliche Führungen:</strong></div>
                                    <div>Sa: 14:00 & 16:00<br />So: 11:00 & 14:00</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#F3E8FF', padding: '2rem', borderRadius: '12px', border: '2px solid #8B5CF6', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#6D28D9', marginBottom: '1.5rem' }}>🚇 Anfahrt & Parken</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem' }}>
                                <div>
                                    <h5>🚊 Öffentliche Verkehrsmittel:</h5>
                                    <ul>
                                        <li><strong>Straßenbahn:</strong> Linien 4, 7, 12, 15 → Augustusplatz</li>
                                        <li><strong>S-Bahn:</strong> S1-S5 → Hauptbahnhof (5 Min. Fußweg)</li>
                                        <li><strong>Bus:</strong> Linien 89, 265 → Augustusplatz</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>🚗 Parkmöglichkeiten:</h5>
                                    <ul>
                                        <li><strong>Tiefgarage Augustusplatz:</strong> 2,50€/Std.</li>
                                        <li><strong>Parkhaus Hauptbahnhof:</strong> 2,00€/Std.</li>
                                        <li><strong>Straßenparkplätze:</strong> Begrenzt verfügbar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>📞 Kontakt & Reservierung:</strong> Restaurant: +49 341 710-0 | Führungen: +49 341 97-30000</p>
                            <p><strong>♿ Barrierefreiheit:</strong> Vollständig rollstuhlgerecht mit Aufzügen und behindertengerechten Toiletten</p>
                            <p><strong>🔒 Sicherheitshinweis:</strong> Ausweispflicht für Besucher, Universitätsausweis für Studenten erforderlich</p>
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
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                    color: 'white'
                }}>
                    <h2 style={{ margin: 0, color: 'white' }}>🏢 City-Hochhaus Leipzig (Uni-Riese)</h2>
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
                        { key: 'panorama', label: '🌆 Panorama' },
                        { key: 'preise', label: '💰 Preise' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as 'overview' | 'exterior' | 'interior' | 'panorama' | 'info' | 'preise')}
                            style={{
                                flex: 1,
                                padding: '1rem',
                                border: 'none',
                                background: activeTab === tab.key ? 'white' : 'transparent',
                                color: activeTab === tab.key ? '#3b82f6' : '#6b7280',
                                fontWeight: activeTab === tab.key ? 'bold' : 'normal',
                                cursor: 'pointer',
                                borderBottom: activeTab === tab.key ? '2px solid #3b82f6' : '2px solid transparent'
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
                        📍 Augustusplatz 9, 04109 Leipzig • Höhe: 142,5m
                    </div>
                    <Button onClick={onClose}>Schließen</Button>
                </div>
            </div>
        </div>
    );
};

export default CityHochhausModal;