import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
/* import Card from './Card' */
/* import { robots } from './robots'; */
import App from './Containers/App';

/* ReactDOM.render(<Hello greetings={'Hello' + ' React Ninja!'}/>,document.getElementById('root')); */
ReactDOM.render(
  
    <App />
  
  ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* { <React.StrictMode>
    <App />
  </React.StrictMode> } */
  