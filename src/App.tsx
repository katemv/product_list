import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootPage from 'navigation/RootPage';
import ThemeContext from 'theme/ThemeProvider';
import { store } from 'redux/store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <ThemeContext>
                <Router>
                    <RootPage />
                </Router>
            </ThemeContext>
        </Provider>
    );
}

export default App;
