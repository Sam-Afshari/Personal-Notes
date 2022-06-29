import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../store';
import type { Todo } from '../types';

const getInitState = (): Todo[] => [];

const todoSlice = createSlice({
  name: 'todo',
  initialState: getInitState(),
  reducers: {
    saveTodo: (state, action: PayloadAction<Todo>) => [
      action.payload,
      ...state,
    ],

    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);

      state.splice(todoIndex, 1);

      return state;
    },

    toggleTodo: (state, action: PayloadAction<Todo>) => {
      const checkedTodo = state.find((todo) => todo.id === action.payload.id);

      if (checkedTodo) {
        checkedTodo.isDone = !checkedTodo.isDone;
      }

      return state;
    },
  },
});

export const selectTodos = (state: RootState) => state.todo;

export const {
  saveTodo,
  deleteTodo,
  toggleTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
