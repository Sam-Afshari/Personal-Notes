import { useCallback } from 'react';
import { v4 as uuidV4 } from 'uuid';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import {
  deleteTodo, saveTodo, selectTodos, toggleTodo,
} from '../store';

import type { Todo } from '../types';

const useTodos = () => {
  const todos = useAppSelector(selectTodos);

  const dispatch = useAppDispatch();

  const addTodo = useCallback((text: string) => {
    const todo: Todo = {
      isDone: false,
      text,
      id: uuidV4(),
    };

    dispatch(saveTodo(todo));
  }, []);

  const checkTodo = useCallback((todo: Todo) => {
    dispatch(toggleTodo(todo));
  }, []);

  const removeTodo = useCallback((todoId: string) => {
    dispatch(deleteTodo(todoId));
  }, []);

  return {
    todos,

    addTodo,
    checkTodo,
    removeTodo,
  };
};

export default useTodos;
