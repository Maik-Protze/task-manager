import { Router } from "express";
import { submitInquiry } from "../controllers/contactController";

const router = Router();

router.post("/", submitInquiry);

export default router;
