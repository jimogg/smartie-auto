import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Vinlookup from "./Vinlookup";
import YearMakeModel from "./YearMakeModel";




const MoreInfo = () => {



    function handleSubmit(event) {
        event.preventDefault()
        // alert(`You submitted!`)


        //reset the select boxes to default values
        //Do the API fectch
        //generate display
        // )

    }
    return (
        <div> <h2>Hello There!</h2>
            <p>You were delivered to this page by the magic of React Router. No reaction? Have I mentioned VIN lookup? Like, go there, there's nothing to see here yet. In the near future you will be able to search data by year/make/model right here at no extra charge!</p>
            <Switch>
                {/* <Vinlookup  /> */}
                {/* <YearMakeModel submitFcn={handleSubmit} /> */}


            </Switch>
        </div>
    );
};

export default MoreInfo;