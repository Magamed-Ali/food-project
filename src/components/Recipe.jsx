import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {getMealById} from "../api";
import {Preloader} from "./Preloader"

function Recipe(props) {
    const [recipe, setRecipe] = useState({})
    const id = useParams();
    const goBack = useNavigate()

    function handleClick(){
        goBack("/");
    }

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id])
    return (
        <div>
            <button className='btn' onClick={handleClick}> Go Back </button>
            {!recipe.idMeal ? <Preloader/> : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h1>{recipe.strMeal}</h1>
                    <p>{recipe.strInstructions}</p>
                </div>
            )}
        </div>
    );
}

export default Recipe;