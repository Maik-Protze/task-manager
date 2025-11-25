import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getTours = async (req: Request, res: Response) => {
  try {
    const { destinationId, category, featured, sort } = req.query;

    const where: any = {};
    if (destinationId) where.destinationId = Number(destinationId);
    if (category && typeof category === 'string') where.category = category;
    if (featured === 'true') where.featured = true;

    let orderBy: any = { createdAt: 'desc' };
    if (sort === 'price_asc') orderBy = { price: 'asc' };
    if (sort === 'price_desc') orderBy = { price: 'desc' };

    const tours = await prisma.tour.findMany({
      where,
      orderBy,
      include: { destination: true },
    });

    res.json(tours);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch tours" });
  }
};

export const getTourById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const tour = await prisma.tour.findUnique({
      where: { id },
      include: {
        bookings: true,
        destination: true
      }
    });
    if (!tour) return res.status(404).json({ error: "Tour not found" });
    res.json(tour);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch tour" });
  }
};
