import { FC, lazy, ReactElement } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import useCurrentUser from '../features/user/hooks/useCurrentUser';

import DrawerLayout from '../layouts/DrawerLayout';

const ProtectedRoute: FC<{children: ReactElement}> = ({ children }) => {
  const currentUser = useCurrentUser();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

const LoginScreen = lazy(() => import('../features/user/screen/LoginScreen'));
const NotesScreen = lazy(() => import('../features/notes/screen'));
const ProfileScreen = lazy(() => import('../features/profile/screen'));
const RegisterScreen = lazy(() => import('../features/user/screen/RegisterScreen'));
const HomeScreen = lazy(() => import('../features/home/screen'));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="user">
        <Route path="login" element={<LoginScreen />} />

        <Route path="register" element={<RegisterScreen />} />

        <Route index element={<Navigate to="login" />} />
      </Route>

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

      <Route path="*" element={<Navigate to="/user" replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
