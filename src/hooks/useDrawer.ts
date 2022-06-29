import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import useCurrentUser from '../user/hooks/useCurrentUser';
import useAppDispatch from './useAppDispatch';

import { logout } from '../user/store';

const useDrawer = () => {
  const [show, showDrawer] = useState(false);
  const currentUser = useCurrentUser();

  const dispatch = useAppDispatch();

  const location = useLocation();

  const handleOpen = () => showDrawer(true);
  const handleClose = () => showDrawer(false);

  useEffect(() => {
    handleClose();
  }, [location]);

  const logoutUser = useCallback(() => {
    handleClose();

    dispatch(logout());
  }, []);

  const pageTitle = useMemo(() => location.pathname.replace('/', '').toLocaleUpperCase(), [location]);

  return {
    currentUser,
    location,
    show,
    pageTitle,

    handleOpen,
    handleClose,
    logoutUser,
  };
};

export default useDrawer;
