import React, { useContext } from 'react';
import { serviceContext } from '../GrandParent/GrandParent';

const Myself = () => {
    const serviceElements = useContext(serviceContext);
    const { name, description } = serviceElements;
    // console.log(serviceElements)
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Description: {description}</h3>
        </div>
    );
};

export default Myself;