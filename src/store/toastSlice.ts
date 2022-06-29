import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '.';
import type { ToastContent, ToastData } from '../types';

const getInitState = (): {[id: string]: ToastContent} => ({});

const toastSlice = createSlice({
  name: 'toast',
  initialState: getInitState(),
  reducers: {
    showToast: (state, action: PayloadAction<ToastData>) => ({
      ...state,
      [action.payload.id]: {
        body: action.payload.body,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
      },
    }),

    hideToast: (state, action: PayloadAction<string>) => {
      delete state[action.payload];

      return state;
    },
  },
});

export const selectToasts = (state: RootState) => state.toast;

export const {
  showToast,
  hideToast,
} = toastSlice.actions;

export default toastSlice.reducer;
