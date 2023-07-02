import React from 'react';

const Times = ({ handleTimeChange }) => {
    const times = ['Сейчас', '5 дней'];

    return (
        <div>
            <h2>Промежуток времени</h2>
            <select onChange={handleTimeChange}>
                {times.map((time) => (<option key={time} value={time} >{time}</option>))}
            </select>
        </div>
    );
};

export default Times;