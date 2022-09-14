import React from 'react';
import Three from '../Three/Three';

const Two = ({ service }) => {
    const { name, description } = service;

    return (
        <div style={{ border: '1px solid red' }}>
            <h2>this is two</h2>
            <div>
                <p>Name: {name}</p>
                <Three service={service}></Three>
            </div>
        </div>
    );
};

export default Two;