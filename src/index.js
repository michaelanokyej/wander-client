import React from 'react';
import ReactDOM from 'react-dom';
import Tours from "./store";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App tours={Tours}/>
  </BrowserRouter> , document.getElementById('root'));

