import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RootPage from 'navigation/RootPage';
import ThemeContext from 'theme/ThemeProvider';
import './App.css';

function App() {
    return (
        <ThemeContext>
            <Router>
                <RootPage />
            </Router>
        </ThemeContext>
    );
}

export default App;
