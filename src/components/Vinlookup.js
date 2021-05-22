import React, { useState } from 'react';


const Vinlookup = (props) => {

    const [vinInput, setVinInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting VIN: ${vinInput}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Vin Look-up<br />
                    <input type="text"
                        value={vinInput}
                        onChange={e => setVinInput(e.target.value)}
                        placeholder="Enter valid VIN number" />
                </label>
                <input type="submit" value="Submit" />
                {/* <button>Search</button> */}


            </form>
        </div>
    );
};

export default Vinlookup;