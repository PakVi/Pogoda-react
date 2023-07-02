import React, { useEffect, useState } from 'react';
// import Form from "./choscity.jsx";

import '../styles/weather.css';

const API_KEY = "9c4d8b2234728001e6ab924889279fdf";

const WeatherData = ({ selectedCity, selectedTime }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&lang=ru&units=metric&appid=${API_KEY}`);
                const data = await response.json();
                setWeatherData(data);
                console.log('resp:', data)
            } catch (error) {
                console.log('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [selectedCity]);

    if (!weatherData) {
        return <div>Загрузка...</div>;
    }

    let weatherContent;
    if (selectedTime === "Сейчас") {
        weatherContent = (
            <div className="oneDay">
                <h3>Погода {selectedCity} на {new Date(weatherData.list[0]?.dt * 1000).toLocaleString()} </h3>
                <p>Температура: {weatherData.list[0]?.main.temp.toFixed(1)}°C</p>
                <p>Сейчас {weatherData.list[0]?.weather[0].description}</p>
                <p>Ветер { weatherData.list[0]?.wind.speed.toFixed(1) } м/с </p>
                <p>Влажность { weatherData.list[0]?.main.humidity }% </p>
            </div>
        );
    } else if (selectedTime === "5 дней") {
        let i = 0
        let daysWeather = weatherData.list?.filter(() => (++i) % 8 === 0);
        weatherContent = (
            <div className="fiveDay">
                <h3>Погода на 5 дней {selectedCity} </h3>
                {daysWeather.map((dayWeather) => {
                    return (
                        <div className="everyDay">
                            <h5>Дата: {new Date(dayWeather.dt * 1000).toLocaleDateString()}</h5>
                            <p>Температура: {dayWeather.main.temp.toFixed(1)}°C</p>
                            <p>Ветер { dayWeather.wind.speed.toFixed(1) } м/с </p>
                            <p>Влажность { dayWeather.main.humidity }% </p>
                            <p>{dayWeather.weather[0].description}</p>
                            <hr />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        weatherContent = null;
    }

    return (
        <div className="info">
            {weatherContent}

        </div>
    );
};

export default WeatherData;