# 🆘 Problemlösung: Nichts wird im Browser angezeigt

## Mögliche Ursachen und Lösungen

### Problem 1: Frontend läuft nicht
**Symptom:** Weißer Bildschirm oder "Diese Seite kann nicht angezeigt werden"

**Lösung:**
```bash
cd frontend
npm install
npm run dev
```

Überprüfe, ob du diese Meldung siehst:
```
➜  Local:   http://localhost:5173/
```

Öffne dann: `http://localhost:5173`

---

### Problem 2: Backend läuft nicht
**Symptom:** Seite lädt, aber keine Touren/Daten sichtbar

**Lösung:**
```bash
cd backend
npm install
npm run dev
```

Überprüfe, ob du diese Meldung siehst:
```
Server running on port 3000
```

**Test Backend-API:**
Öffne im Browser: `http://localhost:3000/api/tours`

Du solltest JSON-Daten sehen.

---

### Problem 3: Datenbank ist leer
**Symptom:** Seite lädt, aber keine Touren angezeigt

**Lösung:**
```bash
cd backend

# Datenbank-Schema erstellen
npm run prisma:generate
npm run prisma:migrate

# Seed-Daten laden
npm run prisma:seed

# Backend neu starten
npm run dev
```

---

### Problem 4: .env Datei fehlt
**Symptom:** Backend startet nicht oder Datenbankfehler

**Lösung:**
Erstelle eine `.env` Datei im `backend` Ordner:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/travel_agency?schema=public"
PORT=3000
```

**Wichtig:** Ersetze `USER` und `PASSWORD` mit deinen PostgreSQL-Zugangsdaten!

---

### Problem 5: PostgreSQL läuft nicht
**Symptom:** Fehler "Can't reach database server"

**Lösung:**
```bash
# PostgreSQL starten (Ubuntu/Debian)
sudo service postgresql start

# Oder
sudo systemctl start postgresql
```

---

### Problem 6: Port ist bereits belegt
**Symptom:** "Port 5173 is already in use" oder "Port 3000 is already in use"

**Lösung:**
```bash
# Finde den Prozess
lsof -i :5173  # für Frontend
lsof -i :3000  # für Backend

# Beende den Prozess
kill -9 <PID>
```

---

## ✅ Vollständige Neuinstallation

Falls nichts funktioniert, kompletter Reset:

### 1. Alles stoppen
Drücke `Ctrl+C` in allen Terminals

### 2. Backend Setup
```bash
cd backend
rm -rf node_modules
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

### 3. Frontend Setup (neues Terminal)
```bash
cd frontend
rm -rf node_modules
npm install
npm run dev
```

### 4. Browser öffnen
```
http://localhost:5173
```

---

## 🔍 Debugging-Checkliste

- [ ] PostgreSQL läuft
- [ ] `.env` Datei existiert im `backend` Ordner
- [ ] `npm install` in `backend` ausgeführt
- [ ] `npm install` in `frontend` ausgeführt
- [ ] `npm run prisma:seed` ausgeführt
- [ ] Backend läuft auf Port 3000
- [ ] Frontend läuft auf Port 5173
- [ ] `http://localhost:3000/api/tours` zeigt JSON-Daten
- [ ] `http://localhost:5173` zeigt die Website

---

## 📞 Weitere Hilfe

**Sende uns diese Informationen:**

1. **Backend Terminal Output:**
   ```
   [Kopiere die letzten 20 Zeilen]
   ```

2. **Frontend Terminal Output:**
   ```
   [Kopiere die letzten 20 Zeilen]
   ```

3. **Browser Console (F12):**
   ```
   [Kopiere alle Fehlermeldungen]
   ```

4. **Was siehst du im Browser?**
   - [ ] Weißer Bildschirm
   - [ ] Fehlermeldung (welche?)
   - [ ] Seite lädt, aber keine Daten
   - [ ] Anderes: ___________

---

**Siehe auch:**
- [SETUP.md](./SETUP.md) - Vollständige Setup-Anleitung
- [FEHLERBEHEBUNG.md](./FEHLERBEHEBUNG.md) - Bilder/Touren fehlen
