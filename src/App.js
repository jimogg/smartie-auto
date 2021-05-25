import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Results from "./components/Results";
import Vinlookup from './components/Vinlookup';
import Left from "./components/Left"
import MakeModelYear from './components/MakeModelYear';
import Home from './components/Home';
import NavCard from './components/NavCard'


function App() {
  return (
    <div className="container">
      <div className="header"><h1>Smartie Automotive Information</h1>
        {/* <p>Search for Automobile Recalls by VIN or Make/Model/Year.</p> */}
      </div>
      <nav className="nav"><Nav /></nav>
      <div className="left"><Left /></div>
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

        <MakeModelYear />

      </div>
      {/* <div className="right">Right</div> */}
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
