export type Note = {
  text: string,
  date: string,
  id: string,
}

export type NoteProps = {
  note: Note,
  editNote: (nt: Note, text: string) => void,
  removeNote: (noteId: string) => void,
}
