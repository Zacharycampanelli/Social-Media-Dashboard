import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/sass/main.scss';
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
