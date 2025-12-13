import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Destination recommendations based on preferences
const destinationRecommendations: { [key: string]: any } = {
    Adventure: [
        { destination: "Chamonix", country: "Frankreich", dailyCost: 150, activities: ["Bergsteigen", "Skifahren", "Wandern"] },
        { destination: "Queenstown", country: "Neuseeland", dailyCost: 180, activities: ["Bungee", "Rafting", "Skifahren"] },
        { destination: "Interlaken", country: "Schweiz", dailyCost: 200, activities: ["Paragliding", "Canyoning", "Wandern"] },
    ],
    Relaxation: [
        { destination: "Bali", country: "Indonesien", dailyCost: 80, activities: ["Spa", "Yoga", "Strand"] },
        { destination: "Malediven", country: "Malediven", dailyCost: 300, activities: ["Resort", "Schnorcheln", "Wellness"] },
        { destination: "Santorini", country: "Griechenland", dailyCost: 120, activities: ["Strand", "Wein", "Sonnenuntergang"] },
    ],
    Culture: [
        { destination: "Kyoto", country: "Japan", dailyCost: 130, activities: ["Tempel", "Geisha", "Teezeremonie"] },
        { destination: "Rom", country: "Italien", dailyCost: 110, activities: ["Geschichte", "Kunst", "Kulinarik"] },
        { destination: "Marrakesch", country: "Marokko", dailyCost: 70, activities: ["Souks", "Paläste", "Küche"] },
    ],
    Beach: [
        { destination: "Phuket", country: "Thailand", dailyCost: 60, activities: ["Strand", "Inseln", "Tauchen"] },
        { destination: "Cancún", country: "Mexiko", dailyCost: 100, activities: ["Strand", "Ruinen", "Nachtleben"] },
        { destination: "Seychellen", country: "Seychellen", dailyCost: 250, activities: ["Strand", "Natur", "Luxus"] },
    ],
    City: [
        { destination: "Tokyo", country: "Japan", dailyCost: 140, activities: ["Shopping", "Kultur", "Essen"] },
        { destination: "New York", country: "USA", dailyCost: 200, activities: ["Broadway", "Museen", "Shopping"] },
        { destination: "Barcelona", country: "Spanien", dailyCost: 100, activities: ["Architektur", "Strand", "Tapas"] },
    ],
};

const weatherData: { [key: string]: { [key: string]: string } } = {
    "Frankreich": { "Dezember": "Kalt, 0-5°C, Schnee in den Alpen", "Juni": "Warm, 20-25°C, sonnig" },
    "Thailand": { "Dezember": "Warm, 25-30°C, trocken", "Juni": "Heiß, 30-35°C, Regenzeit" },
    "Japan": { "Dezember": "Kalt, 5-10°C, trocken", "März": "Mild, 10-15°C, Kirschblüte" },
};

const safetyLevels: { [key: string]: string } = {
    "Frankreich": "safe",
    "Schweiz": "safe",
    "Thailand": "safe",
    "Japan": "safe",
    "Italien": "safe",
    "Spanien": "safe",
    "Indonesien": "moderate",
    "Mexiko": "moderate",
    "Marokko": "moderate",
};

// POST generate trip plan
export const generateTripPlan = async (req: Request, res: Response) => {
    try {
        const { budget, duration, month, travelType, preferredCountry } = req.body;

        // Find matching destination
        const options = destinationRecommendations[travelType] || destinationRecommendations["City"];
        let selected = options[0];

        // If preferred country, try to match
        if (preferredCountry) {
            const match = options.find((o: any) => o.country.toLowerCase() === preferredCountry.toLowerCase());
            if (match) selected = match;
        }

        // Filter by budget
        const dailyBudget = budget / duration;
        const affordable = options.filter((o: any) => o.dailyCost <= dailyBudget);
        if (affordable.length > 0) {
            selected = affordable[Math.floor(Math.random() * affordable.length)];
        }

        const totalCost = selected.dailyCost * duration;

        // Generate itinerary
        const itinerary = [];
        for (let day = 1; day <= duration; day++) {
            itinerary.push({
                day,
                morning: `Frühstück und ${selected.activities[0]}`,
                afternoon: `${selected.activities[1] || selected.activities[0]} erkunden`,
                evening: `Abendessen und ${selected.activities[2] || "Freizeit"}`,
            });
        }

        const weather = weatherData[selected.country]?.[month] || "Angenehmes Wetter, 20-25°C";
        const safetyLevel = safetyLevels[selected.country] || "moderate";

        // Save to database
        const tripPlan = await prisma.tripPlan.create({
            data: {
                destination: selected.destination,
                country: selected.country,
                budget,
                duration,
                month,
                travelType,
                totalCost,
                itinerary: JSON.stringify(itinerary),
                activities: JSON.stringify(selected.activities),
                safetyLevel,
                weather: JSON.stringify({ description: weather }),
                imageUrl: `https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800`,
            },
        });

        res.status(201).json({
            ...tripPlan,
            itinerary: JSON.parse(tripPlan.itinerary),
            activities: JSON.parse(tripPlan.activities),
            weather: JSON.parse(tripPlan.weather),
        });
    } catch (error) {
        console.error("Error generating trip plan:", error);
        res.status(500).json({ error: "Failed to generate trip plan" });
    }
};

// GET trip plan by ID
export const getTripPlanById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tripPlan = await prisma.tripPlan.findUnique({
            where: { id: parseInt(id) },
        });

        if (!tripPlan) {
            return res.status(404).json({ error: "Trip plan not found" });
        }

        res.json({
            ...tripPlan,
            itinerary: JSON.parse(tripPlan.itinerary),
            activities: JSON.parse(tripPlan.activities),
            weather: JSON.parse(tripPlan.weather),
        });
    } catch (error) {
        console.error("Error fetching trip plan:", error);
        res.status(500).json({ error: "Failed to fetch trip plan" });
    }
};

// GET all trip plans
export const getAllTripPlans = async (_req: Request, res: Response) => {
    try {
        const tripPlans = await prisma.tripPlan.findMany({
            orderBy: { createdAt: "desc" },
        });

        res.json(tripPlans.map(plan => ({
            ...plan,
            itinerary: JSON.parse(plan.itinerary),
            activities: JSON.parse(plan.activities),
            weather: JSON.parse(plan.weather),
        })));
    } catch (error) {
        console.error("Error fetching trip plans:", error);
        res.status(500).json({ error: "Failed to fetch trip plans" });
    }
};
