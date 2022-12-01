import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppForex from './AppForex';

ReactDOM.render(
  <React.StrictMode>{process.env.REACT_APP_WEBSITE_TYPE === 'forex' ? <AppForex /> : <App />}</React.StrictMode>,
  document.getElementById('root')
);
