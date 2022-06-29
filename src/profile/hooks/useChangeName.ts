import { FormEvent, useCallback, useRef } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';
import useToast from '../../hooks/useToast';

import { changeFullName } from '../../user/store';

const useChangeName = () => {
  const form = useRef<HTMLFormElement>(null);

  const toast = useToast();
  const dispatch = useAppDispatch();

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newFullName = form.current?.newFullName.value;

    dispatch(changeFullName(newFullName));

    form.current?.reset();

    toast.show({
      title: 'Success',
      body: 'Name changed successfully!',
    });
  }, []);

  return {
    form,

    onSubmit,
  };
};

export default useChangeName;
