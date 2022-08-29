import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import { SLUGS } from 'shared/constants';
import { ProtectedRoutes } from 'shared/components';

import Dashboard from './features/dashboard';
import Login from './features/login';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>,
);
