import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from 'react'


/*
 This Component is a panel containing a form with html select inputs for Year/Make/model.
 The function to run onSubmit is passed to it via props from the parent Component.
 Years available in NHTSA database is fetched and used in the options for the YEAR select input field.
 After user selects a YEAR, a fetch() provides models available for that year & populates the MAKE options.
 When a make is selected, a fetch() provides the models available for the  YEAR/MAKE combo and populates MODEL options.
 YEAR/MAKE/MODEL selections are then used to fetch data as specified by onSubmit function in parent Component.
*/

// const mmyRecallUrl = `https://vpic.nhtsa.dot.gov/api`
// const allModelYearsUrl = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=acura&model=rdx&modelYear=2012`
let year
let make
let model

const yearsUrl = `https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r`
const makesUrl = `https://api.nhtsa.gov/products/vehicle/makes?modelYear=${year}&issueType=r`
const modelsUrl = `https://api.nhtsa.gov/products/vehicle/models?modelYear=${year}&make=${make}&issueType=r`


const YearMakeModel = (props) => {

    const [validator, setValidator] = useState("original state. Testing 123")

    const [year, setYear] = useState(0)
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")

    const [modelYears, setModelYears] = useState("")

    function fetcher(url, stateToUpdate) {

        if (stateToUpdate === "year") {
            setYear()
        }
        else if (stateToUpdate === "make") {

        }
        else {

        }




        fetch(yearsUrl)
            .then(response => response.json())
            .then(data => {


                // map here
                return data

            })
            .then();

        return
    }
    //---------------------- years



    fetch(yearsUrl)
        .then(response => response.json())
        .then(data => {
            let arr = []

            const yearsAvail = data.Results.map((element) => {

                // return arr.push(element.ModelYear)
                // return arr.push();
                return (<option value={element.ModelYear}>{element.ModelYear}</option>)


            })

            // return arr
            return yearsAvail
        })
        .then(data => {
            setModelYears(data)
        })





    //--------------- end years
    let makesOptions = ""
    let modelOptions = ""


    function handleChange(event) {
        setYear(event.target[0].value)
        setMake(event.target[1].value)
        setModel(event.target[2].value)



        // ---------- Validation of input fields ----------------
        // set option IDs ..... @reminder
        if (event.target[0].value === 0) {
            setValidator("Please select a Year first.")
        }

        else if (event.target[0].value !== 0 && event.target[1].value === 0) {
            setValidator("Please select a Make.")
            setYear(event.target[0].value)
            modelOptions = fetcher(makesUrl).Results.map((element, i) => {
                return (<option value={element.Make}>{element.Make}</option>);

            })

        }
        else if (event.target[0].value !== 0 && event.target[1].value !== 0 && event.target[2] === 0) {
            setValidator("Please Select a Model.")

            makesOptions = fetcher(modelsUrl).Results.map((element) => {
                return (<option value={element.Model}>{element.Model}</option>);
            })
            setMake(event.target[1].value)
        }
        else {
            setValidator("Press the Submit button to get your results.")
            setModel(event.target[2].value)
        }
        // console.log(event.target[0].value, event.target[0].value, event.target[0].value) //TEST
        // if event.target.value === 0, alert to select a make
    }

    return (<div>
        <div className="select-make-model-year">
            <form onSubmit={props.submitFcn}>
                <select onChange={handleChange}>
                    <option value="0">Select Year</option>
                    {modelYears}
                </select>
                <select onChange={handleChange}>
                    <option value="0">Select Make</option>
                    {makesOptions}
                </select>
                <select onChange={handleChange}>
                    <option value="0">Select Model</option>
                    {modelOptions}
                </select>
                <input type="submit" value="submit" />
            </form></div>
        <br />
        {validator}
    </div>

    );
};

export default YearMakeModel;