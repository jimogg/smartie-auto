import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./NavCard"


const Home = () => {
    return (
        <div>
            <h2>Welcome to Smartie Automotive Tools</h2>
            <div className="welcome-splash" ><h2>&nbsp;Welcome!</h2>
                {/* <p>&nbsp;Automotive Recalls, VIN Decoder</p> */}
            </div>
            <p>This project features a user interface built using react js and node. It will be added upon. However, please feel free to use the VIN decoder to see a live implementation of an API fetch. Use your own VIN number or try the samples below. </p>
            <p><strong>Sample VINS:</strong></p> <p>3VWC17AU8FM514802 - Model Year 2015<p>4T1BF1FK7CU103205 - Model Year 2012</p><p>2T2BK1BA3CC134733 - Model Year 2012</p>

            </p>
        </div>
    );
};

export default Home;