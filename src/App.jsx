import React from 'react';
import { Routes, Route } from "react-router-dom";
import {
  HOME_ROUTE
} from './Route';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
    </Routes>
  );
}

export default App;
