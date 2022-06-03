import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './pages/Books';
import NoPage from './pages/NoPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </Router>
);

export default App;
