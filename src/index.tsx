import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {process.env.REACT_APP_WEBSITE_TYPE}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
