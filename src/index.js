import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './app/App';
import AccountDetails from './components/AccountDetails';
ReactDOM.render(
  <React.StrictMode>
  <AccountDetails/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

