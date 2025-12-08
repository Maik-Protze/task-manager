import React, { useState } from 'react';
import Button from './Button';

interface SachsenthermeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SachsenthermeModal: React.FC<SachsenthermeModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'thermal' | 'wellness' | 'sauna' | 'prices'>('overview');

    if (!isOpen) return null;

    const images = {
        thermal: [
            '/germany/leipzig/sachsentherme-thermal.jpg',
            '/germany/leipzig/sachsentherme-pool.jpg'
        ],
        wellness: [
            '/germany/leipzig/sachsentherme-wellness.jpg',
            '/germany/leipzig/sachsentherme-spa.jpg'
        ],
        sauna: [
            '/germany/leipzig/sachsentherme-sauna.jpg'
        ]
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>Sachsentherme Leipzig</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr', gap: '2rem', alignItems: 'start' }}>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Die Sachsentherme ist Leipzigs premium Wellness-Oase mit Thermalbädern, 
                                    Saunalandschaft und modernen Spa-Angeboten. Entspannen Sie in wohltuenden 
                                    Thermalsolen und genießen Sie erstklassige Wellness-Behandlungen.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h4>📍 Standort</h4>
                                        <p>Schongauer Str. 9<br/>04328 Leipzig</p>
                                    </div>
                                    <div>
                                        <h4>🕒 Öffnungszeiten</h4>
                                        <p>Täglich 09:00 - 23:00 Uhr<br/>Sauna bis 24:00 Uhr</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>🎯 Highlights</h4>
                                    <ul style={{ columns: 2, columnGap: '2rem' }}>
                                        <li>Thermalsole-Becken (34°C)</li>
                                        <li>Finnische Sauna (90°C)</li>
                                        <li>Aroma-Dampfbad</li>
                                        <li>Wellness-Behandlungen</li>
                                        <li>Gastronomie & Bar</li>
                                        <li>Ruheräume & Terrassen</li>
                                    </ul>
                                </div>
                            </div>
                            <img 
                                src="/germany/leipzig/sachsentherme.jpg" 
                                alt="Sachsentherme Leipzig" 
                                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=400&fit=crop";
                                }}
                            />
                        </div>
                    </div>
                );

            case 'thermal':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>♨️ Thermalbad-Bereiche</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.thermal.map((img, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <img 
                                        src={img}
                                        alt={`Sachsentherme Thermal ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1571902943202 + index}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>♨️ Thermalsole-Becken</h4>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Entspannen Sie in unseren wohltuenden Thermalsole-Becken bei 34°C. 
                                Die heilsamen Mineralien wirken entspannend auf Haut und Gelenke und 
                                fördern die Durchblutung. Perfekt für Erholung und Regeneration.
                            </p>
                        </div>
                    </div>
                );

            case 'wellness':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>💆‍♀️ Wellness & Spa</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.wellness.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Sachsentherme Wellness ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1580285830000 + index * 1000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4>💆‍♀️ Massage-Angebote</h4>
                                <p>Klassische Massagen, Hot Stone und Aromatherapie für tiefe Entspannung.</p>
                            </div>
                            <div>
                                <h4>✨ Gesichtsbehandlungen</h4>
                                <p>Anti-Aging Facials und Hautpflege mit hochwertigen Produkten.</p>
                            </div>
                        </div>
                    </div>
                );

            case 'sauna':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '1rem' }}>🔥 Saunalandschaft</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {images.sauna.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img}
                                        alt={`Sachsentherme Sauna ${index + 1}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://images.unsplash.com/photo-${1581579198000 + index * 2000}?w=400&h=300&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>🔥 Sauna-Bereiche</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                                <div>
                                    <ul>
                                        <li><strong>Finnische Sauna:</strong> 90°C trockene Hitze</li>
                                        <li><strong>Aroma-Dampfbad:</strong> 65°C mit Duftessenzen</li>
                                        <li><strong>Salz-Kristall-Sauna:</strong> 75°C mit Himalaya-Salz</li>
                                        <li><strong>Kältegrotte:</strong> 12°C Abkühlung</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><strong>Aufgüsse:</strong> Täglich verschiedene Düfte</li>
                                        <li><strong>Ruheräume:</strong> Entspannung zwischen Saunagängen</li>
                                        <li><strong>Außenterrasse:</strong> Frischluft-Bereich</li>
                                        <li><strong>Eisgrotte:</strong> Extreme Abkühlung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'thermal':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            ♨️ Thermalbad-Erlebnis
                        </h3>
                        
                        {/* Thermalbecken Übersicht */}
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
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
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌊</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Thermalsole-Becken</h4>
                                <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>34°C</p>
                                <p>Heilende Salzwasser-Therapie für Haut und Gelenke</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #10996B, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏊‍♀️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Sport-Becken</h4>
                                <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>28°C</p>
                                <p>25m Bahnen für aktives Schwimmen und Aqua-Fitness</p>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💆‍♀️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Whirlpool</h4>
                                <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>36°C</p>
                                <p>Entspannende Massage-Düsen für ultimative Erholung</p>
                            </div>
                        </div>

                        {/* Gesundheitliche Vorteile */}
                        <div style={{ 
                            background: '#f8fafc',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '1px solid #e5e7eb'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.3rem' }}>
                                🌿 Gesundheitliche Vorteile der Thermalsole
                            </h4>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                                gap: '1.5rem'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🦴</div>
                                    <h5>Gelenkbeschwerden</h5>
                                    <p>Linderung bei Arthritis und Rheuma</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</div>
                                    <h5>Hautpflege</h5>
                                    <p>Natürliche Mineralien für gesunde Haut</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>😌</div>
                                    <h5>Entspannung</h5>
                                    <p>Stressabbau und mentale Erholung</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💪</div>
                                    <h5>Durchblutung</h5>
                                    <p>Verbesserte Blutzirkulation und Heilung</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'wellness':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            💆‍♀️ Wellness & Spa-Behandlungen
                        </h3>
                        
                        {/* Behandlungsarten */}
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                            gap: '1.5rem', 
                            marginBottom: '3rem' 
                        }}>
                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🌸</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Klassische Massage</h4>
                                <ul style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    <li>Ganzkörper-Massage (60 Min.) - 75€</li>
                                    <li>Rückenmassage (30 Min.) - 45€</li>
                                    <li>Hot Stone Massage (75 Min.) - 95€</li>
                                    <li>Aromatherapie-Massage (60 Min.) - 85€</li>
                                </ul>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>✨</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Gesichtsbehandlung</h4>
                                <ul style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    <li>Anti-Aging Facial (75 Min.) - 89€</li>
                                    <li>Hydra-Boost Behandlung (60 Min.) - 69€</li>
                                    <li>Peeling & Maske (45 Min.) - 55€</li>
                                    <li>Männer-Gesichtspflege (50 Min.) - 59€</li>
                                </ul>
                            </div>

                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                border: '2px solid #E5E7EB'
                            }}>
                                <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>🧘‍♀️</div>
                                <h4 style={{ color: '#374151', textAlign: 'center', marginBottom: '1rem' }}>Entspannung Plus</h4>
                                <ul style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    <li>Ayurveda-Behandlung (90 Min.) - 120€</li>
                                    <li>Meditation & Klangtherapie (45 Min.) - 39€</li>
                                    <li>Reflexzonen-Massage (45 Min.) - 55€</li>
                                    <li>Paarbehandlung (60 Min.) - 140€</li>
                                </ul>
                            </div>
                        </div>

                        {/* Wellness-Pakete */}
                        <div style={{ 
                            background: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)',
                            padding: '2rem',
                            borderRadius: '15px',
                            marginBottom: '2rem'
                        }}>
                            <h4 style={{ color: '#374151', marginBottom: '1.5rem', textAlign: 'center' }}>
                                🎁 Premium Wellness-Pakete
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
                                    <h5 style={{ color: '#0EA5E9', marginBottom: '1rem' }}>💎 VIP Wellness Day</h5>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Ganzkörper-Massage + Gesichtsbehandlung + 
                                        Thermalbad + Sauna + Lunch
                                    </p>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0EA5E9' }}>
                                        189€ <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: '#999' }}>230€</span>
                                    </div>
                                </div>

                                <div style={{
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '10px',
                                    textAlign: 'center'
                                }}>
                                    <h5 style={{ color: '#10996B', marginBottom: '1rem' }}>💕 Romantik Paket</h5>
                                    <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Paarbehandlung + Private Sauna + 
                                        Champagner + 3-Gänge Dinner
                                    </p>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10996B' }}>
                                        299€ <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: '#999' }}>350€</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'sauna':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem', textAlign: 'center' }}>
                            🔥 Saunalandschaft
                        </h3>
                        
                        {/* Sauna-Bereiche */}
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
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔥</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Finnische Sauna</h4>
                                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>90°C</p>
                                <p>Traditionelle trockene Hitze für intensive Entspannung</p>
                                <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.9 }}>
                                    Aufguss alle 30 Min.
                                </div>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Aroma-Dampfbad</h4>
                                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>65°C</p>
                                <p>Sanfte Wärme mit wechselnden Düften und 100% Luftfeuchtigkeit</p>
                                <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.9 }}>
                                    Eukalyptus, Lavendel, Minze
                                </div>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💎</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Salz-Kristall-Sauna</h4>
                                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>75°C</p>
                                <p>Heilsalze aus dem Himalaya für Atemwege und Haut</p>
                                <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.9 }}>
                                    Besonders für Allergiker geeignet
                                </div>
                            </div>

                            <div style={{
                                background: 'linear-gradient(135deg, #0891B2, #0E7490)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❄️</div>
                                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Kältegrotte</h4>
                                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>12°C</p>
                                <p>Perfekte Abkühlung zwischen den Saunagängen</p>
                                <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.9 }}>
                                    Mit echtem Eis
                                </div>
                            </div>
                        </div>

                        {/* Sauna-Etiquette */}
                        <div style={{ 
                            background: '#FEF3C7',
                            padding: '2rem',
                            borderRadius: '15px',
                            border: '2px solid #F59E0B'
                        }}>
                            <h4 style={{ color: '#92400E', marginBottom: '1.5rem', textAlign: 'center' }}>
                                📋 Sauna-Etiquette & Tipps
                            </h4>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', 
                                gap: '1.5rem',
                                fontSize: '0.95rem'
                            }}>
                                <div>
                                    <h5 style={{ color: '#92400E', marginBottom: '0.5rem' }}>✅ Do's:</h5>
                                    <ul style={{ color: '#92400E' }}>
                                        <li>Handtuch als Unterlage verwenden</li>
                                        <li>Vor dem Betreten duschen</li>
                                        <li>Ruhe respektieren</li>
                                        <li>Nach dem Saunagang kalt duschen</li>
                                        <li>Ausreichend trinken</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style={{ color: '#92400E', marginBottom: '0.5rem' }}>❌ Don'ts:</h5>
                                    <ul style={{ color: '#92400E' }}>
                                        <li>Schwitzen auf direktem Holzkontakt</li>
                                        <li>Laute Gespräche führen</li>
                                        <li>Handy oder Kamera benutzen</li>
                                        <li>Bei Krankheit die Sauna besuchen</li>
                                        <li>Parfum oder Öle mitbringen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'prices':
                return (
                    <div>
                        <h3 style={{ color: '#0ea5e9', marginBottom: '2rem' }}>💰 Eintrittspreise & Angebote</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                                <h4 style={{ color: '#0ea5e9', marginBottom: '1.5rem' }}>🏊‍♀️ Thermalbad</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>2 Stunden</span>
                                        <strong>18,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>4 Stunden</span>
                                        <strong>22,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Tageskarte</span>
                                        <strong>26,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Ermäßigt*</span>
                                        <strong>19,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Kinder (4-14 Jahre)</span>
                                        <strong>12,50 €</strong>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#FEF3C7', padding: '2rem', borderRadius: '12px', border: '2px solid #F59E0B' }}>
                                <h4 style={{ color: '#D97706', marginBottom: '1.5rem' }}>🔥 Sauna + Thermalbad</h4>
                                <div style={{ fontSize: '1.1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>4 Stunden Kombi</span>
                                        <strong>29,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Tageskarte Kombi</span>
                                        <strong>34,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Abendkarte (ab 17:00)</span>
                                        <strong>24,50 €</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Ermäßigt* Kombi</span>
                                        <strong>26,50 €</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#ECFDF5', padding: '2rem', borderRadius: '12px', border: '2px solid #10B981', marginBottom: '2rem' }}>
                            <h4 style={{ color: '#047857', marginBottom: '1.5rem' }}>🎟️ Mehrfachkarten & Abos</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr', gap: '1rem', fontSize: '1.1rem' }}>
                                <div>
                                    <div><strong>10er Karte Thermal:</strong></div>
                                    <div>220€ (statt 265€)</div>
                                </div>
                                <div>
                                    <div><strong>10er Karte Kombi:</strong></div>
                                    <div>310€ (statt 345€)</div>
                                </div>
                                <div>
                                    <div><strong>Monatsabo:</strong></div>
                                    <div>89€ (unbegrenzt)</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#F3E8FF', padding: '2rem', borderRadius: '12px', border: '2px solid #8B5CF6', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#6D28D9', marginBottom: '1.5rem' }}>⭐ Spezialangebote</h4>
                            <div style={{ fontSize: '1rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>🌅 Early Bird (vor 10:00 Uhr):</strong> 20% Rabatt auf alle Tageskarten
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>💕 Paar-Special (Di + Mi):</strong> 2 Personen zahlen nur 45€ statt 53€
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>👥 Familien-Tag (Sonntag):</strong> Kinder bis 16 Jahre frei (max. 2 pro Erwachsener)
                                </div>
                                <div>
                                    <strong>🎂 Geburtstags-Special:</strong> Freier Eintritt am Geburtstag (Ausweis erforderlich)
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                            <p><strong>*Ermäßigung gilt für:</strong> Studenten, Senioren ab 65, Schwerbehinderte, Arbeitslose (mit Nachweis)</p>
                            <p><strong>Öffnungszeiten:</strong> Täglich 09:00-23:00 Uhr | Sauna bis 24:00 Uhr</p>
                            <p><strong>Hinweis:</strong> Handtücher können für 3€ ausgeliehen werden. Bademantel-Verleih: 5€</p>
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
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                    color: 'white'
                }}>
                    <h2 style={{ margin: 0, color: 'white' }}>♨️ Sachsentherme Leipzig</h2>
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
                        { key: 'thermal', label: '♨️ Thermalbad' },
                        { key: 'wellness', label: '💆‍♀️ Wellness' },
                        { key: 'sauna', label: '🔥 Sauna' },
                        { key: 'prices', label: '💰 Preise' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as 'overview' | 'thermal' | 'wellness' | 'sauna' | 'prices')}
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
                        📍 Schongauer Str. 9, 04328 Leipzig • ♨️ Täglich 09:00-23:00 Uhr
                    </div>
                    <Button onClick={onClose}>Schließen</Button>
                </div>
            </div>
        </div>
    );
};

export default SachsenthermeModal;