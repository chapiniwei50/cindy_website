import React from 'react'; // React must be explicitly imported in React 17
import ReactDOM from 'react-dom';
import App from './App'; // Ensure the correct path to your App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
