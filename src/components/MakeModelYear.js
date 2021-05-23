import React from 'react';
import { useState, useEffect } from 'react'
import staticMakesData from "../makes-by-model-year.json"




let makesOptions = staticMakesData.Results.map((element, i) => {


    return <option value={i + 1}>{element.Make}</option>;
}

)
// let makesOptions = 


const MakeModelYear = () => {

    let [makes, setMakes] = useState(makesOptions)

    console.log(makesOptions)
    setMakes = ({ makesOptions })







    return (
        <div className="make-model-year">
            <form>
                {/* map over json data to fulfill options list */}
                <select>
                    <option value="0">Select Make</option>
                    <option>Audi</option>
                    <option>Chevrolet</option>
                    <option>GM</option>
                    <option>Land Rover</option>
                    <option>Subaru</option>
                    <option>Volkswagen</option>
                </select>
                <select>
                    <option value="0">Select Model</option>
                    <option>Chevrolet</option>
                    <option>GM</option>
                    <option>Land Rover</option>
                    <option>Subaru</option>
                    <option>Volkswagen</option>
                </select>
                <select>
                    <option value="0">Select Year</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                </select>

            </form>
        </div>
    );
};

export default MakeModelYear;