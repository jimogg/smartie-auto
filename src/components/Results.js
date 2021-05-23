import React from 'react';
import recallData from "../recall-yr-mk-model.json";
const Results = () => {

    // by make model year
    // api.nhtsa.gov/recalls/recallsByVehicle?make={MAKE}&model={MODEL}&modelYear={MODEL_YR}
    const url = `api.nhtsa.gov/vehicles/GetMakeForManufacturer/honda?format=json`

    fetch(url)
        .then(response => response.json)
        .then(data => console.log(data));

    const results = [
        <p>{recallData.results[0].ModelYear} {recallData.results[0].Make} {recallData.results[0].Model}</p>,

        <li>Manufacturer: {recallData.results[0].Manufacturer}</li>,
        <li>NHTSACampaignNumber: {recallData.results[0].NHTSACampaignNumber}</li>,
        <li>NHTSAActionNumber: {recallData.results[0].NHTSAActionNumber}</li>,
        <li>ReportReceivedDate: {recallData.results[0].ReportReceivedDate}</li>,
        <li>Component: {recallData.results[0].Component}</li>,
        <h3>Summary</h3>,
        <p>{recallData.results[0].Summary}</p>,
        <h3>Consequence</h3>,
        <p>{recallData.results[0].Conequence}</p>,
        <h3>Notes</h3>,
        <p>{recallData.results[0].Notes}</p>,


    ]
    console.log(recallData)
    return (
        <div> <h2>Manufacturer Recall Information</h2>
            {/* {recallData.results[0].Manufacturer} */}
            <ul>
                {results}
            </ul>
            {/* {
            "Manufacturer": "Honda (American Honda Motor Co.)",
            "NHTSACampaignNumber": "19V182000",
            "NHTSAActionNumber": "EA15001",
            "ReportReceivedDate": "06/03/2019",
            "Component": "AIR BAGS:FRONTAL:DRIVER SIDE:INFLATOR MODULE",
            "Summary": "Honda (American Honda Motor Co.) is recalling specific 2003 Acura 3.2CL, 2013-2016 ILX, 2013-2014 ILX Hybrid, 2003-2006 MDX, 2007-2016 RDX, 2002-2003 3.2TL, 2004-2006, and 2009-2014 TL, 2010-2013 ZDX and 2001-2007 and 2009 Honda Accord, 2001-2005 Civic, 2003-2005 Civic Hybrid, 2001-2005 Civic GX NGV, 2002-2007 and 2010-2011 CR-V, 2003-2011 Element, 2007 Fit, 2002-2004 Odyssey, 2003-2008 Pilot, and 2006-2014 Ridgeline vehicles.  The affected vehicles received a replacement driver air bag inflator as part of a previous Takata inflator recall remedy or a replacement driver air bag module containing the same inflator type as a service part.  Due to a manufacturing error, in the event of a crash necessitating deployment of the driver frontal air bag, these inflators may explode.",
            "Conequence": "An explosion of an inflator within the driver frontal air bag module may result in sharp metal fragments striking the driver, front seat passenger or other occupants resulting in serious injury or death.",
            "Remedy": "Honda will notify owners, and dealers will replace the driver's air bag inflator with an alternate inflator, free of charge.  The recall began April 10, 2019.  Honda owners may contact customer service at 1-888-234-2138.  Honda's number for this recall is O41.  Acura owners may contact customer service at 1-888-234-2138.  Acura's number for this recall is U40.",
            "Notes": "Owners may also contact the National Highway Traffic Safety Administration Vehicle Safety Hotline at 1-888-327-4236 (TTY 1-800-424-9153), or go to www.safercar.gov.",
            "ModelYear": "2012",
            "Make": "ACURA",
            "Model": "RDX"
        }, */}



        </div>
    );
};

export default Results;