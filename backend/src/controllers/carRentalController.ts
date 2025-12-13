import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all cars with optional filters
export const getAllCars = async (req: Request, res: Response) => {
    try {
        const { type, transmission, fuel, maxPrice, minPrice } = req.query;

        const where: any = { available: true };

        if (type) where.type = type;
        if (transmission) where.transmission = transmission;
        if (fuel) where.fuel = fuel;
        if (minPrice || maxPrice) {
            where.pricePerDay = {};
            if (minPrice) where.pricePerDay.gte = parseFloat(minPrice as string);
            if (maxPrice) where.pricePerDay.lte = parseFloat(maxPrice as string);
        }

        const cars = await prisma.carRental.findMany({
            where,
            orderBy: { pricePerDay: "asc" },
        });

        res.json(cars);
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ error: "Failed to fetch cars" });
    }
};

// GET single car by ID
export const getCarById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const car = await prisma.carRental.findUnique({
            where: { id: parseInt(id) },
        });

        if (!car) {
            return res.status(404).json({ error: "Car not found" });
        }

        res.json(car);
    } catch (error) {
        console.error("Error fetching car:", error);
        res.status(500).json({ error: "Failed to fetch car" });
    }
};

// POST create car booking
export const createCarBooking = async (req: Request, res: Response) => {
    try {
        const { carId, customerName, customerEmail, startDate, endDate } = req.body;

        // Calculate total price
        const car = await prisma.carRental.findUnique({
            where: { id: parseInt(carId) },
        });

        if (!car) {
            return res.status(404).json({ error: "Car not found" });
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        const totalPrice = days * car.pricePerDay;

        const booking = await prisma.carBooking.create({
            data: {
                carId: parseInt(carId),
                customerName,
                customerEmail,
                startDate: start,
                endDate: end,
                totalPrice,
            },
        });

        res.status(201).json(booking);
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ error: "Failed to create booking" });
    }
};

// GET all bookings
export const getAllBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await prisma.carBooking.findMany({
            include: {
                car: true,
            },
            orderBy: { createdAt: "desc" },
        });

        res.json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
};
