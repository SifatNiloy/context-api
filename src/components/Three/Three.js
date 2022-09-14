import React from 'react';
import Four from '../Four/Four';

const Three = ({ service }) => {
    const { description } = service;
    // console.log(service.description)
    return (
        <div style={{ border: '3px solid green' }}>
            <h4>This is from three</h4>
            <h3>{description}</h3>
            <Four></Four>
        </div>
    );
};

export default Three;