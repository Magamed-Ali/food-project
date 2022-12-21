import {useState, useEffect} from 'react';
import {getAllCategories} from '../api';
import Preloader from "./Preloader";
import {CategoryList} from "./CategoryList";

function Home(props) {

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data => {
            setCatalog(data.categories)
        }))
    }, [])


    return (
        <div>{
            catalog.length ?
            <CategoryList catalog={catalog}/>
             : <Preloader/>
        }</div>
    );
}

export default Home;