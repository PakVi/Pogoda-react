import React, { useState } from 'react';
import Choscity from './choscity';
import Times from './times';
import WeatherData from './api';
import '../styles/app.css';



const Weather = () => {
    const [selectedCity, setSelectedCity] = useState('Москва');
    const [selectedTime, setSelectedTime] = useState('Сейчас');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    return (
        <div>
            <h1>Прогноз погоды</h1>
            <div className="choice">
                <Choscity handleCityChange={handleCityChange} />
                <Times handleTimeChange={handleTimeChange} />
            </div>
            <WeatherData selectedCity={selectedCity} selectedTime={selectedTime}>
            </WeatherData>
        </div>
    );
};

export default Weather;


