import { FC } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import useNote from '../hooks/useNote';

import type { NoteProps } from '../types';

type IProps = NoteProps

const NoteItem: FC<IProps> = (props) => {
  const {
    formId, newText, noteInput, onChangeTextHandler, onRemoveNoteHandler, onSubmit, noteSaved, note,
  } = useNote(props);

  return (
    <Card className="w-full">
      <Card.Header className="px-1 py-0">
        <span className="text-muted small">{note.date}</span>
      </Card.Header>

      <div className="d-flex flex-row align-items-start gap-2">
        <Form id={formId} onSubmit={onSubmit} className="flex-grow-1">
          <Form.Group className="w-100" controlId="text">
            <Form.Control
              ref={noteInput}
              required
              type="text"
              placeholder="Enter note text"
              value={newText}
              onChange={onChangeTextHandler}
            />
          </Form.Group>
        </Form>

        <div className="d-flex flex-row items-center pt-1 pe-1 gap-2">
          <Button variant="primary" size="sm" type="submit" disabled={noteSaved} form={formId}>
            Save
          </Button>

          <Button variant="danger" size="sm" onClick={onRemoveNoteHandler}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NoteItem;
