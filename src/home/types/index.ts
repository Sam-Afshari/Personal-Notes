export type Todo = {
  id: string,
  text: string,
  isDone: boolean,
}

export type TodoProps = {
  todo: Todo,
  checkTodo: (t: Todo) => void,
  removeTodo: (tId: string) => void,
}
