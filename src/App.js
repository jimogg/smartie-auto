import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Vinlookup from './components/Vinlookup';
import Aside from "./components/Aside"
import MakeModelYear from './components/MakeModelYear';
import Home from './components/Home';
import About from "./components/About"
import MoreInfo from "./components/MoreInfo"


function App() {
  return (
    <div className="container">
      <div className="header"><h1>Smartie Automotive Info</h1>
        <p><small>Search Automobile Manufacturer Data, VIN details and Recall information.</small></p>
      </div>
      <nav className="nav"><Nav /></nav>
      <div className="aside"><Aside /></div>
      <div className="main">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/vinlookup">
            <Vinlookup />
          </Route>
          <Route path="/make-model-year">
            <MoreInfo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recalls">
            <MakeModelYear />
          </Route>
        </Switch>

      </div>
      <div className="footer"><small>VIN and recall information retrieved from the National Highway and Transportation Safety Administration's (NHTSA) public database. Copyright Smartie 2021</small></div>
    </div>
  );
}

export default App;
