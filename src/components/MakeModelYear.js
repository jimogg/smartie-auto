import React from 'react';
import { useState, useEffect } from 'react'
import staticMakesData from "../makes-by-model-year.json"
import modelYearData from "../model-years.json"
import sampleModels from "../sample-makes-data.json"
import sampleRecallData from "../recall-yr-mk-model.json"


const mmyRecallUrl = `https://vpic.nhtsa.dot.gov/api`
const allModelYearsUrl = `https://api.nhtsa.gov/recalls/recallsByVehicle?make=acura&model=rdx&modelYear=2012`





const makesOptions = staticMakesData.Results.map((element, i) => {
    return (<option value={element.Make}>{element.Make}</option>);
})

const modelYears = modelYearData.Results.map((element) => {

    return (<option value={element.ModelYear}>{element.ModelYear}</option>);
})

const modelOptions = sampleModels.Results.map((element) => {
    return (<option value={element.Model}>{element.Model}</option>);
})


const recallResults =
    <div>
        <h3>{sampleRecallData.results[0].ModelYear} {sampleRecallData.results[0].Make} {sampleRecallData.results[0].Model}</h3>
        <table>
            <tbody>
                <tr>
                    <td><strong>Manufacturer:</strong></td>
                    <td>{sampleRecallData.results[0].Manufacturer}</td>
                </tr>
                <tr>
                    <td><strong>NHTSA Campaign Number:</strong></td>
                    <td>{sampleRecallData.results[0].NHTSACampaignNumber}</td>
                </tr>
                <tr>
                    <td><strong>NHTSA Action Number:</strong></td>
                    <td>{sampleRecallData.results[0].NHTSAActionNumber}</td>
                </tr>
                <tr>
                    <td><strong>Report Received Date:</strong></td>
                    <td>{sampleRecallData.results[0].ReportReceivedDate}</td>
                </tr>
                <tr>
                    <td><strong>Component:</strong></td>
                    <td>{sampleRecallData.results[0].Component}</td>
                </tr>
            </tbody>
        </table>
        <h3>Recall Summary</h3>
        <p>{sampleRecallData.results[0].Summary}</p>
        <h3>Consequence</h3>
        <p>{sampleRecallData.results[0].Conequence}</p>
        <h3>Notes</h3>
        <p>{sampleRecallData.results[0].Notes}</p>
    </div>


const MakeModelYear = () => {

    fetch(allModelYearsUrl)
        .then(response => response.json())
        .then(data => console.log({ data }));


    /* ----------------------------------------------------- */
    async function myFetch() {
        let response = await fetch(`https://api.nhtsa.gov/recalls/recallsByVehicle?make=acura&model=rdx&modelYear=2012`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let fetchedData = response.json();

        // console.log(fetchedData);
    }

    myFetch()
        .catch(e => {
            // console.log('There has been a problem with your fetch operation: ' + e.message);
        });


    /* ----------------------------------------------------- */
    const [value, setValue] = useState("")

    function handleChange(event) {


        // if event.target.value === 0, alert to select a make
    }
    function handleSubmit(event) {
        event.preventDefault()
        //reset the select boxes to default values
        //Do the API fectch
        // fetch(mmyRecallUrl)
        //     .then(result => result.json)
        //     .then(

        //generate display
        // )

    }

    // DISABLING NO-NAV SELECT BOXES AND BUTTON FOR PROJECT SUBMISSION
    return (<div>
        <div className="select-make-model-year">


            {/* <form onSubmit={handleSubmit}>
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
            </form> */}
        </div><small>- This is a sample parsed from a json file but will be fetched from live API upon completion of extra features. -</small>
        <br />
        {recallResults}
    </div>
    );
};

export default MakeModelYear;