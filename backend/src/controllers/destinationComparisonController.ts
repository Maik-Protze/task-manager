import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all destination data
export const getAllDestinationData = async (_req: Request, res: Response) => {
    try {
        const destinations = await prisma.destinationData.findMany({
            orderBy: { country: "asc" },
        });

        res.json(destinations.map(d => ({
            ...d,
            bestMonths: JSON.parse(d.bestMonths),
            activities: JSON.parse(d.activities),
            transport: JSON.parse(d.transport),
            pros: JSON.parse(d.pros),
            cons: JSON.parse(d.cons),
        })));
    } catch (error) {
        console.error("Error fetching destinations:", error);
        res.status(500).json({ error: "Failed to fetch destinations" });
    }
};

// GET compare two countries
export const compareDestinations = async (req: Request, res: Response) => {
    try {
        const { c1, c2 } = req.query;

        if (!c1 || !c2) {
            return res.status(400).json({ error: "Please provide two countries (c1 and c2)" });
        }

        const destination1 = await prisma.destinationData.findUnique({
            where: { country: c1 as string },
        });

        const destination2 = await prisma.destinationData.findUnique({
            where: { country: c2 as string },
        });

        if (!destination1 || !destination2) {
            return res.status(404).json({ error: "One or both countries not found" });
        }

        const parseJson = (d: any) => ({
            ...d,
            bestMonths: JSON.parse(d.bestMonths),
            activities: JSON.parse(d.activities),
            transport: JSON.parse(d.transport),
            pros: JSON.parse(d.pros),
            cons: JSON.parse(d.cons),
        });

        res.json({
            country1: parseJson(destination1),
            country2: parseJson(destination2),
            comparison: {
                costDifference: destination1.avgDailyCost - destination2.avgDailyCost,
                costWinner: destination1.avgDailyCost < destination2.avgDailyCost ? c1 : c2,
                safetyComparison: {
                    [c1 as string]: destination1.safetyLevel,
                    [c2 as string]: destination2.safetyLevel,
                },
                touristLevelComparison: {
                    [c1 as string]: destination1.touristLevel,
                    [c2 as string]: destination2.touristLevel,
                },
            },
        });
    } catch (error) {
        console.error("Error comparing destinations:", error);
        res.status(500).json({ error: "Failed to compare destinations" });
    }
};

// GET destination by country
export const getDestinationByCountry = async (req: Request, res: Response) => {
    try {
        const { country } = req.params;
        const destination = await prisma.destinationData.findUnique({
            where: { country },
        });

        if (!destination) {
            return res.status(404).json({ error: "Destination not found" });
        }

        res.json({
            ...destination,
            bestMonths: JSON.parse(destination.bestMonths),
            activities: JSON.parse(destination.activities),
            transport: JSON.parse(destination.transport),
            pros: JSON.parse(destination.pros),
            cons: JSON.parse(destination.cons),
        });
    } catch (error) {
        console.error("Error fetching destination:", error);
        res.status(500).json({ error: "Failed to fetch destination" });
    }
};
