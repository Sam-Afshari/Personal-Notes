import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';

import useNoteForm from '../hooks/useNoteForm';

type IProps = {
  addNote: (text: string) => void,
}

const NoteForm: FC<IProps> = ({ addNote }) => {
  const { form, onSubmit } = useNoteForm(addNote);

  return (
    <Form ref={form} onSubmit={onSubmit} className="d-flex flex-row gap-4 align-items-center">
      <Form.Group className="flex-grow-1" controlId="text">
        <Form.Control required type="text" placeholder="Enter note" />
      </Form.Group>

      <div>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};

export default NoteForm;
