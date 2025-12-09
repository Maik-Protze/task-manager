import React, { useState } from 'react';
import Button from './Button';

interface StadtrundgangModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const StadtrundgangModal: React.FC<StadtrundgangModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'tours' | 'highlights' | 'guides' | 'prices'>('overview');

    if (!isOpen) return null;

    const images = {
        tours: [
            '/germany/leipzig/stadtrundgang-altstadt.jpg',
            '/germany/leipzig/stadtrundgang-gruppe.jpg'
        ],
        highlights: [
            '/germany/leipzig/stadtrundgang-marktplatz.jpg',
            '/germany/leipzig/stadtrundgang-bach.jpg'
        ],
        guides: [
            '/germany/leipzig/stadtrundgang-guide.jpg',
            '/germany/leipzig/stadtrundgang-erklaerung.jpg'
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Geführte Stadtrundgänge Leipzig</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr', gap: '2rem', alignItems: 'start' }}>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Entdecken Sie Leipzig mit unseren professionellen Stadtführern! Unsere geführten 
                                    Rundgänge bieten Ihnen einzigartige Einblicke in die reiche Geschichte, Kultur und 
                                    Musik der Messestadt. Von der Friedlichen Revolution bis zu Bach - erleben Sie Leipzig hautnah!
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h4>📍 Treffpunkt</h4>
                                        <p>Marktplatz (Altes Rathaus)<br/>04109 Leipzig</p>
                                    </div>
                                    <div>
                                        <h4>🕒 Zeiten</h4>
                                        <p>Täglich 10:00, 14:00, 16:00 Uhr<br/>Dauer: 1,5-3 Stunden</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>🎯 Tour-Highlights</h4>
                                    <ul style={{ columns: 2, columnGap: '2rem' }}>
                                        <li>Historische Altstadt & Marktplatz</li>
                                        <li>Thomaskirche & Bach-Denkmal</li>
                                        <li>Nikolaikirche & Friedliche Revolution</li>
                                        <li>Auerbachs Keller & Mädler-Passage</li>
                                        <li>Gewandhaus & Oper Leipzig</li>
                                        <li>Völkerschlachtdenkmal (Extra-Tour)</li>
                                    </ul>
                                </div>
                            </div>
                            <img 
                                src="/germany/leipzig/stadtrundgang-karte.png" 
                                alt="Leipzig Stadtrundgänge Karte - Übersicht aller Touren" 
                                style={{ width: '100%', height: '400px', objectFit: 'contain', borderRadius: '8px' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop";
                                }}
                            />
                        </div>
                    </div>
                );

            case 'tours':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            🚶‍♂️ Unsere Stadtrundgänge
                        </h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            {images.tours.map((img, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <img 
                                        src={img}
                                        alt={`Stadtrundgang ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1578662996442 + index * 1000}?w=400&h=300&fit=crop`;
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
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Klassische Altstadt-Tour</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1,5 Stunden</p>
                                <p>Marktplatz, Thomaskirche, Nikolaikirche, Alte Börse, Mädler-Passage</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #DC2626, #991B1B)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕊️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Revolution & Geschichte</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2 Stunden</p>
                                <p>Nikolaikirche, Runde Ecke, Augustusplatz, Friedliche Revolution 1989</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #8B5A2B, #D2691E)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎵</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Bach & Musik-Tour</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2 Stunden</p>
                                <p>Thomaskirche, Bach-Museum, Mendelssohn-Haus, Gewandhaus</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏟️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Völkerschlacht-Tour</h4>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3 Stunden</p>
                                <p>Völkerschlachtdenkmal, Museum, Russische Gedächtniskirche</p>
                            </div>
                        </div>

                        <div style={{ 
                            background: '#f8fafc',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '1px solid #e5e7eb'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1.5rem', textAlign: 'center' }}>
                                📅 Spezielle Themen-Touren
                            </h4>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                                gap: '1.5rem'
                            }}>
                                <div>
                                    <h5>🌙 Nachtwächter-Tour</h5>
                                    <p>Abendliche Führung mit historischen Kostümen und Laternen</p>
                                </div>
                                <div>
                                    <h5>👨‍👩‍👧‍👦 Familien-Tour</h5>
                                    <p>Kinderfreundliche Führung mit Rätseln und Geschichten</p>
                                </div>
                                <div>
                                    <h5>🏭 Industriekultur-Tour</h5>
                                    <p>Leipziger Industriegeschichte und Baumwollspinnerei</p>
                                </div>
                                <div>
                                    <h5>🍺 Kneipen-Tour</h5>
                                    <p>Historische Gaststätten und Leipziger Bierkultur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'highlights':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            ⭐ Tour-Highlights & Sehenswürdigkeiten
                        </h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            {images.highlights.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Tour Highlights ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1580295830000 + index * 1500}?w=400&h=300&fit=crop`;
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
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🏛️</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Altes Rathaus</h4>
                                <p>Renaissance-Rathaus am Marktplatz, heute Stadtgeschichtliches Museum mit 800 Jahren Leipziger Geschichte.</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🛍️</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Mädler-Passage</h4>
                                <p>Elegante Einkaufspassage von 1914 mit dem weltberühmten Auerbachs Keller und Faust-Skulpturen.</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🎭</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Gewandhaus</h4>
                                <p>Konzerthaus von 1981, Heimat des weltberühmten Gewandhausorchesters mit 275-jähriger Tradition.</p>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>📚</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Alte Börse</h4>
                                <p>Barockbau von 1678, ältestes Barockgebäude Leipzigs mit Goethe-Denkmal davor.</p>
                            </div>
                        </div>

                        <div style={{ 
                            background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '2px solid #F59E0B'
                        }}>
                            <h4 style={{ color: '#92400E', marginBottom: '1.5rem', textAlign: 'center' }}>
                                🎯 Was Sie auf jeder Tour erwartet
                            </h4>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', 
                                gap: '1.5rem',
                                fontSize: '0.95rem'
                            }}>
                                <div>
                                    <ul style={{ color: '#92400E' }}>
                                        <li><strong>Professionelle Guides:</strong> Zertifizierte Stadtführer mit fundiertem Wissen</li>
                                        <li><strong>Kleine Gruppen:</strong> Maximal 20 Personen für persönliche Atmosphäre</li>
                                        <li><strong>Interaktiv:</strong> Fragen erwünscht, Diskussion und Austausch</li>
                                        <li><strong>Authentisch:</strong> Insider-Tipps und lokale Geschichten</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul style={{ color: '#92400E' }}>
                                        <li><strong>Mehrsprachig:</strong> Deutsch, Englisch, weitere auf Anfrage</li>
                                        <li><strong>Wetterfest:</strong> Touren bei (fast) jedem Wetter</li>
                                        <li><strong>Flexibel:</strong> Individuelle Wünsche nach Möglichkeit</li>
                                        <li><strong>Souvenir:</strong> Kleine Leipzig-Broschüre inklusive</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'guides':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            👥 Unsere Stadtführer & Service
                        </h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            {images.guides.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Stadtführer ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1581579398000 + index * 2000}?w=400&h=300&fit=crop`;
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
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Qualifizierte Guides</h4>
                                <p>Alle unsere Stadtführer sind zertifiziert und haben eine fundierte Ausbildung in Geschichte, Kunst oder Tourismus.</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Mehrsprachig</h4>
                                <p>Touren in Deutsch, Englisch, Französisch, Spanisch und weiteren Sprachen auf Anfrage verfügbar.</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Spezialisiert</h4>
                                <p>Jeder Guide hat eigene Fachbereiche: Musik, Geschichte, Architektur oder moderne Stadtentwicklung.</p>
                            </div>
                        </div>

                        <div style={{ 
                            background: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)',
                            padding: '2rem',
                            borderRadius: '15px',
                            marginBottom: '2rem'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1.5rem', textAlign: 'center' }}>
                                📋 Zusätzliche Services
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
                                    <h5 style={{ color: '#3B82F6', marginBottom: '1rem' }}>🎧 Audio-Technik</h5>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Bei größeren Gruppen stellen wir kostenlose Kopfhörer zur Verfügung, 
                                        damit Sie jedes Wort Ihres Guides verstehen.
                                    </p>
                                </div>

                                <div style={{
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '10px',
                                    textAlign: 'left'
                                }}>
                                    <h5 style={{ color: '#059669', marginBottom: '1rem' }}>♿ Barrierefrei</h5>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Spezielle barrierefreie Touren für Rollstuhlfahrer und Menschen 
                                        mit eingeschränkter Mobilität auf Anfrage.
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
                                📞 Buchung & Kontakt
                            </h4>
                            <div style={{ fontSize: '1rem', color: '#92400E' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>📧 Online:</strong> Einfache Buchung über unsere Website mit sofortiger Bestätigung
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>📱 WhatsApp:</strong> Schnelle Buchung und Fragen über WhatsApp möglich
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🏢 Gruppentouren:</strong> Individuelle Termine für Gruppen ab 8 Personen
                                </div>
                                <div>
                                    <strong>🎁 Gutscheine:</strong> Stadtrundgang-Gutscheine als perfektes Geschenk erhältlich
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'prices':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem' }}>💰 Preise & Buchung</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1.5rem' }}>🚶‍♂️ Öffentliche Touren</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Erwachsene</span>
                                        <strong>12,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Ermäßigt*</span>
                                        <strong>9,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Kinder (6-14 Jahre)</span>
                                        <strong>6,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Familienkarte (2+2)</span>
                                        <strong>30,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Kinder unter 6</span>
                                        <strong>Frei</strong>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#FEF3C7', padding: '2rem', borderRadius: '12px', border: '2px solid #F59E0B' }}>
                                <h4 style={{ color: '#D97706', marginBottom: '1.5rem' }}>👥 Gruppentouren</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Gruppe (bis 20 Pers.)</span>
                                        <strong>150,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Schulklassen</span>
                                        <strong>90,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Firmengruppen</span>
                                        <strong>200,00 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>VIP-Tour (bis 10 Pers.)</span>
                                        <strong>250,00 €</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ECFDF5', padding: '2rem', borderRadius: '12px', border: '2px solid #10B981', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1.5rem' }}>🎯 Themen-Touren (Aufpreis)</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>Bach & Musik-Tour:</strong></div>
                                    <div>+ 3,00 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Revolution-Tour:</strong></div>
                                    <div>+ 2,00 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Nachtwächter-Tour:</strong></div>
                                    <div>+ 5,00 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Völkerschlacht-Tour:</strong></div>
                                    <div>+ 8,00 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Kneipen-Tour:</strong></div>
                                    <div>+ 15,00 € pro Person</div>
                                </div>
                                <div>
                                    <div><strong>Familien-Tour:</strong></div>
                                    <div>Regulärer Preis</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#F3E8FF', padding: '2rem', borderRadius: '12px', border: '2px solid #8B5CF6', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#6D28D9', marginBottom: '1.5rem' }}>⭐ Spezial-Angebote</h4>
                            <div style={{ fontSize: '1rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🎫 Leipzig Card:</strong> 20% Rabatt auf alle öffentlichen Touren
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>👨‍👩‍👧‍👦 Familien-Paket:</strong> 3. und 4. Kind fahren kostenlos mit
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🎓 Studenten-Mittwoch:</strong> 50% Rabatt jeden Mittwoch für Studenten
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🎁 Gutschein-Bonus:</strong> Bei Gutschein-Kauf ab 50€ gibt's 10% Extra-Wert
                                </div>
                                <div>
                                    <strong>🔄 Mehrfach-Rabatt:</strong> 2. Tour 25% günstiger, 3. Tour 50% günstiger
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>*Ermäßigung gilt für:</strong> Schüler, Studenten, Senioren ab 65, Schwerbehinderte, Arbeitslose (mit Nachweis)</p>
                            <p><strong>Treffpunkt:</strong> Marktplatz vor dem Alten Rathaus (Denkmal)</p>
                            <p><strong>Buchung:</strong> Online, vor Ort oder telefonisch - Voranmeldung empfohlen</p>
                            <p><strong>Stornierung:</strong> Bis 24h vorher kostenfrei, bei Schlechtwetter Umbuchung möglich</p>
                            <p><strong>Hinweis:</strong> Comfortable Schuhe empfohlen, Touren finden bei jedem Wetter statt</p>
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
                    background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                    color: 'white'
                }}>
                    <h2 style={{ margin: 0, color: 'white' }}>🚶‍♂️ Geführte Stadtrundgänge Leipzig</h2>
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
                        { key: 'tours', label: '🚶‍♂️ Touren' },
                        { key: 'highlights', label: '⭐ Highlights' },
                        { key: 'guides', label: '👥 Guides' },
                        { key: 'prices', label: '💰 Preise' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as 'overview' | 'tours' | 'highlights' | 'guides' | 'prices')}
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
                        📍 Treffpunkt: Marktplatz Leipzig • 🚶‍♂️ Täglich um 10:00, 14:00, 16:00 Uhr
                    </div>
                    <Button onClick={onClose}>Schließen</Button>
                </div>
            </div>
        </div>
    );
};

export default StadtrundgangModal;