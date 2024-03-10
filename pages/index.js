import { useSelector } from 'react-redux';
import NoteGrid from '../components/notes/note-grid'

function Home() {
  const notes = useSelector(state => state.notes.notes)

  return (
    <div className='container'>
      <h1 className='my-2'>My Notes</h1>
      <NoteGrid notes={notes} />
    </div>
  );
}

export default Home;