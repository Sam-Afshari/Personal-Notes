import {
  useRef, FormEventHandler, useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useToast from '../../hooks/useToast';

import { login, register, selectUsers } from '../store';

const useRegister = () => {
  const form = useRef<HTMLFormElement>(null);
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    event.preventDefault();

    const user = {
      userName: form.current?.userName.value,
      password: form.current?.password.value,
      fullName: form.current?.fullName.value,
    };

    const isUserNameInvalid = Boolean(users?.find((usr) => usr.userName === user.userName));

    if (isUserNameInvalid) {
      toast.show({
        title: 'Error',
        body: 'username is already taken',
      });

      return;
    }

    dispatch(register(user));
    dispatch(login(user));

    navigate('/');
  }, []);

  return {
    form,
    onSubmit,
  };
};

export default useRegister;
