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

// CREATE new blog post
export async function createPost(req: Request, res: Response) {
    try {
        const { title, content, excerpt, imageUrl, author, category } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }

        const post = await prisma.blogPost.create({
            data: {
                title,
                content,
                excerpt: excerpt || content.substring(0, 150) + '...',
                imageUrl,
                author: author || 'Reisebüro Team',
                category: category || 'Reisetipps',
            },
        });

        res.status(201).json(post);
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ error: 'Failed to create blog post' });
    }
}

// UPDATE blog post
export async function updatePost(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { title, content, excerpt, imageUrl, author, category } = req.body;

        const existingPost = await prisma.blogPost.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingPost) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        const post = await prisma.blogPost.update({
            where: { id: parseInt(id) },
            data: {
                title: title || existingPost.title,
                content: content || existingPost.content,
                excerpt: excerpt || existingPost.excerpt,
                imageUrl: imageUrl !== undefined ? imageUrl : existingPost.imageUrl,
                author: author || existingPost.author,
                category: category || existingPost.category,
            },
        });

        res.json(post);
    } catch (error) {
        console.error('Error updating blog post:', error);
        res.status(500).json({ error: 'Failed to update blog post' });
    }
}

// DELETE blog post
export async function deletePost(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const existingPost = await prisma.blogPost.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingPost) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        await prisma.blogPost.delete({
            where: { id: parseInt(id) },
        });

        res.json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog post:', error);
        res.status(500).json({ error: 'Failed to delete blog post' });
    }
}
