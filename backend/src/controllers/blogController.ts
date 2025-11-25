import { Request, Response } from "express";
import prisma from "../prisma/client";

export async function getAllPosts(req: Request, res: Response) {
    try {
        const { category } = req.query;

        const where = category && typeof category === 'string'
            ? { category }
            : {};

        const posts = await prisma.blogPost.findMany({
            where,
            orderBy: { publishedAt: 'desc' },
        });

        res.json(posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
}

export async function getPostById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const post = await prisma.blogPost.findUnique({
            where: { id: parseInt(id) },
        });

        if (!post) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        res.json(post);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({ error: 'Failed to fetch blog post' });
    }
}
