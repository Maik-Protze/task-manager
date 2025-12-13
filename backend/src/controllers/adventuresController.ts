import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all adventures with optional filters
export const getAllAdventures = async (req: Request, res: Response) => {
    try {
        const { difficulty, country } = req.query;

        const where: any = {};
        if (difficulty) where.difficulty = difficulty;
        if (country) where.country = country;

        const adventures = await prisma.adventure.findMany({
            where,
            orderBy: { name: "asc" },
        });

        res.json(adventures);
    } catch (error) {
        console.error("Error fetching adventures:", error);
        res.status(500).json({ error: "Failed to fetch adventures" });
    }
};

// GET adventure by ID
export const getAdventureById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const adventure = await prisma.adventure.findUnique({
            where: { id: parseInt(id) },
        });

        if (!adventure) {
            return res.status(404).json({ error: "Adventure not found" });
        }

        res.json(adventure);
    } catch (error) {
        console.error("Error fetching adventure:", error);
        res.status(500).json({ error: "Failed to fetch adventure" });
    }
};
