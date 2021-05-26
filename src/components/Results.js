import React from 'react';
import recallData from "../recall-yr-mk-model.json";
const Results = () => {

    // by make model year
    // api.nhtsa.gov/recalls/recallsByVehicle?make={MAKE}&model={MODEL}&modelYear={MODEL_YR}
    const url = `api.nhtsa.gov/vehicles/GetMakeForManufacturer/honda?format=json`

    fetch(url)
        .then(response => response.json)
        .then(data => { });

    const results = [
        <p>{recallData.results[0].ModelYear} {recallData.results[0].Make} {recallData.results[0].Model}</p>,

        <li>Manufacturer: {recallData.results[0].Manufacturer}</li>,
        <li>NHTSA Campaign Number: {recallData.results[0].NHTSACampaignNumber}</li>,
        <li>NHTSA Action Number: {recallData.results[0].NHTSAActionNumber}</li>,
        <li>Report Received Date: {recallData.results[0].ReportReceivedDate}</li>,
        <li>Component: {recallData.results[0].Component}</li>,
        <h3>Summary</h3>,
        <p>{recallData.results[0].Summary}</p>,
        <h3>Consequence</h3>,
        <p>{recallData.results[0].Conequence}</p>,
        <h3>Notes</h3>,
        <p>{recallData.results[0].Notes}</p>,


    ]

    return (
        <div> <h2>Manufacturer Recall Information</h2>
            {/* {recallData.results[0].Manufacturer} */}
            <ul>
                {results}
            </ul>




        </div>
    );
};

export default Results;