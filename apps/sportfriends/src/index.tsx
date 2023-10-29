import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { SLUGS } from '@sportfriends-fe/shared/constants';
import { ProtectedRoutes } from '@sportfriends-fe/shared/ui';

import { theme } from './muiTheme';
import { Dashboard } from '@sportfriends-fe/features/dashboard';
import { Login } from '@sportfriends-fe/features/login';
import { store } from './store';
import './index.css';
import { ErrorBoundary } from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              {/* <Route element={<ProtectedRoutes />}> */}
              <Route path={SLUGS.dashboard + '/*'} element={<Dashboard />} />
              {/* </Route> */}
              <Route path={SLUGS.all} element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
