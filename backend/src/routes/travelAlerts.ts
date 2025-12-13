import { Router } from "express";
import {
    getAllAlerts,
    getAlertByCountry,
} from "../controllers/travelAlertsController";

const router = Router();

router.get("/", getAllAlerts);
router.get("/:country", getAlertByCountry);

export default router;
