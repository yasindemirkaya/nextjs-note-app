import { Card, Button } from 'react-bootstrap';
import classes from './note-item.module.scss'

function NoteItem({ note, onDelete }) {
    const handleDelete = () => {
        onDelete(note._id);
    };

    return (
        <Card className='my-1'>
            <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.description}</Card.Text>
                <Button variant="primary" className='me-1'>Edit</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default NoteItem;