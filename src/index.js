import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import LoginForm from './features/login';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
