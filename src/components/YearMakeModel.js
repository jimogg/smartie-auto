import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from 'react'
import staticMakes from "../makes-by-model-year.json"
import staticModels from "../models-by-make-modelYear.json"
import staticYears from "../model-years.json"

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
// let year
// let make
// let model

// const makesUrl = `https://api.nhtsa.gov/products/vehicle/makes?modelYear=2010&issueType=r`
// const modelsUrl = `https://api.nhtsa.gov/products/vehicle/models?modelYear=2010&make=honda&issueType=r`
const yearsUrl = `https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r`

const YearMakeModel = (props) => {

    const [validator, setValidator] = useState("original validator state. Testing 123")

    const [year, setYear] = useState(0)
    const [make, setMake] = useState("")
    const [makeOptions, setMakeOptions] = useState("")
    const [modelOptions, setModelOptions] = useState("")
    const [modelYears, setModelYears] = useState("")

    const makesUrl = `https://api.nhtsa.gov/products/vehicle/makes?modelYear=${year}&issueType=r`
    const modelsUrl = `https://api.nhtsa.gov/products/vehicle/models?modelYear=${year}&make=${make}&issueType=r`

    async function yearsFetch() {
        /**
         * fetches the model years available in nhtsa database
         * populates the option values in YEAR select input box
         */

        const years = await fetch(yearsUrl)
        const response = await years.json()
        const yearsAvail = await response.results.map((element) => {
            // console.log(element.modelYear)
            return (<option value={element.modelYear}>{element.modelYear}</option>)
        })
        setModelYears(yearsAvail)
        // return yearSelect
        //error handling

    }

    useEffect(() => {
        yearsFetch()
    }, [])

    async function makesFetch() {
        /**
         * fetches the makes available for selected year
         * populates the option values in MAKE select input box
         */

        const makes = await fetch(makesUrl)
        const response = await makes.json()
        const makesAvail = await response.results.map((element) => {
            // console.log(element.make)
            return (<option value={element.make}>{element.make}</option>)
        })
        console.log(makesAvail)
        setMakeOptions(makesAvail)
        //error handling

    }

    function activateGetMakes(event) {
        console.log(event.target.value)
        setYear(event.target.value)
        makesFetch()
    }
    // useEffect(() => {
    //     makesFetch()
    // }, [])

    /**
     * fetches the models available for selected year & make
     * populates the option values in MODEL select input box
     */
    async function modelFetch() {

        const models = await fetch(modelsUrl)
        const response = await models.json()
        const modelsAvail = await response.results.map((element) => {
            console.log(element.model)
            return (<option value={element.model}>{element.model}</option>)
        })

        setModelOptions(modelsAvail)

        //error handling

    }

    function activateGetModels(event) {
        console.log(event.target.value)
        setMake(event.target.value)
        modelFetch()
    }
    // useEffect(() => {
    //     modelFetch()
    // }, [])

    function handleChange(event) {
        // setYear(event.target[0].value)
        // setMake(event.target[1].value)
        // setModel(event.target[2].value)
        // if (event.target[0].value) { activateGetMakes() }


        // ---------- Validation of input fields ----------------
        // set option IDs ..... @reminder
        // if (event.target[0].value === 0) {
        //     setValidator("Please select a Year first.")
        // }

        // else if (event.target[0].value !== 0 && event.target[1].value === 0) {
        //     setValidator("Please select a Make.")
        //     setYear(event.target[0].value)
        //     modelOptions = fetcher(makesUrl).Results.map((element, i) => {
        //         return (<option value={element.Make}>{element.Make}</option>);

        //     })

        // }
        // else if (event.target[0].value !== 0 && event.target[1].value !== 0 && event.target[2] === 0) {
        //     setValidator("Please Select a Model.")

        //     makesOptions = fetcher(modelsUrl).Results.map((element) => {
        //         return (<option value={element.Model}>{element.Model}</option>);
        //     })
        //     setMake(event.target[1].value)
        // }
        // else {
        //     setValidator("Press Submit to get your results.")
        //     setModel(event.target[2].value)
        // }
        // console.log(event.target[0].value, event.target[0].value, event.target[0].value) //TEST
        // if event.target.value === 0, alert to select a make
    }

    return (<div>
        <div className="select-make-model-year">
            <form onSubmit={props.submitFcn}>
                <select onChange={activateGetMakes}>
                    <option value="0">Select Year</option>
                    {modelYears}
                </select>
                <select onChange={activateGetModels}>
                    <option value="0">Select Make</option>
                    {makeOptions}
                </select>
                <select onChange={handleChange}>
                    <option value="0">Select Model</option>
                    {modelOptions}
                </select>
                <input type="submit" value="submit" />
            </form></div>
        <br />

        {/* display to user instruction of what's needed */}
        {validator}
    </div>

    );
};








export default YearMakeModel;