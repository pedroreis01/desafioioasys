import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Router from './routes';

import './App.css';

const App: React.FC = () => {
  return (
        <BrowserRouter>
            <AppProvider>
                <Router />
            </AppProvider>
            <GlobalStyle />
        </BrowserRouter>
  );
};

export default App;
