import React from 'react';
import Four from '../Four/Four';
import useService from '../useService/useService';

const Three = () => {
    const { services } = useService();
    console.log(services)
    return (
        <div style={{ border: '3px solid green' }}>
            <h4>This is from three</h4>
            {
                services.map(service => <Four
                    key={service.id}
                    service={service}></Four>)
            }
        </div>
    );
};

export default Three;