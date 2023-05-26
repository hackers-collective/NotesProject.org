import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
