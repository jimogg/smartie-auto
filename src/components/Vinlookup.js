import React, { useState } from 'react';


const Vinlookup = (props) => {
    const requiredVinLength = 17
    const requiredYearLength = 4
    const [vinInput, setVinInput] = useState("")
    const [vinYear, setVinYear] = useState("")
    const [tableItems, setTableItems] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vinInput}?format=json&modelyear=${vinYear}}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const vinData = data.Results.map((element) => {
                    if (element.Value) {

                        return (<tr><td><strong>{element.Variable}</strong></td> <td>{element.Value}</td></tr>)
                    }

                })

                return (<tr>{vinData}</tr>)
            })
            .then(data => {
                setTableItems(data)
            })
    }




    return (
        <div>
            <h2>Look up a VIN number</h2>
            <p>A model year is optional but recommended for accuracy. If not supplied, model year will be extracted from the VIN number.
            </p>
            <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="vin-input">VIN</label>
                <input type="text"
                    value={vinInput}
                    maxLength={requiredVinLength}
                    onChange={e => setVinInput(e.target.value)}
                    placeholder="Enter valid VIN" />

                <label className="label" htmlFor="year-input">YEAR</label>
                <input type="number"

                    onChange={e => setVinYear(e.target.value)}
                    maxLength={requiredYearLength}
                    placeholder=" Model Year (optional)" />

                <p><strong>{vinInput.length}</strong> of <strong>{requiredVinLength}</strong> VIN characters entered. Your information is displayed below:</p>
                <br />
                {/* display the VIN and Year the user has entered */}
                <table style={{ width: "50vw" }}>
                    <tbody><tr>
                        <td style={{ width: "50%" }}><strong>VIN NUMBER:</strong></td><td>{vinInput.toUpperCase()}</td>
                    </tr>
                        <tr>
                            <td><strong>YEAR:</strong></td>
                            <td>{vinYear}</td>
                        </tr>
                    </tbody>
                </table>
                <br />


                <input type="submit" value="Submit" />
            </form>
            <br />

            {/* display a table of results on the screen */}
            <h3>RESULTS</h3>
            <hr />
            <table><tbody>{tableItems}</tbody></table>




        </div>
    );

};

export default Vinlookup;