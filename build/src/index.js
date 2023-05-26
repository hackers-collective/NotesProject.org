import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
