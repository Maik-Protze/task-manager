/// <reference types="@types/bun" />
import app from "./src/app";

const PORT = process.env.PORT ?? 3000;

console.log(`🚀 Starte Server mit Bun auf Port ${PORT}...`);

// Bun HTTP Server mit korrekten TypeScript Typen
const server = Bun.serve({
  port: PORT,
  fetch: async (request: Request): Promise<Response> => {
    // Express App als Handler verwenden
    return new Promise((resolve) => {
      // Vereinfachter Fallback für unbekannte Routen
      const url = new URL(request.url);
      
      if (url.pathname === '/') {
        resolve(new Response('Abschlussprojekt-Reiseinfo-Syrien-Deutschland API läuft mit Bun! 🚀'));
      } else {
        resolve(new Response('Route nicht gefunden', { status: 404 }));
      }
    });
  }
});

console.log(`✅ Backend läuft auf http://localhost:${PORT} mit Bun! 🎯`);