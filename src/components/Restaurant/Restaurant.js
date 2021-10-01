import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';
import './Restaurant.css';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);
    const handleSerachField = (e) => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <input onChange={handleSerachField} placeholder="Search Meals Here" type="text" />

            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) =>
                    meals.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals>)
                )}
            </Row>






        </div>
    );
};

export default Restaurant;