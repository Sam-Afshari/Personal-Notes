import { FormEventHandler, useCallback, useRef } from 'react';

const useTodoForm = (addTodo: (txt: string) => void) => {
  const form = useRef<HTMLFormElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    event.preventDefault();

    const text = form.current?.text.value;

    addTodo(text);

    form.current?.reset();
  }, []);

  return {
    form,

    onSubmit,
  };
};

export default useTodoForm;
