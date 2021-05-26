import React, { useState } from 'react';


const Vinlookup = (props) => {
    const requiredVinLength = 17
    const requiredYearLength = 4
    const [vinInput, setVinInput] = useState("")
    const [vinYear, setVinYear] = useState("")
    const [tableItems, setTableItems] = useState("")

    let tableRow = ""
    let aaargh
    // function populateTable(data) {

    //     console.log(data)
    //     let tableItems = data.map((data) => {

    //         return (<tr><td>{data.Variable}</td><td>{data.Value}</td></tr>)

    //     })
    //     console.log(tableItems)
    //     return tableRow = tableItems

    // }


    async function handleSubmit(event) {
        event.preventDefault();
        alert(`Submitting VIN: ${vinInput.toUpperCase()}`)

        // const url = `api.nhtsa.gov/vehicles/DecodeVinExtended/5UXWX7C5*BA?format=json&modelyear=2011`
        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vinInput}?format=json&modelyear=${vinYear}}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)


                const modelYears = data.Results.map((element) => {
                    console.log(element)

                    // console.log(<option value={element.ModelYear}>{element.ModelYear}</option>)
                    // setTableItems({ element.Value })
                    return ([element.Variable, element.Value])
                })

                console.log(modelYears)
                return (<div>{modelYears}</div>)
            })
            .then(data => {
                setTableItems(data)
            })
    }




    return (
        <div>
            <h2>Look up a VIN number</h2>
            <p><small>A model year is optional but recommended for accuracy. If not supplied, model year will be extracted from the VIN number, which may constitute a part of a range of production years.
            </small></p>
            <form onSubmit={handleSubmit}>
                <label>
                    {/* Vin Look-up<br /> */}
                    <input type="text"
                        value={vinInput}
                        maxLength={requiredVinLength}
                        onChange={e => setVinInput(e.target.value)}
                        placeholder="Enter valid VIN" />
                </label>
                <label>
                    <input type="number"

                        onChange={e => setVinYear(e.target.value)}
                        maxLength={requiredYearLength}
                        placeholder=" Model Year (optional)" />
                </label>
                <hr />
                <p><strong>{vinInput.length}</strong> of <strong>{requiredVinLength}</strong> VIN characters entered. Your information is displayed below:</p>
                <br />

                <table style={{ width: "50vw" }}>
                    <tr>
                        <td style={{ width: "50%" }}><strong>VIN NUMBER:</strong></td><td>{vinInput.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <td><strong>YEAR:</strong></td>
                        <td>{vinYear}</td>
                    </tr>

                </table>
                <br />


                <input type="submit" value="Submit" />
            </form>


            {/* {tableOfResults} */}
            {tableItems}



        </div>
    );

};

export default Vinlookup;