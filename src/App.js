import React from "react";
import logo from './holberton-logo.jpg';

import { getFooterCopy, getFullYear } from './utilis';
import './App.css';

export default function App() {
  return(
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      
      <hr />

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <label for='email'>Email:</label>
        <input type="email" name="email" id="email"/>

        <label for='password'>Password:</label>
        <input type="password" name="password" id="password"/>

        <button>OK</button>
      </div>

      <hr />

      <div className="App-footer">
        <i>Copyright {getFullYear()} - {getFooterCopy(true)}</i>
      </div>
    </div>
    
  )
}
