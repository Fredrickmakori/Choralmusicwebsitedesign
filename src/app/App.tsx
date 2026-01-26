import React from 'react';
import { AppProvider } from '../context/AppContext';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
