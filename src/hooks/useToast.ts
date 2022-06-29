import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';

import { hideToast, selectToasts, showToast } from '../store/toastSlice';

import useAppDispatch from './useAppDispatch';

import type { ToastContent } from '../types';

const useToast = () => {
  const toasts = useSelector(selectToasts);
  const dispatch = useAppDispatch();

  const show = useCallback((toast: ToastContent) => {
    dispatch(showToast({
      ...toast,
      id: uuidV4(),
    }));
  }, []);

  const hide = useCallback((toastId: string) => {
    dispatch(hideToast(toastId));
  }, []);

  return {
    toasts,

    show,
    hide,
  };
};

export default useToast;
