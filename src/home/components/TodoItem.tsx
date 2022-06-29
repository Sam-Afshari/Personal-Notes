import { FC } from 'react';
import { CloseButton, FormCheck } from 'react-bootstrap';

import useTodo from '../hooks/useTodo';

import type { TodoProps } from '../types';

type IProps = TodoProps;

const TodoItem: FC<IProps> = (props) => {
  const { todo, todoCheckHandler, todoRemoveHandler } = useTodo(props);

  return (
    <div key={todo.id} className="d-flex flex-row align-items-start gap-2">
      <div className="d-flex flex-row gap-2">
        <CloseButton onClick={todoRemoveHandler} />

        <FormCheck type="checkbox" checked={todo.isDone} onChange={todoCheckHandler} />
      </div>

      <p className="flex-grow-1">
        {todo.text}
      </p>
    </div>
  );
};

export default TodoItem;
