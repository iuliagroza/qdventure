import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Map from './pages/Map'

import Account from './pages/account';
import Friends from './pages/friends';
import Discoveries from './pages/discoveries';
import Leaderboard from './pages/leaderboard';
import { ContextProvider } from './globalContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const places = React.createContext(20);

root.render(
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/discoveries" element={<Discoveries />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </ContextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();