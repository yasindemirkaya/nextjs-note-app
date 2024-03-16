import NoteGrid from '../components/notes/note-grid'
import { getAllNotes } from '../utils/notes/api-requests'
import { useSelector, useDispatch } from 'react-redux'

function Home(props) {
  const dispatch = useDispatch()
  dispatch(setNotes(props))
  const notes = useSelector(state => state.notes)

  return (
    <div className='container'>
      <h1 className='my-2'>My Notes</h1>
      {notes.length > 0 ? (
        <NoteGrid notes={props.notes} />
      ) : (
        <div>{props.error}</div>
      )}

    </div>
  );
}

export async function getServerSideProps() {
  const notes = await getAllNotes();
  if (notes.status === 200) {
    return {
      props: {
        notes: notes.data
      }
    }
  } else {
    return {
      props: {
        error: 'Error fetching notes. Please try again later.'
      }
    }
  }
}

export default Home;