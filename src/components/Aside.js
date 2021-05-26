import React from 'react';
import { Link } from "react-router-dom";
import NavCard from "./NavCard"

const Left = () => {
    return (
        <div className="left-container">

            <div className="nav-wrapper">
                <Link to="make-model-year">
                    <NavCard title="Information by Make, Model, and Year" details="Search vehicle data by make model and year of manufacture." />
                </Link>


                <Link to="recalls">
                    <NavCard title="Recalls" details="Search for recall data compiled by the NHTSA" />
                </Link>
                <Link to="vinlookup">
                    <NavCard title="VIN Search" details="Look up by VIN Number." />
                </Link>
            </div>

        </div>
    );
};

export default Left;