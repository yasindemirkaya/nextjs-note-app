import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddNoteForm({ onAdd }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, description)

        setTitle('')
        setDescription('')
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