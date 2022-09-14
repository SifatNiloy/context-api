import React from 'react';

const Five = (props) => {
    const { price } = props;
    return (
        <div>
            <h1>Price: {price}</h1>
        </div>
    );
};

export default Five;