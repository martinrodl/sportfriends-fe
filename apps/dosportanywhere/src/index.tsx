import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './muiTheme';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path={'/*'} element={<App />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
