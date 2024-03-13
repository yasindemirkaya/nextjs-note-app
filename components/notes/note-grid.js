import NoteItem from './note-item'
import classes from './note-grid.module.scss'
import { deleteNote } from '../../utils/notes/api-requests'
import { useState } from 'react';
import { useRouter } from 'next/router';

function NoteGrid({ notes }) {
    const router = useRouter();
    const [updatedNotes, setUpdatedNotes] = useState(notes);

    const handleDeleteNote = async (noteId) => {
        try {
            await deleteNote(noteId);
            const newNotes = updatedNotes.filter(note => note._id !== noteId);
            setUpdatedNotes(newNotes);
            alert('Note deleted successfully.')
            router.reload();
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