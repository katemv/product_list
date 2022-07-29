import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RootPage from './navigation/RootPage';
import './App.css';

function App() {
  return (
      <Router>
        <RootPage />
      </Router>
  );
}

export default App;
