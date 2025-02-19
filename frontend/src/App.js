import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ConfigureButton from './pages/ConfigurationButton';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/configure/:id?" element={<ConfigureButton />} />
        </Routes>
      </Router>
  );
};

export default App;
