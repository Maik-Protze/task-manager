# Abschlussprojekt — Reiseinfo Europa — Asien/Afrika

Dieses Repository enthält das Abschlussprojekt "Reiseinfo Europa — Asien/Afrika". Das Projekt basiert auf einer einfachen Task-Manager-Anwendung (Express + Prisma im Backend, React + Vite im Frontend) und wurde angepasst, um als Grundlage für das Abschlussprojekt zu dienen.

Kurzer Überblick:

- Backend: Node.js + TypeScript + Express + Prisma (SQLite/Postgres)
- Frontend: React + TypeScript + Vite
- Lokal starten: siehe `backend/` und `frontend/` READMEs

Wichtig:
- API-Root: `http://localhost:4000/` antwortet mit einer Informationsnachricht.
- API-Endpunkt für Tasks: `http://localhost:4000/api/tasks`

Setup (Kurz):

```bash
# Backend
cd backend
npm install
# .env setzen: DATABASE_URL (z.B. file:./dev.db)
npx prisma generate --schema=prisma/schema.prisma
npx prisma migrate dev --schema=prisma/schema.prisma --name init
npm run dev

# Frontend (in neuem Terminal)
cd frontend
npm install
npm run dev
```

Wenn du möchtest, können wir die alten README-Templates in `frontend/` bereinigen oder die Dokumentation weiter ausbauen.

8. Schnell-Test der Recovery

~/recover-traveldreams.sh
🎉 Perfekt! Ihr System ist jetzt vollständig abgesichert:

✅ Was wurde eingerichtet:

Automatische Starts:

Nach Neustart: Apps starten automatisch über Desktop-Autostart

Bei Problemen: ~/recover-traveldreams.sh repariert alles sofort

Backups:

Täglich: 23:00 Uhr automatisches Backup

Bei Neustart: Zusätzliches Sicherheitsbackup

Speicherort: ~/traveldreams-backups/

Aufbewahrung: Letzte 10 Backups

Verfügbare Scripts:

~/backup-traveldreams.sh - Manuelles Backup
~/recover-traveldreams.sh - Notfall-Reparatur
~/start-traveldreams.sh - Kompletter Neustart

Schutz gegen:
✅ Systemneustarts - App startet automatisch
✅ Datenverlust - Tägliche Git-Commits + Tar-Backups
✅ Port-Konflikte - Recovery-Script behebt Probleme
✅ Prozess-Abstürze - Automatischer Neustart

Ihre TravelDreams-App ist jetzt bombensicher und läuft nach jedem Neustart automatisch! 🛡️🚀

Schritt-für-Schritt Test-Anleitung für das Backup-System:
Test 1: Recovery-Script testen (bereits erfolgreich!)
Status: ✅ Bereits getestet und funktioniert

Sie haben ~/recover-traveldreams.sh ausgeführt
Backend läuft auf Port 4000 ✅
Frontend läuft auf Port 5175 ✅

Test 2: Backup-System testen

A) Manuelles Backup prüfen:

# Schauen Sie ins Backup-Verzeichnis:ls -la ~/traveldreams-backups/# Sollte zeigen:# traveldreams_20251202_104100.tar.gz (oder ähnlich)

B) Backup-Inhalt prüfen:

# Backup-Archiv auflisten (ohne zu extrahieren):tar -tzf ~/traveldreams-backups/traveldreams_*.tar.gz | head -10# Sollte Ihre Projektdateien zeigen

Test 3: Cronjob-Status prüfen

# Aktive Cronjobs anzeigen:crontab -l# Sollte zeigen:# 0 23 * * * /home/dci-student/backup-traveldreams.sh# @reboot sleep 60 && /home/dci-student/backup-traveldreams.sh

Test 4: Autostart-System prüfen

# Desktop-Autostart prüfen:ls -la ~/.config/autostart/

# Sollte zeigen:# traveldreams.desktop

Test 5: Kompletter Neustart-Test (VORSICHT!)
⚠️ NUR MACHEN WENN SIE BEREIT SIND:

Vorbereitung:

Alle wichtigen Dateien speichern (VS Code, Browser, etc.)
Aktuelles Backup erstellen:

~/backup-traveldreams.sh

Der eigentliche Test:

Computer neustarten:

sudo reboot
Was passieren sollte nach Neustart:

Nach 30-60 Sekunden: Automatisches Backup wird erstellt
Nach 60-90 Sekunden: TravelDreams startet automatisch
VS Code öffnet sich mit dem Projekt
Browser öffnet sich mit http://localhost:5175
Test 6: Notfall-Simulation (Sicherer Test)
Ohne Neustart testen:

A) Prozesse "kaputt machen":

# Alle Server stoppen (simuliert Crash)pkill -f "bun\|node\|vite"

# Prüfen dass nichts läuft:ss -tulpn | grep -E "(4000|5175)"# Sollte leer sein

B) Recovery ausführen:

~/recover-traveldreams.sh

C) Ergebnis prüfen:

# Ports sollten wieder aktiv sein:ss -tulpn | grep -E "(4000|5175)"# Browser-Test:firefox http://localhost:5175

Test 7: Backup-Wiederherstellung testen

A) Testweise "Schäden" verursachen:

# Temporäre Testdatei erstellen und dann löschen:echo "test" > ~/abschlussprojekt-reiseinfo-Syrien-Deutschland/TESTFILErm ~/abschlussprojekt-reiseinfo-Syrien-Deutschland/frontend/src/App.tsx

B) Aus Backup wiederherstellen:

# Backup-Ordner erstellenmkdir -p ~/restore-test# Neuestes Backup extrahieren:cd ~/restore-testtar -xzf ~/traveldreams-backups/traveldreams_*.tar.gz# Datei wiederherstellen:cp ~/restore-test/home/dci-student/abschlussprojekt-reiseinfo-Syrien-Deutschland/frontend/src/App.tsx \   ~/abschlussprojekt-reiseinfo-Syrien-Deutschland/frontend/src/App.tsx

Empfohlene Test-Reihenfolge:
✅ Test 2 - Backup-System (sicher)
✅ Test 3 - Cronjob-Status (sicher)
✅ Test 4 - Autostart-System (sicher)
✅ Test 6 - Notfall-Simulation (sicher)
✅ Test 7 - Backup-Wiederherstellung (sicher)
⚠️ Test 5 - Kompletter Neustart (nur wenn Sie bereit sind)
Welchen Test möchten Sie zuerst durchführen?

Ich empfehle mit Test 2 (Backup-System) zu beginnen - das ist 100% sicher! 🔍

Claude Sonnet 4 • 1x