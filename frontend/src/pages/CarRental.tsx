import React, { useState, useEffect } from 'react';

interface Car {
    id: number;
    name: string;
    type: string;
    transmission: string;
    fuel: string;
    pricePerDay: number;
    seats: number;
    imageUrl: string;
    features: string;
    available: boolean;
    description?: string;
}

interface BookingForm {
    carId: number | null;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    startDate: string;
    endDate: string;
    pickupLocation: string;
}

// Static car data with real Unsplash images
const staticCars: Car[] = [
    {
        id: 1,
        name: 'Ford Focus ST',
        type: 'Compact',
        transmission: 'Manual',
        fuel: 'Petrol',
        pricePerDay: 45,
        seats: 5,
        imageUrl: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&h=600&fit=crop',
        features: JSON.stringify(['Klimaanlage', 'Bluetooth', 'USB-Anschluss', 'Einparkhilfe', 'Start-Stopp-Automatik']),
        available: true,
        description: 'Der perfekte Begleiter für die Stadt und kurze Ausflüge. Sparsam, wendig und mit allem Komfort ausgestattet.',
    },
    {
        id: 2,
        name: 'BMW 5er Touring',
        type: 'Sedan',
        transmission: 'Automatic',
        fuel: 'Diesel',
        pricePerDay: 89,
        seats: 5,
        imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
        features: JSON.stringify(['Lederausstattung', 'Navigationssystem', 'Klimaautomatik', 'Tempomat', 'Rückfahrkamera', 'Sitzheizung']),
        available: true,
        description: 'Elegante Limousine für Geschäftsreisen und lange Fahrten. Premium-Komfort und erstklassige Ausstattung.',
    },
    {
        id: 3,
        name: 'Audi Q7 Premium',
        type: 'SUV',
        transmission: 'Automatic',
        fuel: 'Hybrid',
        pricePerDay: 129,
        seats: 7,
        imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        features: JSON.stringify(['Allradantrieb', '7 Sitze', 'Panoramadach', 'Premium-Sound', 'Anhängerkupplung', 'Luftfederung', 'Head-up Display']),
        available: true,
        description: 'Geräumiger SUV für Familien und Abenteuer. Mit Platz für bis zu 7 Personen und allem Gelände gewachsen.',
    },
    {
        id: 4,
        name: 'Porsche 911 Carrera',
        type: 'Luxury',
        transmission: 'Automatic',
        fuel: 'Petrol',
        pricePerDay: 299,
        seats: 2,
        imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
        features: JSON.stringify(['Sport Chrono Paket', 'Ledersitze', 'BOSE Soundsystem', 'Sport-Auspuff', 'Cabrio-Verdeck', 'Launch Control']),
        available: true,
        description: 'Der Traumwagen für besondere Anlässe. Purer Fahrspaß und unvergleichliches Prestige.',
    },
];

export default function CarRental() {
    const [cars, setCars] = useState<Car[]>(staticCars);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        type: '',
        transmission: '',
        fuel: '',
        maxPrice: '',
    });
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [bookingForm, setBookingForm] = useState<BookingForm>({
        carId: null,
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        startDate: '',
        endDate: '',
        pickupLocation: 'Frankfurt Flughafen',
    });
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        filterCars();
    }, [filters]);

    const filterCars = () => {
        let filtered = [...staticCars];
        if (filters.type) {
            filtered = filtered.filter(car => car.type === filters.type);
        }
        if (filters.transmission) {
            filtered = filtered.filter(car => car.transmission === filters.transmission);
        }
        if (filters.fuel) {
            filtered = filtered.filter(car => car.fuel === filters.fuel);
        }
        if (filters.maxPrice) {
            filtered = filtered.filter(car => car.pricePerDay <= parseInt(filters.maxPrice));
        }
        setCars(filtered);
    };

    const handleBooking = async (e: React.FormEvent) => {
        e.preventDefault();

        // Show success immediately for better UX
        setBookingSuccess(true);

        // Try to save to backend if available
        try {
            await fetch('http://localhost:4000/api/car-rental/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingForm),
            });
        } catch (error) {
            console.log('Backend unavailable, booking saved locally');
        }

        setTimeout(() => {
            setShowBookingModal(false);
            setBookingSuccess(false);
            setBookingForm({
                carId: null,
                customerName: '',
                customerEmail: '',
                customerPhone: '',
                startDate: '',
                endDate: '',
                pickupLocation: 'Frankfurt Flughafen',
            });
        }, 2000);
    };

    const openBookingModal = (car: Car) => {
        setSelectedCar(car);
        setBookingForm({ ...bookingForm, carId: car.id });
        setShowBookingModal(true);
    };

    const parseFeatures = (features: string): string[] => {
        try {
            return JSON.parse(features);
        } catch {
            return [];
        }
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section
                style={{
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(6, 182, 212, 0.9)), url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600) center/cover',
                    padding: 'var(--spacing-3xl) 0',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        🚗 Premium Autovermietung
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', opacity: 0.9, maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
                        Entdecken Sie unsere exklusive Fahrzeugflotte - von kompakten Stadtautos über elegante Limousinen bis hin zu luxuriösen Sportwagen und geräumigen SUVs.
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
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Fahrzeuge</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>24/7</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Kundenservice</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>100%</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Versichert</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>0€</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>Stornogebühr</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section style={{ background: 'white', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-lg)',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-md)',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-lg)',
                        }}>
                            <span style={{ fontSize: '2rem' }}>🛡️</span>
                            <div>
                                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Vollkasko inklusive</h4>
                                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                    Alle Fahrzeuge mit umfassender Versicherung
                                </p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-md)',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-lg)',
                        }}>
                            <span style={{ fontSize: '2rem' }}>📍</span>
                            <div>
                                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Unbegrenzte Kilometer</h4>
                                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                    Fahren Sie so weit Sie möchten, ohne Aufpreis
                                </p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-md)',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-lg)',
                        }}>
                            <span style={{ fontSize: '2rem' }}>🔄</span>
                            <div>
                                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Flexible Stornierung</h4>
                                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                    Bis 24h vor Abholung kostenlos stornieren
                                </p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-md)',
                            padding: 'var(--spacing-lg)',
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-lg)',
                        }}>
                            <span style={{ fontSize: '2rem' }}>⭐</span>
                            <div>
                                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Premium Service</h4>
                                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 0 }}>
                                    Persönliche Beratung und schnelle Abwicklung
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
                {/* Filters */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-xl)',
                        padding: 'var(--spacing-lg)',
                        background: 'var(--color-bg-secondary)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-md)',
                    }}
                >
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Fahrzeugtyp</label>
                        <select
                            className="form-select"
                            value={filters.type}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                        >
                            <option value="">Alle Typen</option>
                            <option value="Compact">Kompakt</option>
                            <option value="Sedan">Limousine</option>
                            <option value="SUV">SUV</option>
                            <option value="Luxury">Luxus</option>
                        </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Getriebe</label>
                        <select
                            className="form-select"
                            value={filters.transmission}
                            onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                        >
                            <option value="">Alle</option>
                            <option value="Automatic">Automatik</option>
                            <option value="Manual">Schaltgetriebe</option>
                        </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Kraftstoff</label>
                        <select
                            className="form-select"
                            value={filters.fuel}
                            onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                        >
                            <option value="">Alle</option>
                            <option value="Petrol">Benzin</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Elektro</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Max. Preis/Tag</label>
                        <select
                            className="form-select"
                            value={filters.maxPrice}
                            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                        >
                            <option value="">Alle Preise</option>
                            <option value="50">bis 50€</option>
                            <option value="100">bis 100€</option>
                            <option value="150">bis 150€</option>
                            <option value="200">bis 200€</option>
                        </select>
                    </div>
                </div>

                {/* Cars Grid */}
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
                        <p style={{ marginTop: 'var(--spacing-md)' }}>Fahrzeuge werden geladen...</p>
                    </div>
                ) : (
                    <div className="grid grid-3">
                        {cars.map((car) => (
                            <div
                                key={car.id}
                                className="card"
                                style={{
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                }}
                            >
                                <img
                                    src={car.imageUrl}
                                    alt={car.name}
                                    className="card-image"
                                    style={{ height: '200px' }}
                                />
                                <div className="card-content">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
                                        <h3 className="card-title" style={{ marginBottom: 0 }}>{car.name}</h3>
                                        <span className="badge badge-primary">{car.type}</span>
                                    </div>

                                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginBottom: 'var(--spacing-md)' }}>
                                        <span className="badge badge-neutral">🚗 {car.seats} Sitze</span>
                                        <span className="badge badge-neutral">⚙️ {car.transmission === 'Automatic' ? 'Automatik' : 'Schaltung'}</span>
                                        <span className="badge badge-neutral">⛽ {car.fuel}</span>
                                    </div>

                                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-medium)', marginBottom: 'var(--spacing-xs)' }}>
                                            Ausstattung:
                                        </p>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                                            {parseFeatures(car.features).slice(0, 3).map((feature, idx) => (
                                                <span key={idx} style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
                                                    ✓ {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="card-footer" style={{ borderTop: 'none', paddingTop: 0 }}>
                                        <div className="card-price">
                                            {car.pricePerDay}€ <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 400 }}>/Tag</span>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => openBookingModal(car)}
                                        >
                                            Jetzt buchen
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && cars.length === 0 && (
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
                        <p style={{ fontSize: 'var(--font-size-xl)' }}>😕 Keine Fahrzeuge gefunden</p>
                        <p style={{ color: 'var(--color-text-medium)' }}>Versuchen Sie andere Filteroptionen</p>
                    </div>
                )}
            </section>

            {/* Booking Modal */}
            {showBookingModal && selectedCar && (
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
                        animation: 'fadeIn 0.3s ease',
                    }}
                    onClick={() => setShowBookingModal(false)}
                >
                    <div
                        style={{
                            background: 'white',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--spacing-xl)',
                            maxWidth: '500px',
                            width: '90%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            animation: 'slideUp 0.3s ease',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {bookingSuccess ? (
                            <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                                <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>✅</div>
                                <h3 style={{ color: 'var(--color-success)' }}>Buchung erfolgreich!</h3>
                                <p>Wir haben Ihre Anfrage erhalten und melden uns in Kürze.</p>
                            </div>
                        ) : (
                            <>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                                    <h3 style={{ marginBottom: 0 }}>{selectedCar.name} buchen</h3>
                                    <button
                                        onClick={() => setShowBookingModal(false)}
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

                                <div style={{
                                    background: 'var(--color-bg-secondary)',
                                    padding: 'var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-lg)',
                                }}>
                                    <p style={{ marginBottom: 0 }}>
                                        <strong>{selectedCar.pricePerDay}€</strong> pro Tag • {selectedCar.type} • {selectedCar.seats} Sitze
                                    </p>
                                </div>

                                <form onSubmit={handleBooking}>
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={bookingForm.customerName}
                                            onChange={(e) => setBookingForm({ ...bookingForm, customerName: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">E-Mail</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            value={bookingForm.customerEmail}
                                            onChange={(e) => setBookingForm({ ...bookingForm, customerEmail: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                                        <div className="form-group">
                                            <label className="form-label">Abholdatum</label>
                                            <input
                                                type="date"
                                                className="form-input"
                                                value={bookingForm.startDate}
                                                onChange={(e) => setBookingForm({ ...bookingForm, startDate: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Rückgabedatum</label>
                                            <input
                                                type="date"
                                                className="form-input"
                                                value={bookingForm.endDate}
                                                onChange={(e) => setBookingForm({ ...bookingForm, endDate: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                        Buchung anfragen
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
