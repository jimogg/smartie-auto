import React from 'react';
import { Route, Link } from "react-router-dom";
import MakeModelYear from './MakeModelYear';

const Left = () => {
    return (
        <div className="left-container">
            {/* <h3>Search by:</h3> */}

            <h4>VIN Number Lookup</h4>

            <p><strong>By Make Model Year</strong></p>
            <MakeModelYear />
        </div>
    );
};

export default Left;