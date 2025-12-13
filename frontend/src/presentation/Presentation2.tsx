import React, { useState, useEffect } from 'react';

const Presentation2: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/images/presentation2/slide-1.png',
        '/images/presentation2/slide-2.png',
        '/images/presentation2/slide-3.png',
        '/images/presentation2/slide-4.png',
        '/images/presentation2/slide-5.png',
        '/images/presentation2/slide-6.png',
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0f172a', // Dark Slate 900
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            overflow: 'hidden' // Prevent scrolling
        }}>
            {/* Slide Container */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem', // Reduced padding for more space
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    {/* Glow effect behind image */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%', // Larger glow
                        height: '90%',
                        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }} />

                    <img
                        key={currentSlide} // Add key to trigger animation on change
                        src={slides[currentSlide]}
                        alt={`Slide ${currentSlide + 1}`}
                        className="slide-image"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '85vh', // Increased from 75vh
                            objectFit: 'contain',
                            borderRadius: '1rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', // Deeper shadow
                            zIndex: 1,
                            animation: 'fadeIn 0.5s ease-in-out' // Simple fade animation
                        }}
                    />
                </div>
            </div>

            {/* Navigation Bar */}
            <div style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 10
            }}>
                <button
                    onClick={prevSlide}
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '2rem',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '500',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'translateX(-5px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateX(0)';
                    }}
                >
                    <span>←</span> Zurück
                </button>

                {/* Slide Indicators - Dynamic & Better */}
                <div style={{
                    display: 'flex',
                    gap: '0.8rem',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem'
                }}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: index === currentSlide ? '2.5rem' : '0.75rem', // Dynamic width
                                height: '0.75rem',
                                borderRadius: '1rem',
                                border: 'none',
                                background: index === currentSlide ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Slide Counter (Moved here for better layout) */}
                    <div style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginRight: '1rem'
                    }}>
                        {currentSlide + 1} / {slides.length}
                    </div>

                    <button
                        onClick={nextSlide}
                        style={{
                            background: '#38bdf8', // Sky blue primary
                            color: '#0f172a', // Dark text
                            border: 'none',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '2rem',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '600',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateX(5px)';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateX(0)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.3)';
                        }}
                    >
                        Weiter <span>→</span>
                    </button>
                </div>
            </div>

            {/* Animation Styles */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
};

export default Presentation2;
