import React from 'react';
import {citylist} from "./citylist";

const Choscity = ({ handleCityChange }) => {
    return (
        <div>
            <h2>Город</h2>
            <select onChange={handleCityChange}>
                {citylist.map((city) => (<option key={city} value={city} > {city}</option>))}
            </select>
        </div>
    );
};

export default Choscity;

