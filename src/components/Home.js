import {useState, useEffect} from 'react';
import {getAllCategories} from '../api';

function Home(props) {

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data => {
            setCatalog(data.categories)
        }))
    })

    return (
        <div>sfjfgjsj</div>
    );
}

export default Home;