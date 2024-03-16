import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: []
    },
    reducers: {
        setNotes(state, action) {
            state.notes = action.payload
        },
        addNote(state, action) {
            state.notes.push(action.payload);
        },
        deleteNote(state, action) {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        }
    }
});

export const { setNotes, addNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;