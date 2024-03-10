import NoteItem from './note-item'
import classes from './note-grid.module.scss'

function NoteGrid({ notes }) {
    return (
        <div className='row'>
            {notes.map(note => (
                <div className='col-md-6' key={note.id}>
                    <NoteItem note={note} />
                </div>
            ))}
        </div>
    )
}

export default NoteGrid;