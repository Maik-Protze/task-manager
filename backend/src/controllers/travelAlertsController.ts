import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all travel alerts
export const getAllAlerts = async (req: Request, res: Response) => {
    try {
        const { safetyLevel } = req.query;

        const where: any = {};
        if (safetyLevel) where.safetyLevel = safetyLevel;

        const alerts = await prisma.travelAlert.findMany({
            where,
            orderBy: { riskScore: "asc" },
        });

        res.json(alerts);
    } catch (error) {
        console.error("Error fetching alerts:", error);
        res.status(500).json({ error: "Failed to fetch alerts" });
    }
};

// GET alert by country
export const getAlertByCountry = async (req: Request, res: Response) => {
    try {
        const { country } = req.params;
        const alert = await prisma.travelAlert.findUnique({
            where: { country },
        });

        if (!alert) {
            return res.status(404).json({ error: "Alert not found for this country" });
        }

        res.json(alert);
    } catch (error) {
        console.error("Error fetching alert:", error);
        res.status(500).json({ error: "Failed to fetch alert" });
    }
};
