import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <ul>
                <Link to="/">HOME |</Link>
                {/* <Link to="/Search">RECALLS</Link> */}
                <Link to="/vinlookup">VIN LOOKUP |</Link>
                <Link to="/make-model-year">MAKE/MODEL/YEAR |</Link>
                <Link to="/about">ABOUT</Link>
                {/* <Link to="./Home">Home</Link> */}

            </ul>
        </div>
    );
};

export default Nav;