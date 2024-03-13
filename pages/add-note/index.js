import AddNoteForm from "@/components/add-note/add-note-form";
import { useRouter } from 'next/router';

function AddNotePage() {
    const router = useRouter();

    const handleAddNote = async (newNote) => {
        try {
            alert('Yeni not eklendi');
            router.push('/');
        } catch (error) {
            alert('Not ekleme işlemi başarısız');
        }
    };

    return (
        <div className="container">
            <h1>Add Note</h1>
            <AddNoteForm onAdd={handleAddNote} />
        </div>
    );
}

export default AddNotePage;