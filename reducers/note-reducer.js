import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [
        { id: 1, title: 'Note 1', description: 'Note Description 1' },
        { id: 2, title: 'Note 2', description: 'Note Description 2' },
        { id: 3, title: 'Note 3', description: 'Note Description 3' },
        { id: 4, title: 'Note 4', description: 'Note Description 4' },
    ]
};

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action) {
            state.notes.push(action.payload);
        },
        deleteNote(state, action) {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        }
    }
});

export const { addNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;