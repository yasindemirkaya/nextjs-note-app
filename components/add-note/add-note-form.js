import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addNewNote } from '../../utils/notes/api-requests'

function AddNoteForm({ onAdd }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const newNote = await addNewNote(title, description);

            onAdd(newNote);
            setTitle('')
            setDescription('')
        } catch (error) {
            console.error('Failed to add note: ', error)
            setTitle('')
            setDescription('')
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId='description' className='my-2'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={3}
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">Add Note</Button>
        </Form>
    )
}

export default AddNoteForm