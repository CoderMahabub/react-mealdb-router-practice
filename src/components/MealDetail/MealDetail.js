import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const MealDetail = () => {
    let { mealId } = useParams();
    const [mealDetails, setMealDetails] = useState([]);

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]))
    }, [])
    const { strMeal, strMealThumb, strInstructions } = mealDetails;
    return (
        // <div>
        //     <img src={strMealThumb} alt="" />
        //     <h3> {strMeal}</h3>
        //     <p> <small>Catagory: {strCategory}</small> </p>
        //     <p>{strInstructions}</p>
        // </div>

        <>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default MealDetail;