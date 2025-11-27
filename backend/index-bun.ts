import dotenv from "dotenv";
import app from "./src/app";

dotenv.config();
const PORT = process.env.PORT ?? 3000;

console.log(`🚀 Starte Backend mit Bun auf Port ${PORT}...`);

// Bun kann Express direkt verwenden! 
app.listen(PORT, () => {
  console.log(`✅ Backend läuft auf http://localhost:${PORT} mit Bun! 🎯`);
});