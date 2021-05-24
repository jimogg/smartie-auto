import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Results from "./components/Results";
import Vinlookup from './components/Vinlookup';
import Left from "./components/Left"
import MakeModelYear from './components/MakeModelYear';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <div className="header"><h1>Smartie Automotive Information</h1></div>
      <nav className="nav"><Nav /></nav>
      <div className="left"><Left /></div>
      <div className="main">
        <Route exact to="/"><Home /></Route>
        <Route to="/Vinlookup"><Results /></Route>

      </div>
      {/* <div className="right">Right</div> */}
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
