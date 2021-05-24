import React from 'react';
import NavCard from "./NavCard"

const NavCards = () => {
    return (
        <div className="nav-wrapper">
            <NavCard title="VIN Search" details="Look up by VIN Number." />
            <NavCard title="Information by Make, Model, and Year" details="Search vehicle data by make model and year of manufacture." />
            <NavCard title="Recalls" details="Search for recall data compiled by the NHTSA" />
        </div>
    );
};

export default NavCards;