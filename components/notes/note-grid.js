import NoteItem from './note-item'
import classes from './note-grid.module.scss'
import { deleteNote } from '../../utils/notes/api-requests'
import { useSelector, useDispatch } from 'react-redux'
import { setNotes } from '../../store/reducers/note-reducer'

function NoteGrid() {
    const dispatch = useDispatch()
    const { notes } = useSelector((state) => state.notes)

    const handleDeleteNote = async (noteId) => {
        try {
            await deleteNote(noteId);
            const newNotes = notes.filter(note => note._id !== noteId);
            dispatch(setNotes(newNotes))
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    };

    return (
        <div className='row'>
            {notes.map(note => (
                <div className='col-md-6' key={note._id}>
                    <NoteItem note={note} onDelete={handleDeleteNote} />
                </div>
            ))}
        </div>
    )
}

export default NoteGrid;