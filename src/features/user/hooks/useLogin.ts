import { useRef, FormEventHandler, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useToast from '../../../hooks/useToast';

import { login, selectUsers } from '../store';

const useLogin = () => {
  const form = useRef<HTMLFormElement>(null);
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toast = useToast();

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    event.preventDefault();

    const loginData = {
      userName: form.current?.userName.value,
      password: form.current?.password.value,
    };

    const user = users
      .find((usr) => usr.userName === loginData.userName && usr.password === loginData.password);

    if (!user) {
      toast.show({
        title: 'Error',
        body: 'username or password is not correct',
      });

      return;
    }

    dispatch(login(user));
    navigate('/');
  }, []);

  return {
    form,
    onSubmit,
  };
};

export default useLogin;
