import { Card } from 'react-bootstrap';

import useTodos from '../hooks/useTodos';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Todos = () => {
  const {
    addTodo, checkTodo, removeTodo, todos,
  } = useTodos();

  return (
    <Card className="mh-100 w-100 flex-grow-1 overflow-auto">
      <Card.Body>
        <Card.Title className="h3">Todos</Card.Title>

        <div className="d-flex flex-column gap-2">
          <TodoForm addTodo={addTodo} />

          {
            todos.map((todo) => (
              <TodoItem todo={todo} checkTodo={checkTodo} removeTodo={removeTodo} key={todo.id} />
            ))
          }
        </div>
      </Card.Body>
    </Card>
  );
};

export default Todos;
