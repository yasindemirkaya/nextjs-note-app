import axiosInstance from '@/axiosConfig';

// GET ALL NOTES
export async function getAllNotes() {
    try {
        const response = await axiosInstance.get("/api/notes");
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch notes');
    }
}

// ADD NEW NOTE
export async function addNewNote(title, description) {
    try {
        const response = await axiosInstance.post("/api/notes", {
            title,
            description
        });
        return response.data
    } catch (error) {
        throw new Error('Failed to add new note. ' + error);
    }
}

// DELETE NOTE
export async function deleteNote(noteId) {
    try {
        const response = await axiosInstance.delete(`/api/notes/${noteId}`)
        return response.data
    } catch (error) {
        throw new Error('Failed to delete note. ' + error)
    }
}