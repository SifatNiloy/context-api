import React, { useEffect, useState } from 'react';
import Two from '../Two/Two';

const One = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>This is One</h2>

            <div className="row">
                {
                    services.map(service => <Two key={service.id} service={service}
                    > </Two>)
                }
            </div>
        </div>
    );
};

export default One;