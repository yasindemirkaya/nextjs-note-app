// store.js
import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../reducers/note-reducer';

const store = configureStore({
    reducer: {
        notes: noteReducer
    }
});

export default store;