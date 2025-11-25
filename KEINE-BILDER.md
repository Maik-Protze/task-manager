# ⚠️ WICHTIG: Keine Bilder in "Reiseangebote"?

## Problem
Nach dem Klonen des Projekts von GitHub werden keine Bilder im Bereich "Reiseangebote" (Tours) angezeigt.

## Ursache
Die Bilder sind **nicht** als Dateien im Repository gespeichert, sondern als **URLs in der Datenbank**. 
Die Datenbank ist leer nach dem Klonen!

## ✅ Lösung (3 Schritte)

### 1. Backend-Abhängigkeiten installieren
```bash
cd backend
npm install
```

### 2. Datenbank-Schema erstellen
```bash
npm run prisma:generate
npm run prisma:migrate
```

### 3. **WICHTIG:** Seed-Daten laden
```bash
npm run prisma:seed
```

Dieser Befehl lädt:
- ✅ 12 Touren mit Bildern
- ✅ 13 Destinationen
- ✅ 4 Blog-Posts

## Überprüfung

Nach dem Seed solltest du sehen:
```
Starting seed for travel agency data...
Destinations created: 13
Tours created: 12
Blog posts created: 4
✅ Travel agency seed data completed successfully!
```

Jetzt sollten alle Bilder in "Reiseangebote" angezeigt werden! 🎉

## Weitere Hilfe

Siehe [SETUP.md](./SETUP.md) für die vollständige Anleitung.
