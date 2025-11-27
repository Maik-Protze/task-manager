# ⚠️ WICHTIG: Keine Bilder und Touren sichtbar?

## Problem
Nach dem Klonen des Projekts von GitHub werden keine Touren im Bereich "Reiseangebote" angezeigt und die meisten Bilder fehlen.

## Ursache
Die Datenbank ist leer! Die Bilder und Touren sind als Daten in der Datenbank gespeichert, nicht als Dateien im Projekt.

---

## ✅ Lösung (3 einfache Schritte)

### Schritt 1: Backend stoppen
Falls das Backend läuft, stoppe es mit `Ctrl+C` im Terminal.

### Schritt 2: Seed-Daten laden
Führe diese Befehle aus:

```bash
cd backend

# Datenbank mit Touren, Bildern und Destinationen füllen
bun run prisma/seed-travel.ts
```

**Erwartete Ausgabe:**
```
Starting seed for travel agency data...
Destinations created: 13
Tours created: 12
Blog posts created: 4
✅ Travel agency seed data completed successfully!
```

### Schritt 3: Backend neu starten
```bash
bun run start
```

### Schritt 4: Browser aktualisieren
Drücke `F5` oder `Ctrl+R` im Browser.

---

## ✅ Jetzt solltest du sehen:

- ✅ **12 Touren** im Bereich "Reiseangebote"
- ✅ **Alle Bilder** werden angezeigt
- ✅ **13 Destinationen** im Bereich "Destinationen"
- ✅ **4 Blog-Beiträge** im Blog

---

## 🔍 Überprüfung

### Backend-API testen:
Öffne im Browser:
```
http://localhost:3000/api/tours
```

Du solltest JSON-Daten mit allen Touren sehen.

### Frontend testen:
Öffne im Browser:
```
http://localhost:5175
```

Gehe zu "Reiseangebote" - alle 12 Touren mit Bildern sollten sichtbar sein.

---

## 🆘 Falls es immer noch nicht funktioniert

### Kompletter Reset der Datenbank:

```bash
cd backend

# Datenbank komplett zurücksetzen
bun prisma migrate reset

# Seed-Daten neu laden
bun run prisma/seed-travel.ts

# Backend starten
bun run start
```

**Warnung:** Dies löscht ALLE Daten in der Datenbank!

---

## 📋 Vollständige Setup-Anleitung

Falls du das Projekt komplett neu aufsetzen möchtest, siehe [SETUP.md](./SETUP.md).

---

## 💡 Warum passiert das?

Die Bilder sind **keine Dateien** im Projekt, sondern **Unsplash-URLs** die in der Datenbank gespeichert sind:
- `https://images.unsplash.com/photo-...`

Ohne `npm run prisma:seed` ist die Datenbank leer → keine Touren → keine Bilder!

---

## ✅ Checkliste

- [ ] Backend gestoppt (`Ctrl+C`)
- [ ] `bun run prisma/seed-travel.ts` ausgeführt
- [ ] Erfolgsmeldung gesehen
- [ ] Backend neu gestartet (`bun run start`)
- [ ] Browser aktualisiert (`F5`)
- [ ] Touren und Bilder sind sichtbar

---

**Bei weiteren Problemen, kontaktiere das Team!** 🚀
