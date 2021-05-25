import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <ul>
                <Link className="nav-link" to="/">Home</Link>
                {/* <Link to="/Search">RECALLS</Link> */}
                <Link className="nav-link" to="/vinlookup">VIN-Lookup</Link>
                <Link className="nav-link" to="/make-model-year">Year-Make-Model Info</Link>
                <Link className="nav-link" to="/recalls">Recalls</Link>
                <Link className="nav-link" to="/about">About</Link>

            </ul>
        </div>
    );
};

export default Nav;