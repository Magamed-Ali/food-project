import {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import {getFilteredCategory} from '../api';
import {MealList} from "../components/MealList";
import Preloader from "../components/Preloader";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    useEffect(()=> {
        getFilteredCategory(name).then((data) => setMeals(data.meals))
    }, [name]);

    return <div>
        <button className='btn' onClick={handleClick}> Go Back </button>
        {
            !meals.length ? <Preloader/> : <MealList meals={meals}/>
        }
    </div>
}

export {Category}