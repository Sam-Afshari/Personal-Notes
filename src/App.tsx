import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ToastProvider from './components/ToastProvider';

import Router from './router';

import { persistor, store } from './store';

import './styles.scss';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />

      <ToastProvider />
    </PersistGate>
  </Provider>
);

export default App;
