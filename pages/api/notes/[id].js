import clientPromise from "../../../lib/db";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("nextjs-blog-app");

    // DELETE METHOD
    if (req.method === 'DELETE') {
        const noteId = req.query.id;

        try {
            const result = await db.collection('notes').deleteOne({ _id: ObjectId(noteId) });
            if (result.deletedCount === 1) {
                res.status(200).json({ status: 200, message: 'Note deleted successfully' });
            } else {
                res.status(404).json({ error: 'Note not found' });
            }
        } catch (error) {
            console.error('Failed to delete note.', error)
            res.status(500).json({ error: 'Failed to delete note...' });
        }
    }
    else {
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}