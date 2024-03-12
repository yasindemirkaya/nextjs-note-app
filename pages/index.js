import NoteGrid from '../components/notes/note-grid'
import { connectToDatabase } from '@/utils/db'

function Home(props) {
  return (
    <div className='container'>
      <h1 className='my-2'>My Notes</h1>
      <NoteGrid notes={props.notes} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('notes');
    console.log('Collection: ', collection)
    const data = await collection.find({}).toArray();
    console.log('Data: ', data)
    return {
      props: {
        notes: data
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: [] },
    };
  }
}

export default Home;