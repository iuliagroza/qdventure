import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from './pages/account';
import Friends from './pages/friends';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/account" element={<Account />} />
      <Route path="/friends" element={<Friends />} />
      
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();