import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import userReducer from '../user/store';
import noteReducer from '../notes/store';
import toastReducer from './toastSlice';
import todoReducer from '../home/store';

const rootReducer = combineReducers({
  user: userReducer,
  toast: toastReducer,
  note: noteReducer,
  todo: todoReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['toast'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
