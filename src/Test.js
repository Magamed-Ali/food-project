import React, {useEffect} from 'react';

function Test(props) {


    useEffect(() => {
        fetch('http://country.io/names.json')
            .then(r => r.json())
            .then(names => console.log('Names arrived!', names))
    }, []);


    return (
        <div></div>
    );
}

export default Test;