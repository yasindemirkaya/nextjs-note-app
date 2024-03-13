import clientPromise from "../../../lib/db";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("nextjs-blog-app");

    // GET METHOD
    if (req.method === 'GET') {
        const notes = await db.collection("notes").find({}).toArray();
        res.json({ status: 200, data: notes });
    }
    // POST METHOD
    if (req.method === 'POST') {
        const { title, description } = req.body;

        if (!title || !description) {
            res.status(400).json({ error: 'Title and description are required.' });
            return;
        }

        try {
            const now = new Date();
            const result = await db.collection('notes').insertOne({
                title,
                description,
                createdAt: now
            });
            res.status(201).json({ status: 201, data: result.ops[0] })
        } catch (error) {
            console.error('Failed to insert note.', error)
            res.status(500).json({ error: 'Failed to insert note' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}