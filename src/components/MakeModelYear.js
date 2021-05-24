import React from 'react';
import { useState, useEffect } from 'react'
import staticMakesData from "../makes-by-model-year.json"
import modelYearData from "../model-years.json"
import sampleModels from "../sample-makes-data.json"
import sampleRecallData from "../recall-yr-mk-model.json"


const mmyRecallUrl = `https://vpic.nhtsa.dot.gov/api`
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
            <tr>
                <td><strong>Manufacturer:</strong></td>
                <td>{sampleRecallData.results[0].Manufacturer}</td>
            </tr>
            <tr>
                <td><strong>NHTSACampaignNumber:</strong></td>
                <td>{sampleRecallData.results[0].NHTSACampaignNumber}</td>
            </tr>
            <tr>
                <td><strong>NHTSAActionNumber:</strong></td>
                <td>{sampleRecallData.results[0].NHTSAActionNumber}</td>
            </tr>
            <tr>
                <td><strong>ReportReceivedDate:</strong></td>
                <td>{sampleRecallData.results[0].ReportReceivedDate}</td>
            </tr>
            <tr>
                <td><strong>Component:</strong></td>
                <td>{sampleRecallData.results[0].Component}</td>
            </tr>
        </table>
        <h3>Recall Summary</h3>
        <p>{sampleRecallData.results[0].Summary}</p>
        <h3>Consequence</h3>
        <p>{sampleRecallData.results[0].Conequence}</p>
        <h3>Notes</h3>
        <p>{sampleRecallData.results[0].Notes}</p>
    </div>


const MakeModelYear = () => {

    const [value, setValue] = useState("")

    function handleChangeMake(event) {

        console.log(event.target.value) //TEST
        // if event.target.value === 0, alert to select a make
    }
    function handleSubmit() {
        //Do the API fectch
        // fetch(mmyRecallUrl)
        //     .then(result => result.json)
        //     .then(

        //generate display
        // )

    }

    return (
        <div className="make-model-year">
            <form onSubmit={handleSubmit}>
                <select>
                    <option value="0">Select Year</option>
                    {modelYears}
                </select>
                <select onChange={handleChangeMake}>
                    <option value="0">Select Make</option>
                    {makesOptions}
                </select>
                <select>
                    <option value="0">Select Model</option>
                    {modelOptions}
                </select>
                <input className="submit" type="submit" value="submit" />
            </form>
            {recallResults}
        </div>
    );
};

export default MakeModelYear;