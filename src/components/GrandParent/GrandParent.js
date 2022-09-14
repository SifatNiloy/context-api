import React, { createContext } from 'react';
import useService from '../useService/useService';

export const serviceContext = createContext('default value, na dileo hoy');
const GrandParent = ({ services }) => {

    // const services = useService();
    console.log(services)
    return (
        <div>
            <serviceContext.Provider value={services}>

            </serviceContext.Provider>
        </div>
    );
};

export default GrandParent;