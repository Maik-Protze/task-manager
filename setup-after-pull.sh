#!/bin/bash
# Setup-Script nach Git Pull

echo "🔄 Setup nach Git Pull wird ausgeführt..."

# 1. Backend Setup
echo "🏗️ Backend Setup..."
cd backend
bun install
bun run prisma:seed

# 2. Frontend Setup  
echo "🎨 Frontend Setup..."
cd ../frontend

# Stelle sicher, dass .env korrekt ist
if [ ! -f .env ] || ! grep -q "VITE_API_BASE_URL=http://localhost:3000" .env; then
    echo "VITE_API_BASE_URL=http://localhost:3000" > .env
    echo "✅ .env Datei korrigiert"
fi

bun install

echo "🚀 Setup abgeschlossen!"
echo ""
echo "Starte jetzt die Server:"
echo "1. Backend: cd backend && bun run dev"
echo "2. Frontend: cd frontend && bun run dev"
echo "3. Öffne: http://localhost:5175/tours"