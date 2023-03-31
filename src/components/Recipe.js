import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, useLocation} from "react-router-dom";
import {getMealById} from "../api";
import Preloader from "./Preloader";


function Recipe(props) {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams();
    const goBack = useNavigate()

    const location = useLocation();

    function handleClick() {
        goBack(-1);
    }

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]))

    }, [id])

    console.log(id)
    return (
        <div>
            <button className='btn recipeBtn' onClick={handleClick}> Go Back</button>
            {!recipe.idMeal ? <Preloader/> : (<div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h3>Meal: {recipe.strMeal}</h3>
                    <h6>Category: {recipe.strCategory}</h6>
                    {
                        recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null
                    }
                    <p>Instructions: {recipe.strInstructions}</p>
                    {recipe.strYoutube ? (
                            <div className="row">
                                <h5>Video Recipe</h5>
                                <iframe
                                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id}
                                        allowFullScreen/>
                            </div>
                        )
                        : null}
                    <div>
                        <table className="centered">
                            <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if (key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <button className='btn' onClick={handleClick}> Go Back</button>
        </div>
    );
}

export default Recipe;