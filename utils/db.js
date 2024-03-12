import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB!');
        return client.db('nextjs-note-app');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export { connectToDatabase };