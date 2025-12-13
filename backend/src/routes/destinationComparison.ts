import { Router } from "express";
import {
    getAllDestinationData,
    compareDestinations,
    getDestinationByCountry,
} from "../controllers/destinationComparisonController";

const router = Router();

router.get("/data", getAllDestinationData);
router.get("/compare", compareDestinations);
router.get("/data/:country", getDestinationByCountry);

export default router;
