import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <ul>
                <Link to="./Home">HOME</Link>
                <Link to="./Search">RECALLS</Link>
                <Link to="./About">ABOUT</Link>
                {/* <Link to="./Home">Home</Link> */}

            </ul>
        </div>
    );
};

export default Nav;