import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../store';
import type { Note } from '../types';

const getInitState = (): Note[] => [];

const noteSlice = createSlice({
  name: 'note',
  initialState: getInitState(),
  reducers: {
    saveNote: (state, action: PayloadAction<Note>) => [
      action.payload,
      ...state,
    ],

    deleteNote: (state, action: PayloadAction<string>) => {
      const noteIndex = state.findIndex((note) => note.id === action.payload);

      state.splice(noteIndex, 1);

      return state;
    },

    updateNote: (state, action: PayloadAction<Note>) => {
      const noteIndex = state.findIndex((note) => note.id === action.payload.id);

      state.splice(noteIndex, 1, action.payload);

      return state;
    },
  },
});

export const selectNotes = (state: RootState) => state.note;

export const {
  saveNote,
  deleteNote,
  updateNote,
} = noteSlice.actions;

export default noteSlice.reducer;
