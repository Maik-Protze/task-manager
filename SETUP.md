# 🚀 Setup Guide - Travel Agency Project

## Voraussetzungen
- Node.js (v18 oder höher)
- PostgreSQL installiert und läuft
- Git

## 📦 Installation (für neue Teammitglieder)

### 1. Repository klonen
```bash
git clone <dein-repository-url>
cd abschlussprojekt-reiseinfo-Syrien-Deutschland
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Datenbank konfigurieren

Erstelle eine `.env` Datei im `backend` Ordner:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/travel_agency?schema=public"
PORT=3000
```

**Wichtig:** Ersetze `USER` und `PASSWORD` mit deinen PostgreSQL-Zugangsdaten!

### 4. Datenbank erstellen und migrieren

```bash
# Prisma Client generieren
npm run prisma:generate

# Datenbank-Schema erstellen
npm run prisma:migrate

# WICHTIG: Seed-Daten laden (inkl. Bilder!)
npm run prisma:seed
```

**⚠️ ACHTUNG:** Ohne den `prisma:seed` Befehl werden **KEINE BILDER** angezeigt, da die Touren und ihre Bild-URLs in der Datenbank gespeichert werden!

### 5. Backend starten

```bash
npm run dev
```

Der Backend-Server läuft jetzt auf `http://localhost:3000`

### 6. Frontend Setup (neues Terminal)

```bash
cd ../frontend
npm install
npm run dev
```

Das Frontend läuft jetzt auf `http://localhost:5173`

## 🔧 Häufige Probleme

### Problem: Keine Bilder in "Reiseangebote"
**Lösung:** Du hast vergessen, die Seed-Daten zu laden!
```bash
cd backend
npm run prisma:seed
```

### Problem: Datenbank-Verbindungsfehler
**Lösung:** 
1. Überprüfe, ob PostgreSQL läuft
2. Überprüfe die `DATABASE_URL` in der `.env` Datei
3. Stelle sicher, dass die Datenbank `travel_agency` existiert

### Problem: "Prisma Client not found"
**Lösung:**
```bash
cd backend
npm run prisma:generate
```

## 📊 Datenbank zurücksetzen (falls nötig)

Wenn du die Datenbank komplett neu aufsetzen möchtest:

```bash
cd backend
npm run prisma:migrate:reset
npm run prisma:seed
```

**Warnung:** Dies löscht ALLE Daten in der Datenbank!

## 🎯 Überprüfen, ob alles funktioniert

1. Backend: `http://localhost:3000/api/tours` sollte JSON mit Touren zurückgeben
2. Frontend: `http://localhost:5173` sollte die Website anzeigen
3. Bilder: Im "Reiseangebote" Bereich sollten alle Touren mit Bildern angezeigt werden

## 📝 Wichtige Befehle

### Backend
```bash
npm run dev              # Development Server starten
npm run prisma:studio    # Datenbank-GUI öffnen
npm run prisma:seed      # Seed-Daten laden
npm run prisma:migrate   # Neue Migration erstellen
```

### Frontend
```bash
npm run dev              # Development Server starten
npm run build            # Production Build erstellen
```

## 🆘 Support

Bei Problemen:
1. Überprüfe die Console-Logs (Backend & Frontend)
2. Stelle sicher, dass alle Dependencies installiert sind (`npm install`)
3. Stelle sicher, dass PostgreSQL läuft
4. Kontaktiere das Team

---

**Viel Erfolg! 🎉**
