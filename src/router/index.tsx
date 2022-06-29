import { FC, ReactElement } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate, Outlet,
} from 'react-router-dom';

import DrawerLayout from '../layouts/DrawerLayout';

import NotesScreen from '../notes/screen';
import ProfileScreen from '../profile/screen';
import useCurrentUser from '../user/hooks/useCurrentUser';
import LoginScreen from '../user/screen/LoginScreen';
import RegisterScreen from '../user/screen/RegisterScreen';
import HomeScreen from '../home/screen';

const ProtectedRoute: FC<{children: ReactElement}> = ({ children }) => {
  const currentUser = useCurrentUser();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<LoginScreen />} />

      <Route path="register" element={<RegisterScreen />} />

      <Route
        path="/"
        element={(
          <ProtectedRoute>
            <DrawerLayout>
              <Outlet />
            </DrawerLayout>
          </ProtectedRoute>
        )}
      >
        <Route path="home" element={<HomeScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
        <Route path="notes" element={<NotesScreen />} />
        <Route index element={<Navigate to="home" />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
