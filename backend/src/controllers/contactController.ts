import { Request, Response } from "express";
import prisma from "../prisma/client";

export async function submitInquiry(req: Request, res: Response) {
    try {
        const { name, email, message, destination, travelDate, persons } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Name, email, and message are required'
            });
        }

        const inquiry = await prisma.contactInquiry.create({
            data: {
                name,
                email,
                message,
                destination,
                travelDate,
                persons: persons ? parseInt(persons) : null,
            },
        });

        res.status(201).json({
            success: true,
            message: 'Inquiry submitted successfully',
            inquiry
        });
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        res.status(500).json({ error: 'Failed to submit inquiry' });
    }
}
