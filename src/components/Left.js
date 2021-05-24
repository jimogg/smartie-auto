import React from 'react';
import { Route, Link } from "react-router-dom";
import MakeModelYear from "./MakeModelYear";
import Vinlookup from "./Vinlookup"

const Left = () => {
    return (
        <div className="left-container">
            <p><strong>Search Recalls by Make Model & Year</strong></p>
            {/* <MakeModelYear /> */}
            <Vinlookup />

        </div>
    );
};

export default Left;