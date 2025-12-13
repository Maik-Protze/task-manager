import { Router } from "express";
import {
    getAllAdventures,
    getAdventureById,
} from "../controllers/adventuresController";

const router = Router();

router.get("/", getAllAdventures);
router.get("/:id", getAdventureById);

export default router;
