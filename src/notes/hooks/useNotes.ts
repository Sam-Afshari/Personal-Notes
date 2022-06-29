import { useCallback } from 'react';
import { v4 as uuidV4 } from 'uuid';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import {
  deleteNote, saveNote, selectNotes, updateNote,
} from '../store';

import type { Note } from '../types';

const useNotes = () => {
  const notes = useAppSelector(selectNotes);

  const dispatch = useAppDispatch();

  const addNote = useCallback((text: string) => {
    const note: Note = {
      date: new Date().toLocaleString(),
      text,
      id: uuidV4(),
    };

    dispatch(saveNote(note));
  }, []);

  const editNote = useCallback((note: Note, text: string) => {
    dispatch(updateNote({
      ...note,
      text,
    }));
  }, []);

  const removeNote = useCallback((noteId: string) => {
    dispatch(deleteNote(noteId));
  }, []);

  return {
    notes,

    addNote,
    editNote,
    removeNote,
  };
};

export default useNotes;
