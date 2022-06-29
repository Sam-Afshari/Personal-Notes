import { FormEventHandler, useCallback, useRef } from 'react';

const useNoteForm = (addNote: (txt: string) => void) => {
  const form = useRef<HTMLFormElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    event.preventDefault();

    const text = form.current?.text.value;

    addNote(text);

    form.current?.reset();
  }, []);

  return {
    form,

    onSubmit,
  };
};

export default useNoteForm;
