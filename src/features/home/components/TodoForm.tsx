import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';

import useTodoForm from '../hooks/useTodoForm';

type IProps = {
  addTodo: (txt: string) => void;
}

const TodoForm: FC<IProps> = ({ addTodo }) => {
  const { form, onSubmit } = useTodoForm(addTodo);

  return (
    <Form ref={form} onSubmit={onSubmit} className="d-flex flex-row gap-4 align-items-center">
      <Form.Group className="flex-grow-1" controlId="text">
        <Form.Control required type="text" placeholder="Enter todo" />
      </Form.Group>

      <div>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </div>
    </Form>
  );
};

export default TodoForm;
