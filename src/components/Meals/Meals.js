import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Meals = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/meal/${props.meal?.idMeal}`);
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 150)}
                        </Card.Text>
                        <Link to={`/meal/${props.meal?.idMeal}`}>See Details</Link>
                        <Button onClick={handleClick}>Detail Using History</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meals;