import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks";
import destinationsRouter from "./routes/destinations";
import toursRouter from "./routes/tours";
import bookingsRouter from "./routes/bookings";
import blogRouter from "./routes/blog";
import contactRouter from "./routes/contact";
// NEW ROUTERS
import carRentalRouter from "./routes/carRental";
import travelAlertsRouter from "./routes/travelAlerts";
import adventuresRouter from "./routes/adventures";
import tripPlannerRouter from "./routes/tripPlanner";
import destinationComparisonRouter from "./routes/destinationComparison";

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

// NEW API ROUTES
app.use("/api/car-rental", carRentalRouter);
app.use("/api/travel-alerts", travelAlertsRouter);
app.use("/api/adventures", adventuresRouter);
app.use("/api/trip-planner", tripPlannerRouter);
app.use("/api/destination-comparison", destinationComparisonRouter);

// Root-Route
app.get("/", (_req, res) => {
  res.send(
    "TravelDreams API läuft. Verwenden Sie /api/destinations, /api/tours, /api/bookings, /api/car-rental, /api/travel-alerts, /api/adventures, /api/trip-planner, /api/destination-comparison"
  );
});

// Error-Handler (muss als letzte Middleware registriert sein)
app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;