import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './pages/Books';
import NoPage from './pages/NoPage';
import Categories from './pages/Categories';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
