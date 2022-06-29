import {
  useRef, useState, useMemo, FormEventHandler, useCallback, ChangeEventHandler, useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';

import type { NoteProps } from '../types';

const useNote = ({ note, editNote, removeNote }: NoteProps) => {
  const noteInput = useRef<HTMLInputElement>(null);

  const [newText, setNewText] = useState(note.text);

  const formId = useMemo(() => `note-${note.id}`, [note]);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === `#${note.id}`) {
      noteInput.current?.scrollIntoView();
      noteInput.current?.focus();
    }
  }, []);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    event.preventDefault();

    editNote(note, newText);

    noteInput.current?.blur();
  }, [newText]);

  const onRemoveNoteHandler = useCallback(() => removeNote(note.id), []);
  const onChangeTextHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => setNewText(event.target.value),
    [],
  );

  const noteSaved = useMemo(() => note.text === newText, [note, newText]);

  return {
    noteInput,
    newText,
    formId,
    noteSaved,
    note,

    onSubmit,
    onRemoveNoteHandler,
    onChangeTextHandler,
    setNewText,
  };
};

export default useNote;
