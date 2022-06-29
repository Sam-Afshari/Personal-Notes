import { FormEvent, useCallback, useRef } from 'react';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useToast from '../../../hooks/useToast';

import { changePassword } from '../../user/store';

const useChangePassword = () => {
  const form = useRef<HTMLFormElement>(null);

  const toast = useToast();
  const dispatch = useAppDispatch();

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      newPassword: form.current?.newPassword.value,
      confirmNewPassword: form.current?.confirmPassword.value,
    };

    if (formData.newPassword !== formData.confirmNewPassword) {
      toast.show({
        title: 'Error',
        body: 'Passwords are not the same',
      });

      return;
    }

    dispatch(changePassword(formData.newPassword));

    form.current?.reset();

    toast.show({
      title: 'Success',
      body: 'Password changed successfully!',
    });
  }, []);

  return {
    form,

    onSubmit,
  };
};

export default useChangePassword;
