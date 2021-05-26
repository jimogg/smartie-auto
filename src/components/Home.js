import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./NavCard"


const Home = () => {
    return (
        <div>
            <h2>Welcome to Smartie Automotive Tools</h2>
            <div className="welcome-splash" ><h2>&nbsp;AutoDATA</h2>
                {/* <p>&nbsp;Automotive Recalls, VIN Decoder</p> */}
            </div>
            <p>This site is under maintenance. However, please feel free to use the VIN decoder to look up the details of any VIN number. </p>
            <p>Sample VINS:</p> <p>3VWC17AU8FM514802 - Model Year 2015<p>4T1BF1FK7CU103205 - Model Year 2012</p><p>2T2BK1BA3CC134733 - Model Year 2012</p>

            </p>
        </div>
    );
};

export default Home;