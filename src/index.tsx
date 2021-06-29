import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Task1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
