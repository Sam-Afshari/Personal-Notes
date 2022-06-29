import NoteForm from '../components/NoteForm';
import NoteItem from '../components/NoteItem';

import useNotes from '../hooks/useNotes';

const NotesScreen = () => {
  const {
    addNote, editNote, notes, removeNote,
  } = useNotes();

  return (
    <div className="w-100 h-100 d-flex flex-column gap-4 p-1">
      <NoteForm addNote={addNote} />

      <div className="d-flex flex-column gap-2 p-1 overflow-auto">
        {
          notes.map((note) => (
            <NoteItem key={note.id} editNote={editNote} note={note} removeNote={removeNote} />
          ))
        }
      </div>
    </div>
  );
};

export default NotesScreen;
