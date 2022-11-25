import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppForex from './AppForex';

if (process.env.REACT_APP_WEBSITE_TYPE === 'stavky') {
  document.documentElement.style.setProperty('--color-primary', '#2c074f');
  document.documentElement.style.setProperty('--color-secondary', '#3a0869');
  document.documentElement.style.setProperty('--color-tertiary', '#3b055b');
  document.documentElement.style.setProperty('--color-pink', '#7c18b8');
}

ReactDOM.render(
  <React.StrictMode>{process.env.REACT_APP_WEBSITE_TYPE === 'forex' ? <AppForex /> : <App />}</React.StrictMode>,
  document.getElementById('root')
);
