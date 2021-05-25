import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Results from "./components/Results";
import Vinlookup from './components/Vinlookup';
import Aside from "./components/Aside"
import MakeModelYear from './components/MakeModelYear';
import Home from './components/Home';
import NavCard from './components/NavCard'
import About from "./components/About"


function App() {
  return (
    <div className="container">
      <div className="header"><h1>Smartie Automotive Info</h1>
        <p><small>Search Automobile Manufacturer Data, VIN details and Recalls information.</small></p>
      </div>
      <nav className="nav"><Nav /></nav>
      <div className="aside"><Aside /></div>
      <div className="main">
        {/* <Button /> */}
        {/* <Route exact to="/"><Home /></Route> */}
        {/* <Route to="/Vinlookup"><Results /></Route> */}
        {/* <MakeModelYear /> */}
        <div>
          {/* <h2>This is some content</h2>
          <p>Quis consectetur fugiat dolore ea sit aute nisi amet ipsum sint aliquip in ad occaecat. Dolor ad aliqua exercitation duis deserunt aliqua tempor quis eiusmod voluptate ea deserunt aliquip ad. Ipsum fugiat reprehenderit reprehenderit laborum exercitation anim laborum.</p> */}
        </div>

        {/* <div className="nav-wrapper">
          <Link to="/Vinlookup">
            <NavCard title="VIN Search" details="Look up by VIN Number." />
          </Link>
          <NavCard title="Information by Make, Model, and Year" details="Search vehicle data by make model and year of manufacture." />
          <NavCard title="Recalls" details="Search for recall data compiled by the NHTSA" />
        </div> */}

        {/* <Router> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/vinlookup">
            <Vinlookup />
          </Route>
          <Route path="/make-model-year">
            <MakeModelYear />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recalls">
            <Results />
          </Route>
        </Switch>
        {/* </Router> */}




      </div>
      {/* <div className="right">Right</div> */}
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
