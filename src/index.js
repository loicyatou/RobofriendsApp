import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App';
// this was created so that all our app components (features) are in one place.
import reportWebVitals from './reportWebVitals';
import 'tachyons'

// continuing from robofrieds (default) here we put curly brackets
// becuase we will be importing specific objects within the robots
// file as opposed to importing the whole file as one single object.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
