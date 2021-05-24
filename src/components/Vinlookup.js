import React, { useState } from 'react';


const Vinlookup = (props) => {

    const [vinInput, setVinInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting VIN: ${vinInput}`)

        // const url = `api.nhtsa.gov/vehicles/DecodeVinExtended/5UXWX7C5*BA?format=json&modelyear=2011`
        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vinInput}?format=json&modelyear=2011`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)



            });


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    {/* Vin Look-up<br /> */}
                    <input type="text"
                        value={vinInput}
                        onChange={e => setVinInput(e.target.value)}
                        placeholder="Enter valid VIN number" />
                </label>
                <input type="submit" value="Submit" />



            </form>
        </div>
    );
};

export default Vinlookup;