import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks";
import destinationsRouter from "./routes/destinations";
import toursRouter from "./routes/tours";
import bookingsRouter from "./routes/bookings";
import blogRouter from "./routes/blog";
import contactRouter from "./routes/contact";

const app = express();

app.use(cors());
app.use(express.json());

// API-Routen
app.use("/api/tasks", tasksRouter);
app.use("/api/destinations", destinationsRouter);
app.use("/api/tours", toursRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/blog", blogRouter);
app.use("/api/contact", contactRouter);

// Root-Route
app.get("/", (_req, res) => {
  res.send(
    "Abschlussprojekt-Reiseinfo-Europa-Asien-Afrika API läuft. Verwenden Sie /api/destinations, /api/tours, /api/bookings"
  );
});

// Error-Handler (muss als letzte Middleware registriert sein)
app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;