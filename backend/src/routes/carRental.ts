import { Router } from "express";
import {
    getAllCars,
    getCarById,
    createCarBooking,
    getAllBookings,
} from "../controllers/carRentalController";

const router = Router();

router.get("/", getAllCars);
router.get("/bookings", getAllBookings);
router.get("/:id", getCarById);
router.post("/book", createCarBooking);

export default router;
