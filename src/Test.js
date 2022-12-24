import React, {useEffect, useState} from 'react';

function Test(props) {

    const [data, setData] = useState()


    useEffect( () => {
         fetch('https://api.nomoreparties.co/github-search?q=typescript')
            .then(r => r.json())
            .then(names => setData(names.items))
    }, []);

    console.log(data)
    return (
        <div>
            <ul style={{paddingLeft: "100px"}}>

                    {
                        data ? data.map(i => <li>{i.labels_url}</li>) : <li>/</li>
                    }

            </ul>
        </div>
    );
}

export default Test;