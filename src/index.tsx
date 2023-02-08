import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { SLUGS } from 'shared/constants';
import { ProtectedRoutes } from 'shared/components';

import { theme } from './muiTheme';
import Dashboard from './features/dashboard';
import Login from './features/login';
import { store } from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
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
  </React.StrictMode>,
);
