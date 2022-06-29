import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../store';
import type { User } from '../types';

const getInitState = (): {
  currentUser: User | undefined,
  users: User[]
} => ({
  currentUser: undefined,
  users: [],
});

const userSlice = createSlice({
  name: 'user',
  initialState: getInitState(),
  reducers: {
    login: (state, action: PayloadAction<User>) => ({
      ...state,
      currentUser: action.payload,
    }),

    logout: (state) => ({
      ...state,
      currentUser: undefined,
    }),

    register: (state, action: PayloadAction<User>) => ({
      ...state,
      users: [
        ...state.users,
        action.payload,
      ],
    }),

    changePassword: (state, action: PayloadAction<string>) => {
      const user = state.users.find((usr) => usr.userName === state.currentUser?.userName);

      if (user) {
        user.password = action.payload;
      }

      return state;
    },

    changeFullName: (state, action: PayloadAction<string>) => {
      const user = state.users.find((usr) => usr.userName === state.currentUser?.userName);

      if (user && state.currentUser) {
        user.fullName = action.payload;
        state.currentUser.fullName = action.payload;
      }

      return state;
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectUsers = (state: RootState) => state.user.users;

export const {
  login,
  logout,
  register,
  changePassword,
  changeFullName,
} = userSlice.actions;

export default userSlice.reducer;
