import React from 'react';

const MakeModelYear = () => {
    return (
        <div className="make-model-year">
            <form>
                <select>
                    <option value="0">Select Make</option>
                    <option>Audi</option>
                    <option>Chevrolet</option>
                    <option>GM</option>
                    <option>Land Rover</option>
                    <option>Subaru</option>
                    <option>Volkswagen</option>
                </select><br />
                <select>
                    <option value="0">Select Model</option>
                    <option>Chevrolet</option>
                    <option>GM</option>
                    <option>Land Rover</option>
                    <option>Subaru</option>
                    <option>Volkswagen</option>
                </select><br />
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