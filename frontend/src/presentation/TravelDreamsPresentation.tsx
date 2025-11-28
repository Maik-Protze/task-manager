import React, { useState } from 'react';

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

const TravelDreamsPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "TravelDreams",
      content: (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#0ea5e9', marginBottom: '2rem' }}>
            🌍 TravelDreams
          </h1>
          <h2 style={{ fontSize: '2rem', color: '#64748b' }}>
            Premium Reiseagentur Website
          </h2>
          <p style={{ fontSize: '1.5rem', marginTop: '2rem' }}>
            Entwickelt mit React, TypeScript & Node.js
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Projekt Übersicht",
      content: (
        <div>
          <h2 style={{ color: '#0ea5e9', marginBottom: '2rem' }}>📋 Projekt Features</h2>
          <ul style={{ fontSize: '1.5rem', lineHeight: '2' }}>
            <li>✅ <strong>12 Premium Touren</strong> - Europa-Asien/Afrika</li>
            <li>✅ <strong>8 Destinationen</strong> - Berlin - Dubai</li>
            <li>✅ <strong>Vollständig auf Deutsch</strong> - Lokalisierung 100%</li>
            <li>✅ <strong>Moderne Technologien</strong> - React + TypeScript</li>
            <li>✅ <strong>SQLite Datenbank</strong> - Performante Datenspeicherung</li>
            <li>✅ <strong>Bun Runtime</strong> - Optimierte Performance</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "Technische Architektur",
      content: (
        <div>
          <h2 style={{ color: '#0ea5e9', marginBottom: '2rem' }}>🏗️ Tech Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', fontSize: '1.2rem' }}>
            <div>
              <h3 style={{ color: '#059669' }}>Frontend</h3>
              <ul>
                <li>⚛️ React 18</li>
                <li>🔷 TypeScript</li>
                <li>⚡ Vite (Port 5175 oder 5176)</li>
                <li>🎨 CSS Custom Properties</li>
                <li>📱 Responsive Design</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#7c3aed' }}>Backend</h3>
              <ul>
                <li>🟢 Node.js + Express</li>
                <li>🚀 Bun Runtime</li>
                <li>🗄️ Prisma ORM</li>
                <li>💾 SQLite Database</li>
                <li>🔗 REST API (Port 3000)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Live Demo",
      content: (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#0ea5e9', marginBottom: '2rem' }}>🎬 Live Demonstration</h2>
          <div style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            <p><strong>Frontend:</strong> http://localhost:5175 oder 5176</p>
            <p><strong>Backend API:</strong> http://localhost:3000/api/tours</p>
          </div>
          <div style={{ background: '#f1f5f9', padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>🔄 Server starten:</h3>
            <code style={{ background: '#1e293b', color: '#e2e8f0', padding: '1rem', borderRadius: '0.5rem', display: 'block' }}>
              cd backend && bun run dev<br/>
              cd frontend && bun run dev
            </code>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Danke",
      content: (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#0ea5e9', marginBottom: '2rem' }}>
            🙏 Vielen Dank!
          </h1>
          <h2 style={{ fontSize: '2rem', color: '#64748b', marginBottom: '2rem' }}>
            Fragen & Diskussion
          </h2>
          <div style={{ fontSize: '1.5rem' }}>
            <p>🌍 TravelDreams - Ihre Traumreise beginnt hier</p>
            <p style={{ marginTop: '2rem' }}>
              <strong>GitHub:</strong> Abdullah Jlilati Maik-Protze/TravelDreams - Ihre Traumreise beginnt hier 
            </p>
          </div>
        </div>
      )
    }
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

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Slide Container */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '3rem',
          maxWidth: '900px',
          width: '100%',
          minHeight: '500px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation */}
      <div style={{ 
        padding: '2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'rgba(0,0,0,0.1)'
      }}>
        <button 
          onClick={prevSlide}
          style={{
            background: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            cursor: 'pointer',
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          ← Zurück
        </button>

        {/* Slide Indicators */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          style={{
            background: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            cursor: 'pointer',
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          Weiter →
        </button>
      </div>

      {/* Slide Counter */}
      <div style={{ 
        position: 'absolute', 
        top: '2rem', 
        right: '2rem', 
        background: 'rgba(0,0,0,0.7)', 
        color: 'white', 
        padding: '0.5rem 1rem', 
        borderRadius: '1rem',
        fontSize: '1rem'
      }}>
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default TravelDreamsPresentation;