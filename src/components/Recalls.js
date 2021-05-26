import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Vinlookup from "./Vinlookup";
import YearMakeModel from "./YearMakeModel";




const Recalls = () => {



    function handleSubmit(event) {
        event.preventDefault()
        alert(`You submitted!`)
        console.log(event)

        //reset the select boxes to default values
        //Do the API fectch
        // fetch(mmyRecallUrl)
        //     .then(result => result.json)
        //     .then(

        //generate display
        // )

    }
    return (
        <div>
            <Switch>
                {/* <Vinlookup  /> */}
                <YearMakeModel submitFcn={handleSubmit} />


            </Switch>
        </div>
    );
};

export default Recalls;