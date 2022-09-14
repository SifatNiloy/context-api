import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { RingContext } from '../../App';
import Five from '../Five/Five';

const Four = ({ service }) => {
    const { name, description, price, img } = service;
    // console.log(abc)
    return (
        <Card style={{ width: '18rem', border: '2px solid blue' }}>
            <Card.Img style={{ width: '200px' }} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Five price={price}></Five>
                <Button variant="primary"></Button>
            </Card.Body>
        </Card >
    );
};

export default Four;