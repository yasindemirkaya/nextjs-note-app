import NoteGrid from '../components/notes/note-grid'
import { getAllNotes } from '../utils/notes/api-requests'
import { useDispatch } from 'react-redux'
import { setNotes } from '../store/reducers/note-reducer'
import Error from 'next/error'

function Home({ httpcode, notes }) {

  if (httpcode != 200) return <Error statusCode={httpcode} />

  const dispatch = useDispatch()
  dispatch(setNotes(notes))

  return (
    <div className='container'>
      <h1 className='my-2'>My Notes</h1>
      <NoteGrid />
    </div>
  );
}

export async function getServerSideProps() {
  const notes = await getAllNotes();
  return {
    props: {
      httpcode: notes.status,
      message: notes.status != 200 ? notes.error : "",
      notes: notes.data
    }
  }
}

export default Home;