import React from 'react';
import { Route, Link } from "react-router-dom";
import MakeModelYear from "./MakeModelYear";
import Vinlookup from "./Vinlookup"
import NavCard from "./NavCard"

const Left = () => {
    return (
        <div className="left-container">
            {/* <p><strong>Search Recalls by Make Model & Year</strong></p> */}
            {/* <MakeModelYear /> */}
            {/* <Vinlookup /> */}
            <div className="nav-wrapper">
                <Link to="/Vinlookup">
                    <NavCard title="VIN Search" details="Look up by VIN Number." />
                </Link>
                <NavCard title="Information by Make, Model, and Year" details="Search vehicle data by make model and year of manufacture." />
                <NavCard title="Recalls" details="Search for recall data compiled by the NHTSA" />
            </div>

        </div>
    );
};

export default Left;