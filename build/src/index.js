import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Switch as RouterSwitch } from 'react-router'; // Import Switch from react-router

import App from './App';

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The requested page does not exist.</p>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouterSwitch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </RouterSwitch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
