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