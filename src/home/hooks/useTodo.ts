import { useCallback } from 'react';

import type { TodoProps } from '../types';

const useTodo = ({ checkTodo, removeTodo, todo }: TodoProps) => {
  const todoRemoveHandler = useCallback(() => removeTodo(todo.id), []);

  const todoCheckHandler = useCallback(() => checkTodo(todo), []);

  return {
    todoCheckHandler,
    todoRemoveHandler,
    todo,
  };
};

export default useTodo;
