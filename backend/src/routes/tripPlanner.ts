import { Router } from "express";
import {
    generateTripPlan,
    getTripPlanById,
    getAllTripPlans,
} from "../controllers/tripPlannerController";

const router = Router();

router.post("/generate", generateTripPlan);
router.get("/", getAllTripPlans);
router.get("/:id", getTripPlanById);

export default router;
